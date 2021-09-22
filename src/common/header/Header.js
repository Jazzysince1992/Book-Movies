import React, {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import Modal from '../../screens/Modal/Modal';
export default function Header(){
    const[isOpen, setIsOpen] =useState(false);
function showModal(){
    setIsOpen(!isOpen);
}
    return(  
    <div className="Header">
    <img className="logo"src={Logo} alt="logo"/>
    <Button className="loginOrLogoutButton" onClick={showModal} variant="contained" name="Login" >Login</Button>
    <Modal
    isOpen={isOpen}
    onRequestClose ={showModal}
    contentLabel="My dialog"><Button className="bookShowButton" name= "Book Show" color="primary" variant="contained" >Book Show</Button></Modal>
    
    
 </div>   );
}
