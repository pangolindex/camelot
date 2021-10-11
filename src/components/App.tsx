import React from 'react';
import Router from './Router';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
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
