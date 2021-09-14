import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
      
        let myText = text.toUpperCase();
        setText(myText);
        props.showAlert('Converted to Upper Case','success');
    }
    const handleLoClick=()=>{
   
      let myText2 = text.toLowerCase();
      setText(myText2);
      props.showAlert('Converted to Lower Case','success')
  }
  const handleClear=()=>{
    setText("");
    props.showAlert('Text is cleared','success')
  }
    const handleOnChange=(event)=>{
       
        setText(event.target.value);
    }
    const handleSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text,setText]=useState("");

    return (
      <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={handleClear}>ClearText</button>
        <button disabled={text.length===0} className="btn btn-success" onClick={handleSpaces}>RemoveExtraSpace</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((e)=>{return e.length!=0}).length} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?<b>{text}</b>:"Nothing to preview"}</p>
      </div>
      </>
    );
}
