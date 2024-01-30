import React, {useState} from "react";

export default function TextForm(props){
    const [text, setText] = useState('Enter your text here.');
    let preText = text;
    const handleUPclick = ()=>{
        // console.log("Upper case is clicked");
        let newText = text.toUpperCase();
    
        setText(newText);
        props.showAlert('Text converted to upper case','success');
    }

    const handleLOclick = ()=>{
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert('Text converted to lower case','success');
    }

    const handleCamelclick = () =>{
        let newText = text.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
        setText(newText);
        props.showAlert('Text converted to camel case','success');
    }

    const handleTitleclick = () =>{
        let newText = text.replace(/\w\S*/g, function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });

        setText(newText);
        props.showAlert('Text converted to Title','success');
    }

    const handleClearclick = () =>{
        let newText = ""
        setText(newText);
        props.showAlert('Text is cleared','success');
    }

    const handleRemoveSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra space is removed','success')
    }
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text)
        .then(()=>{
            props.showAlert('Text is copied','success')
        })
        .catch(err=>{
            props.showAlert(`Unsucessful to copy text ${err}`,'fail')
        });

    }
    // This function allows you to write in the text input area.
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    return(
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{background: props.mode==='light'?'white':'#2e3330',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>

            <button className="btn btn-primary mx-2 my-2" onClick={handleUPclick}>Convert to Uppercase</button> {/*mx-2 is bootstrap class that provides margin in X-axis*/}
            <button className="btn btn-primary mx-2 my-2" onClick={handleLOclick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCamelclick}>Convert to CamelCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleTitleclick}>Convert to Title case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearclick}>Clear text</button>

        </div>

        <div className="container my-4" style={{color:props.mode==='light'?'black':'white' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008* text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{preText}</p>
        </div>
        </>
    );
}