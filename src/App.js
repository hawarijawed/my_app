// import logo from './logo.svg';
// import './App.css';

import About from "./MyComponents/About";
import Alert from "./MyComponents/Alert";
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForms";
import React,{ useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App()
{
  const [mode,setMode] = useState('light')

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    //  {/*Type is used to different type of alert notification eg. success, danger, warning etc*/}
    })

    setTimeout(()=>{
      setAlert(null)
    },1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#2e3330';
      showAlert('Dark mode is enabled','success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'; //{/*dont use color as light */}
      showAlert('Light mode is enabled','success');
    }
      
  }
  return(
    <>
    <Router>
        <Navbar title="TextUtils" description="About Us"  mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
          <div className="container my-3">  {/*my-3 means margin in Y-axis*/}
            {/* <TextForm heading="Text Case Converter" mode={mode} showAlert={showAlert}/> */}
          {/* <About/> */}
          
            {/*
            It is a good idea to use exact keyword in react to avoid partial matching.
            */}
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm heading="Text Case Converter" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
          
          </div>
    </Router>
    </>
  );
}

export default App;

