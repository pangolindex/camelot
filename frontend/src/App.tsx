import React from 'react';
import Router from './screens/Router';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import colors from 'styles/colors';

const { main } = colors;
Object.keys(main).forEach((key: string) => {
  document.documentElement.style.setProperty(key, (main as any)[key]);
});

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
