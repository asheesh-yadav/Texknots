import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import View1 from './View1';
const App = () => {
  return (
    <div>
        <Router>
          <Header/>
        <Routes>
         <Route path='/' element= {<Home/>} ></Route>
         <Route path='/view/:id' element= {<View/>} ></Route>
            <Route path='/view1/:id' element= {<View1/>} ></Route>
         <Route path='/contact' element= {<Contact/>} ></Route>
        </Routes>
    <Footer/>
      </Router>
    </div>
  )
}

export default App
