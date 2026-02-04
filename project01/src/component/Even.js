import { useEffect } from "react";

function Even() {
    useEffect(() => {
        console.log("Even component mount");
        return () => {
            console.log("Even component unmount");
        };
    }, []);
    return <div>현재 카운트는 짝수입니다.</div>;
}

export default Even ;