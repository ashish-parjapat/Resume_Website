import { Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import React from 'react';
import { IconButton } from '@mui/material';
import { Bloodtype, Bolt } from '@mui/icons-material';
import resumePDF from './assets/images/Ashish_Kumar_Resume_MERN.pdf'
function Intro() {
    return (
        <div style={{marginLeft:'350px',marginRight:'250px'}}>
        <div style={{ marginTop: '100px', alignContent: 'flex-start', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
           
            <div>

                <Typography variant='h5' style={{marginBottom:'15px'}}>Hello! I am a<strong> Web Developer</strong> Web Developer who enjoys crafting experiences that</Typography>
                <Typography variant='h5' >empower users.</Typography>
            </div>
            <div style={{marginTop:'15px',marginBottom:'15px'}}>
                <Typography variant='h6'>Bachelors Degree in <strong>Computer Science</strong>  at UIET, Rohtak</Typography>
            </div>
            <div>

          
          
            <IconButton onClick={() => {window.location.href = 'mailto:591ashish.2020@gmail.com';}}>
  <EmailOutlinedIcon sx={{ fontSize: 30 }} />
</IconButton>

     <IconButton onClick={()=>{window.open('https://www.linkedin.com/in/ashish-kumar-6a2a0419b/')}}>

     <LinkedInIcon sx={{ fontSize: 30 }} />
     </IconButton>

     <IconButton onClick={()=>{window.open(resumePDF)}}>
          
            <TextSnippetOutlinedIcon sx={{ fontSize: 30 }} />

            </IconButton>
           
            </div>
           
        </div>
        </div>
    )
}

export default Intro;
