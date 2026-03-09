import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css'; // Archivo de estilos CSS

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
