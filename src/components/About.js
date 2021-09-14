import React from 'react'

export default function About(props) {
    
    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
        border: '2px solid',
        borderColor: props.mode==='dark'?'#5ea1db':'#3e58d599'
    }
    
    return (
        <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
            <h1 className="my-3">About Us</h1>
               <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your Text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <b>This app is used to Analyze your text by counting number of words,you can also make your words upper case and lower case as per your interest.</b>  
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free To Use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
           <b>This app is totally free of cost & easy to use .</b> 
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <b>This app is compatible with desktop and mobile browser applications.</b> 
        </div>
        </div>
    </div>
</div>

</div>
    )
}
