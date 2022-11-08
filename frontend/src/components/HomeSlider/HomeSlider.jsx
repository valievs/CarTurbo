import React from 'react'
import { Link } from 'react-router-dom'

import './HomeSlider.css'
import carImg from '../../assets/home-img.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function HomeSlider() {
  return (
    <section className="homeSlider">
       <div className="homeImage">
        <img className='backgImg' src={carImg} alt="img" />
       </div>
      <div className="content">
      <h2 className='home-text'>Are you looking for Cars ?</h2>
          <div className="homeSocial">
              <Link className='icon'  to=""> <FacebookIcon className='fb' /> </Link>
              <Link className='icon'  to=""> <InstagramIcon className='ig'/> </Link>
              <Link className='icon'  to=""> <TelegramIcon className='tg'/> </Link>
              <Link className='icon'  to=""> <WhatsAppIcon className='wp'/> </Link>
          </div>
      </div>
  </section>
  )
}

export default HomeSlider