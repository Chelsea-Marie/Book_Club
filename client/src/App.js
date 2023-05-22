import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // <ApolloProvider client={client}>
    // <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
        {/* <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/profiles/:profileId" 
            element={<Profile />} 
          />
        </Routes> */}
        </div>
        <Footer />
      </div>
    // </Router>
    // </ApolloProvider>
  );
}

export default App;
