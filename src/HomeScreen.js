import React, {useEffect} from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import { useRef } from 'react';
import {motion as m, useAnimation , useScroll, useInView} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Animation from './Animation'
import Footer from './Footer';



function HomeScreen() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const history = useNavigate();
  const {scrollYProgress} = useScroll();
  return (
    <div className='homeScreen-major'>

      <div className='homeScreen'>
        <Nav/>
        
        <m.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      
      
        <div className='homeScreen__background'>
        
        <div className='homeScreen__gradient'/>
        </div>
        <div className='homeScreen__body'>
        
        
          <m.h1
          initial={{y:20, opacity:0}}
          whileInView={{ y:0, opacity:1}}
          transition={{duration:0.5}}
          >Melbourne Diwali</m.h1>
          
          <m.h3
          initial={{y:20, opacity:0}}
          whileInView={{ y:0, opacity:1}}
          transition={{duration:0.7}}>Diwali is so widely celebrated—it’s an important religious festival for Hindus, but is also observed among Jains, Sikhs, and Buddhists.
              In North India, Diwali commemorates Prince Rama's triumphant return to the city of Ayodhya after 14 years of exile due to the plotting of his evil stepmother-and after a heroic rescue of his wife Sita, an incarnation of the goddess Lakshmi, who had been kidnapped by the rival king Ravana.
              </m.
              h3>

              <m.div  
          initial={{y:40, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5}}
          className='second_part'>
            <div className='second_page'>
              <m.button 
              
              onClick={()=> history('/event')}className='event_button'>Event Details</m.button>
                <div className='partTwo'>
                <button onClick={()=> history('/part')} className='particapation_button'>Participation</button>
                <button onClick={()=> history('/sponsor')} className='sponsor_button'>Sponsors and Partners</button>
                </div>
            </div>
          </m.div>
          <h1>Participation</h1>
          <m.div  
          initial={{y:40, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5}}
          className='second_part'>
            
            <div className='second_page'>
            
              <m.button 
              
              onClick={()=> history('/event')}className='event_button'>Click for Stall</m.button>
                <div className='partTwo'>
                <button onClick={()=> history('/part')} className='particapation_button'>Performers</button>
                <button onClick={()=> history('/sponsor')} className='sponsor_button'>Community Group</button>
                </div>
            </div>
          </m.div>
          <Footer/>
          
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;
