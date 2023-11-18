import { useEffect, useState } from "react";

export function onScroll(){
    const [scrollPos,setScrollPos] = useState(0);
    const [visible,setVisible] = useState(false);
    
    const handleScroll = () =>{
        const currentScrollPos = window.scrollY;
        if(scrollPos>currentScrollPos && scrollPos - currentScrollPos > 70){
            setVisible(true)
        }if(currentScrollPos < 10){
            setVisible(false)
        }

        setScrollPos(currentScrollPos);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return() => window.removeEventListener("scroll",handleScroll);

        
    },[visible, scrollPos, handleScroll])
     console.log(scrollTop)   
    
}

export function arrowUpHandle(){
    window.scroll(0, 0);
}