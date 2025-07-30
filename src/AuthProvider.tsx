'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db } from '@/firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface UserType {
  uid: string;
  email: string | null;
  role: string;
  photoURL: string;
}

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  openLogin: boolean;
  setOpenLogin: (value: boolean) => void;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!isMounted) return;

      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'users', firebaseUser.uid);
        const docSnap = await getDoc(docRef);

        if (!isMounted) return;

        const role = docSnap.exists() ? docSnap.data()?.role || 'buyer' : 'buyer';
        const photoURL =
          (docSnap.exists() && docSnap.data()?.profilePicture) ||
          firebaseUser.photoURL ||
          '/images/icons/profile.png';

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role,
          photoURL,
        });
      } catch (error) {
        if (!isMounted) return;
        console.error('AuthProvider error:', error);
        setUser(null);
        setOpenLogin(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } finally {
      setUser(null);
      setOpenLogin(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, openLogin, setOpenLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
