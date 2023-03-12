//..........
//importing
//..........

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Landing, Register, Error, ProtectedRoute} from './pages'
import {
 AddJob,
 AllJobs,
 Profile,
 Stats,
 SharedLayout
}from './pages/DashBoard'



//..........
//App
//..........
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <SharedLayout/>
        </ProtectedRoute>
        }>
          <Route index element={<Stats/>}/>
          <Route path='AllJobs' element={<AllJobs/>}/>
          <Route path='AddJob' element={<AddJob/>}/>
          <Route path='Profile' element={<Profile/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </BrowserRouter>
  );
}


//..........
//exporting
//..........
export default App;
