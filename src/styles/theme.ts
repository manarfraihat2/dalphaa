import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d81b60', // اللون الوردي الأساسي
    },
    text: {
      primary: '#333333', // رمادي داكن للنصوص
      secondary: '#666666', // رمادي متوسط للنصوص الثانوية
    },
    background: {
      default: '#f5f5f5', // لون الخلفية الفاتح
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
