import React from "react";
import "./Header.css";

const Header = () => {
    //onsole.log("Header update");   // Header 컴포넌트 호출, 리렌더 될 때마다 console에 출력
    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );  
}

export default React.memo(Header) ;