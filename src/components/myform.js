import React,{useState} from 'react';


export default function Form(props) {
    const [text,setText]=useState('Enter text here2');
    const handleUpperClick=()=>{
        console.log("Button was clicked",text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowerClick=()=>{
        console.log("Button was clicked",text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    // text='my text'; // Wrong way to change the state
    // setText("Set text"); // Correct way to change the state
  return (
    <>
    <h1 style={{color:props.mode==='dark'?'white':'grey'}}>{props.heading}</h1>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'grey'}}>
            <label htmlFor="mybox" className="form-label " style={{color:props.mode==='dark'?'white':'grey'}}>Example textarea</label>
            <textarea id="mybox" className="form-control my-1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} rows="8"></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpperClick} >Convert to uppercase</button>
            <button className="btn btn-primary " onClick={handleLowerClick} >Convert to lowercase</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'grey'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here."}</p>
        </div>
    </>
  );
}