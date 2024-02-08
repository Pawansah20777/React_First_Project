import React, {useState} from 'react'

export default function TextForm(props) {
    const A=()=>{
        let a= text.toUpperCase();
        settext(a)  
        props.showalert("Converted to Uppercase!","success");
    }
    const B=()=>{
      let b= text.toLowerCase();
      settext(b)  
      props.showalert("Converted to Lowercase!","success");
  }     
  const C=()=>{
    let c= '';
    settext(c)
    props.showalert("Text is Cleared!","success");      
}   
const D=()=>{ 
  var d= document.getElementById('MyBox');
  d.select() ;
  navigator.clipboard.writeText(d.value) ;  
  props.showalert("Copied to clipboard!","success");  
}   
const E=()=>{
  let e= text.split(/[ ]+/);
  settext(e.join(" "));    
  props.showalert("Extra Spaces Removed!","success");  
}      
    const d=(event)=>{
        settext(event.target.value);
    }

    const [text,settext]=useState('Enter Text Here');

    return (
      <>
    <div className='container' style={{color:props.c==='dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
    <textarea className='form-control' value={text} onChange={d} style={{backgroundColor:props.c==='dark' ? 'white':'grey',
  color:props.c==='dark' ? 'black':'white'}} id='MyBox' rows='8'></textarea>
      </div>
      <button className='btn btn-primary' onClick={A}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-3' onClick={B}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-3' onClick={C}>Clear Text</button>
      <button className='btn btn-primary mx-3' onClick={D}>Copy Text</button>
      <button className='btn btn-primary mx-3' onClick={E}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.c==='dark' ? 'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}

