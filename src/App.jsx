import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Register';
import Home from './Componets/Home';
import Recipes from './Componets/Recipes';
import Recepieform from './Componets/Recepieform';
import View from './Componets/View';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route  index element={<Recipes/>}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Registrationfrom' element={<Register />}></Route>
            <Route path='/createrecipe' element={<Recepieform/>}></Route>
            <Route path='/view' element={<View/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
