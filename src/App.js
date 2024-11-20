import React from 'react'
import { Fragment } from 'react'
import Header from './components/Header'
import './App.css';
import Main from './components/Main';
import Footer from "./components/Footer";

function App() {
  return (
    // <div>App</div>
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>

  )
}

export default App