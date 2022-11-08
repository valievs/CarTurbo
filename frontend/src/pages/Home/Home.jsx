
import Services from '../../components/Services/Services'
import './Home.css'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Products from '../../components/Products/Products'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import kia from '../../assets/kia.png'
import hundai from '../../assets/hundai.png'
import bmw from '../../assets/bmw.png'
import genesis from '../../assets/genesis.png'
import young from '../../assets/young.png'
import mercedes from '../../assets/mercedes.png'
import toyota from '../../assets/toyota.png'
import honda from '../../assets/honda.png'

function Home() {
  return (
    <div className='home'>
      

     <HomeSlider/>

      <Services/>

  <div className="homeProduct">
  <Products/>
  </div>
      
      <div className="carLogo">
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
              spaceBetween={80}
              slidesPerView={4}
              autoplay={{delay: 1500}}
              >


            <SwiperSlide><img src={kia} alt="kia" /></SwiperSlide>
            <SwiperSlide><img src={hundai} alt="hundai" /></SwiperSlide>
            <SwiperSlide><img src={bmw} alt="bmw" /></SwiperSlide>
            <SwiperSlide><img src={toyota} alt="toyota" /></SwiperSlide>
            <SwiperSlide><img src={young} alt="young" /></SwiperSlide>
            <SwiperSlide><img src={genesis} alt="genesis" /></SwiperSlide>
            <SwiperSlide><img src={mercedes} alt="mercedes" /></SwiperSlide>
            <SwiperSlide><img src={honda} alt="honda" /></SwiperSlide>
          
        </Swiper>
        
      
      </div>
    </div>
  )
}

export default Home