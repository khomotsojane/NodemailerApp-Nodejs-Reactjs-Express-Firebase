import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <div className='app' style={{backgroundColor:'blue'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Employee/>}></Route>
          <Route path='/create' element={<CreateEmployee/>}></Route>
          <Route path='/update/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;