import React,{Fragment} from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

function RouterModule() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route Exect path='/' element={<App/>}></Route>
                <Route Exect path='/home' element={<App/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/testimonial' element={<Testimonial/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default RouterModule