import MyForm from './compoents/MyForm.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profile from './compoents/Profile.jsx'
import './App.css'

function App() {
  
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<MyForm />}></Route>
      <Route path='/Profile'element={<Profile />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
