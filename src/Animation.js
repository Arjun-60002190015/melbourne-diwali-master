import React from 'react'
import{motion as m} from 'framer-motion';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import left from './Assets/left.jpg';
import right from './Assets/right.jpg';
import Footer from './Footer';


function Animation() {
  const history = useNavigate();
  return (

    <div className='homeScreen'>
        <Nav/>
        
        <div className='homeScreen__background'>
        
        <div className='homeScreen__gradient'>
        <m.div className='container'>

<m.img 
initial={{x:0, scale:1.5}}
animate={{ x:-450}}
transition={{delay:2, duration:2}}
src={left}/>

<m.img 
initial={{x:0, scale:1.5}}
animate={{ x:450, opacity:0}}
transition={{delay:2, duration:2}}
src={right}/>
</m.div>
        </div>
        
        

       
        </div>
        <m.div 
        initial={{filter:'blur(5px)', opacity:0}}
        animate={{filter:'blur(0px)', opacity:1}}
        transition={{delay:3, duration:1}}
        className='homeScreen__body'>
        
        
          <h1>Melbourne Diwali</h1>
          
          <m.h3
          initial={{filter:'blur(5px)', opacity:0}}
          animate={{filter:'blur(0px)', opacity:1}}
          transition={{delay:4, duration:1}}
          >
            
            Diwali is so widely celebrated—it’s an important religious festival for Hindus, but is also observed among Jains, Sikhs, and Buddhists.
              In North India, Diwali commemorates Prince Rama's triumphant return to the city of Ayodhya after 14 years of exile due to the plotting of his evil stepmother-and after a heroic rescue of his wife Sita, an incarnation of the goddess Lakshmi, who had been kidnapped by the rival king Ravana.
              In South India, meanwhile, Diwali honors the victory of Lord Krishna over the demon king Narakasura, who had imprisoned 16,000 women in his palace and meted out harsh punishments to any of his subjects who dared stand up against him.
              And in western India, the festival celebrates Vishnu's banishment of King Bali-whose immense power had become a threat to the gods--to the underworld.</m.h3>

          <div  className='second_part'>
            <div className='second_page'>
              <button onClick={()=> history('/event')}className='event_button'>Event Details</button>
                <div className='partTwo'>
                <button onClick={()=> history('/part')} className='particapation_button'>Participation</button>
                <button onClick={()=> history('/sponsor')} className='sponsor_button'>Sponsors and Partners</button>
                </div>
            </div>
          </div>
          <Footer/>
          
        </m.div>
      </div>


    
  )
}

export default Animation
//door
//https://i.pinimg.com/originals/07/3c/a9/073ca99c374b9710fa7833310de74e24.jpg

/*
    <m.div className='animation'>


      
        

    <div className='container_body'>
      <h1> hello</h1>
    </div>
    
    </m.div>
    */
