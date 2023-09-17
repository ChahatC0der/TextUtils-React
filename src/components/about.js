import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react'

export default function About() {

    const [mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    });

    const [btnName,setbtnName]=useState("Enable dark mode");

    const enableDarkMode=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnName("Enable dark mode");
        }else{
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnName("Enable light mode");
        }
    }

  return (
    <div className="container" style={mystyle}>
        <h2>About us</h2>
    <Accordion defaultActiveKey="0" style={mystyle}>
      
      <Accordion.Item eventKey="0" style={mystyle}>
      <div style={mystyle}><Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header></div>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1" style={mystyle}>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className="container">
    <button type='button' className='btn btn-primary' onClick={enableDarkMode}>{btnName}</button>
    </div>
    </div>
  );
}
