import React from 'react'
import "./iframe.css";
import Iframe from 'react-iframe';

const Iframevideo = () => {
  return (
    <div className='video_container'>
           <div className='header'>
               INTRODUCTION
           </div>
           <div className='ifrarme__video'>
           <Iframe url="https://www.sdrive.app/embed/1ptBQD"
              width="1400px"
              height="500px"
              id=""
              className=""
              display="block"
              position="relative"/>
           </div>
      <div className='count__container'>
          <div className='count__header'>
               <h1>35.500+</h1>
            <div className='content'>
                <h1>USERS</h1>
                <p>OVER THE WORLD</p>
            </div>
          </div>
          <div  className='count__header'>
              <h1>35.500+</h1>
            <div className='content'>
                <h1>CLICKS</h1>
                <p>RECORDED</p>
            </div>
          </div>
          <div  className='count__header'>
          <h1>35.500+</h1>
            <div className='content'>
                <h1>AFFILIATES</h1>
                <p>ON BOARD</p>
            </div>
          </div>
      </div>
      <div>
        header
      </div>
    </div>
    
  )
}

export default Iframevideo