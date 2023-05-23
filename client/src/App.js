import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Suggest from './pages/Suggest';
import Store from './pages/Store';
import Login from './pages/Login';

import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  const [currentPage, setCurrentPage] = useState("Home")

  function renderPage() {
    if (currentPage == "Home") {
      return <Home />
    }
    if (currentPage == "About") {
      return <About />
    }
    if (currentPage == "Suggest") {
      return <Suggest />
    }
    if (currentPage == "Store") {
      return <Store />
    }
    if (currentPage == "Login") {
      return <Login />
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <Container className="mt-5">
        {renderPage()}
      </Container>

      <Footer />
    </>
  );
}

export default App;
