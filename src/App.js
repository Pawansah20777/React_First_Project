import './App.css';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { useState } from 'react';
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
     setalert({
      msg:message,
      typ:type
     })
     setTimeout(() => {
      setalert(null);
     }, 3000);
  }
  
  const toggle= ()=>{
   if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showalert('Dark mode has been enabled','success');
    document.title="Dark mode is enabled";

    // setInterval(() => {
    //   document.title="Dark mode is amazing mode";
    // }, 5000);
    // setInterval(() => {
    //   document.title="Enable Light mode now";
    // }, 3000);

   
   }

   else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert('Light mode has been enabled','success');
    document.title="Light mode is enabled"
   }
  }

  return (
   <>  
   <Router>
<Navbar a="TextUtils" b="About" c={mode} toggle={toggle}/>
<Alert alert={alert}/>

  <div className='container'>
  <Routes>
  <Route path="/About" element={<About />} />
  <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" c={mode} />} />
</Routes>
  </div>
  </Router>
 

   </>
  );
}

export default App;
