import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import "./homepage.css"
import { Button } from '@mui/material';
function Homepage() {
  return (
    <div id='main'>
        <div id='toolbar'>
            <div className='contact' >Contact us:  
                <PhoneIcon style={{ position: 'relative', top: '7px', marginLeft: '1em', marginRight: '5px' }} /> +918574602677  
                <MarkEmailReadIcon style={{ position: 'relative', top: '7px', marginLeft: '1em', marginRight: '5px' }} /> info@shikshahisamadhan.com
            </div>
            <div className='register' ><span>Register</span>&#124;<span>Login</span></div>
        </div>
        <div id='toolbar2'>
                <img src='https://shikshahisamadhan.com/wp-content/uploads/2024/06/3-PNG-LOGO.png' style={{ height: '6em', width: '12em', marginLeft: '1em' }} />
            <div className='navlins' >
            navlinks
            </div>
        </div>
        <div id='toolbar3'>
        &quot; विद्याधनं सर्वधनप्रधानम्। &quot;
        </div>
        <div id='section1'>
            <div className='info' >
                <h3>LOOKING TO EXPLORE YOUR KNOWLEDGE</h3>
                <h1>Education Beyond Boundaries</h1>
                <p>Discover a world of limitless learning opportunities at <strong>Shiksha Hi Samadhan.</strong> 
                We believe in breaking down barriers to education by offering comprehensive, 
                free resources that not only prepare you for exams but also delve into 
                the ‘why’ behind every concept.</p>
                <Button variant="contained" style={{backgroundColor: '#FFB606', color: '#000000'}}>EXPLORE NOW</Button>
            </div>
        </div>
        <div id='section2' >
            
        </div>
    </div>
  )
}

export default Homepage