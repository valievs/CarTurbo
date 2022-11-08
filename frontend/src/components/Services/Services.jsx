import React from 'react'
import './Services.css'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConstructionIcon from '@mui/icons-material/Construction';
function Services() {
  return (
    <div className='service'>

      <div className="service-container">
        <div className="box">
      <div className="icon-box">
      <DirectionsCarIcon   className="serviceIcon"/>
      </div>

      <div className="service-content">
        <p>
          Keyfiyyətə zəmanət! <br/>
          Konteyner daşınması ilə göndərilən istənilən avtomobil mütləq qaydada sığortalanır. Müştərinin istəyi ilə onun maşını əlavə sığorta oluna bilər.
          </p>
      </div>
        </div>
        <div className="box">
      <div className="icon-box">
      <ConstructionIcon  className="serviceIcon" />
      </div>

      <div className="service-content">
        <p>
        Biz Cenubi Koreyanın əsas hərracları ilə əməkdaşlıq edirik ki, bu da bizə öz müştərilərimizlə birbaşa, vasitəçisiz işləməyə imkan verir və bu da öz növbəsində əməkdaşlığın sürətli, şəffaf, etibarlı olmasını təmin edir və müştərilərimizə qənaət etməyə imkan verir.
        </p>
      </div>
        </div>

        <div className="box">
     
     <div className="icon-box">
     <SupportAgentIcon  className="serviceIcon" />
     </div>

      <div className="service-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque pariatur placeat quibusdam molestiae.</p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Services