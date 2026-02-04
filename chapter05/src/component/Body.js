import "./Body.css";
import { useState, useRef } from "react";

function Body() {
   const [text, setText] = useState("");
   const textRef = useRef();

   const handleOnChange = (e) => {
    setText(e.target.value);
   };
   const handleOnClick = (e) => {
    if (text.length < 5) {
        textRef.current.focus();
        alert("길이가 짧습니다.");
    } else {
        alert(text);
        setText("");
    }
   };

   return(
    <div>
        <input ref={textRef} value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>작성완료</button>
    </div>
   );
}   

export default Body ;

