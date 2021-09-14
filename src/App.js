
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(()=>{
        setAlert(null)
       } 
       ,2000)
  }

  const toggleMode=()=>{

    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(26 68 77)';
      showAlert('Dark Mode has been enabled','success');
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light has been Mode enabled','success');
      
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Analyzer" about="About" mode={mode} toggleMode={toggleMode} />
{/* <Navbar/>  */}

<Alert alert={alert}/>
<div className="container my-3">
<Switch>
    <Route path="/about">
     <About mode={mode}/>
       </Route>
    <Route path="/">
     <TextForm heading='Text-Analyzer' showAlert={showAlert} mode={mode}/>
    </Route>
</Switch>
  
{/* <About/> */}
</div>
    </Router>

</>
  );
}

export default App;
