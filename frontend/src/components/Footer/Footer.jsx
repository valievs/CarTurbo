import React from 'react'
import {Link} from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'


function Footer() {
  return (
    <footer className='footer'>

        <div className="box-container">
            <div className="box">
            <Link className='logo' to="/"> <NoCrashIcon style={{fontSize:24,color:"white"}}/> <h3>KOCaucasus</h3></Link>
                <p className='box-text'>Honesty is the Best Policy.<br/> Best choice, best quality </p>
               
            </div>

            <div className="box">
                <h3 className='connect'>Connect with Us</h3>
            <div className="social">
            <Link className='iconfot'  to=""> <FacebookIcon className='fb' /> </Link>
            <Link className='iconfot'  to=""> <InstagramIcon className='ig'/> </Link>
            <Link className='iconfot'  to=""> <TelegramIcon className='tg'/> </Link>
            <Link className='iconfot'  to=""> <WhatsAppIcon className='wp'/> </Link>
                </div>
            </div>

            <div className="box">
                <h3 className='box-title'>Quick Links</h3>
               <div className='footerLinkBox'>

               <Link className='footerLink' to="/" >Home</Link>
                <Link className='footerLink' to="/cars" >Cars</Link>
                <Link className='footerLink' to="/contact" >Contact</Link>
               </div>
            </div>
        </div>
        <div className="copy"> © 2022 <Link to="">Valiyev`s</Link></div>
    </footer>
  )
}

export default Footer