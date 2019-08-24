import React from 'react';
import './App.css';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header title="Dev Education" />

      <Content>
        <p>
          This is our <strong> &lt;Content&gt;</strong> component
        </p>
      </Content>

      <Footer copyright={`Dev Education ${new Date().getFullYear()}`} />
    </div>
  );
}

export default App;
