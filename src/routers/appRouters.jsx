import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import InfoList from '../components/infoList';



import Layout from '../layout/layout';
const AppRouters = () => {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='/:search' element={<Home/>}/>
        
        <Route path='/infoList/:id' element={<InfoList/>}/>
        

        {/* Not Found */}
        <Route path='/*' element={<h1>Not Found 404</h1>} />

        </Route>
        

            

      </Routes>


    </Router>
  )
}

export default AppRouters