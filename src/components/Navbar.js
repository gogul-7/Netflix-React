import React,{useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>500?setShow(true):setShow(false);
        })
    })
    console.log(show);
  return (
    <div className={`navBar ${show&&"navBar_scroll"}`}>
        <img className='netLogo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='netflix-logo'></img>
    </div>
  )
}

export default Navbar