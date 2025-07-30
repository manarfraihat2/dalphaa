'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  login: (email: string, password: string) => Promise<void>;
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
  const [loading, setLoading] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  // محاكاة تسجيل الدخول (بدون Firebase)
  const login = async (email: string, password: string) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({
          uid: '123456',
          email,
          role: 'buyer',
          photoURL: '/images/icons/profile.png',
        });
        setOpenLogin(false);
        setLoading(false);
        resolve();
      }, 1000); // محاكاة تأخير
    });
  };

  // تسجيل خروج محاكاة
  const logout = async () => {
    setUser(null);
    setOpenLogin(true);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, openLogin, setOpenLogin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
