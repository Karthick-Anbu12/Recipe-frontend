import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Register';
import Home from './Componets/Home';
import Recipes from './Componets/Recipes';
import Recepieform from './Componets/Recepieform';
import View from './Componets/View';
import { UserProvider } from './Componets/Context';


function App() {
  //const background={backgroundImage:recipe}
  return (
    <div  >
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Recipes />}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/Registrationfrom' element={<Register />}></Route>
              <Route path='/createrecipe' element={<Recepieform />}></Route>
              <Route path='/view/:id' element={<View />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
