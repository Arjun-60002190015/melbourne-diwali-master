import React from 'react'
import './Footer.css'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {motion as m} from 'framer-motion'; 

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  return (
    <m.div 
    initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5}}
    className='footer'>
        <div className='footer__content'>
          <img src='https://melbournediwali.com.au/wp-content/uploads/2023/09/torres_download-removebg-preview.png'>
            </img>
            <div className='email__input'>
            <form>
              <input className='em' type='email'
              placeholder='Connect with us'
              />
              <button 
              className='getStarted'> Update</button>
            </form>
            </div>
      <h1>Acknowledgement of Country</h1>
      <p>We acknowledge the Traditional Owners of 
        the land where we work and live. We pay our 
        respects to their Elders, past, present, and 
        emerging. We celebrate the stories, culture, 
        and traditions of Aboriginal and Torres 
        Strait Islander Elders of all communities 
        who also work and live on this land.</p>
    </div>
    </m.div>
  )
}

export default Footer
