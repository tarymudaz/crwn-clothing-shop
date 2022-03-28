

import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './sign-in/sign-in.component';



const App = () => {
  return (
<Routes>
 
  <Route path='/' element={<Navigation/>} >
  <Route index element={<Home/>}/>
  <Route path='sign-In' element={<SignIn/>}/>
  </Route>
 
 </Routes>

    
  );
}

export default App;