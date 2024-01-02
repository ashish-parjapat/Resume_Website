import React from 'react';

import { CardMedia, Typography } from '@mui/material';
import jobfinder from "./assets/images/jobfinder.png"
import superapp from "./assets/images/superapp.png"
const images=[

   {img:jobfinder,name:'Job Finder'},
   {img:superapp,name:'superApp'}

]
function Projects () {
    return (
    
           
<div>
{images.map((image)=>{
    return(
        <div>
        <CardMedia >
          
           <center>
        <img src={image.img} alt="image" style={{height:'400px',marginTop:'60px', width:'800px'}} />
        <Typography variant='h4'>{image.name}</Typography>
        </center>
        </CardMedia>
        </div>
)
    })}

  </div>
      
    )
};

export default Projects;
