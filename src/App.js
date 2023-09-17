// import logo from './logo.svg';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Navbar2,Navbar1} from './components/Navbar';
import About from './components/about';
import Form from './components/myform';
import Alert from './components/Alert';

function App() {
  const [mode,enableDarkMode] = useState("light"); // whether dark mode is enabled or not.
  const [alert,setAlert] = useState(null); 
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      enableDarkMode('dark');
      showAlert("Dark mode has been enabled","success");
      document.body.style.backgroundColor = '#042743';
      document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing.';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now.';
      // }, 1500);
    }else{
      enableDarkMode('light');
      showAlert("light mode has been enabled","success");
      document.body.style.backgroundColor = 'white';
      document.title='TextUtils - Light Mode'

    }
  }
  return (
    <>
    <Router>
    <Navbar1 title="textutils" mode={mode} toggleMode={toggleMode}  abouttext="About" contactus="Contact us"></Navbar1>
    <Alert alert={alert}/>

    {/* <Form heading="TextForm" showAlert={showAlert} mode={mode}/> */}
    {/* <About /> */}
    <Routes>
      <Route path="/about" element={<About />}>
        {/* <About /> */}
      </Route>
      <Route path="/" element={<Form heading="TextForm" showAlert={showAlert} mode={mode} />}>
        {/* <Form heading="TextForm" showAlert={showAlert} mode={mode} /> */}
      </Route>
    </Routes>
    </Router>
    </>
    // <div className="App">
    //   {  <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> }
    //   Hello Jee
       
      
    // </div>
  );
}

export default App;
