import React from 'react'
import { Button, Typography } from '@mui/material'

import resumePDF from './assets/images/Ashish_Kumar_Resume_MERN.pdf'

function Appbar(){
 
    return(
    <div  style={{display:'flex',
    justifyContent:'space-between',
    marginTop:'30px',


}}>
        <div style={{marginLeft:'100px'}}>
       <Typography variant='h5'>Ashish Kumar</Typography>
        </div>

        <div style={{display:'flex',marginRight:'100px'}}>
            <div>
            <Button href="#text-buttons">Work</Button>
            </div>
       <div>
       <Button onClick={()=>window.location="/about"}>About</Button>
       </div>
        <div>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
  <Button>Resume</Button>
</a>
        </div>
        
        </div>

    </div>
    )
}
export default Appbar