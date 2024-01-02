// import React from "react";
// import Appbar from "./Appbar";
// import image from "./assets/images/ashish4.jpg"
// import { Typography } from "@mui/material";

// function About(){
//     return(
//         <>
//         <Appbar/>
//         <br />
//         <br />
//         <div style={{display:'flex', alignItems:'center', marginLeft:'200px'}}>
// <div>

// <img src={image} alt="ashish" style={{width:'400px',height:'500px'}}/>

// </div>
// <div style={{alignContent:'center', marginRight:'200px'}}>

// <Typography variant="h5" style={{marginLeft:'50px'}}>"Hello everyone, I'm Ashish Kumar, a passionate web
//  developer currently pursuing my B.Tech in Computer Science from Maharshi Dayanand University.
//  <br />
//   I find immense joy in bringing ideas to life through the art of coding and design.</Typography>
//   <br />    
//   <br />


//   <Typography variant="h5" style={{marginLeft:'50px'}}>Beyond the classroom, my heart lies in web development. 
//   I am a firm believer in the power of the web to connect, inform, and inspire.
//   <br />
//    As a web developer, I've had the privilege of working on a range
//    of projects that showcase my skills in front-end and back-end development.
//   </Typography> 
// <br />
// <br />
//   <Typography variant="h5" style={{marginLeft:'50px'}}>

//   "Outside the digital realm, I find joy in the simple pleasures of life.
//    My morning runs are not just about fitness but a rhythmic meditation. Badminton
//     is my go-to for both competition and connection with others. In the kitchen, I'm a culinary
//      experimenter, creating dishes that blend flavors and cultures.
//   </Typography>
//   <br />
//   <br />


// </div>

//         </div>
//         <div style={{ backgroundColor:'#dadada'}}>
//         <div style={{marginTop:'100px', backgroundColor:'#dadada', marginLeft:'400px'}}>

//             <Typography variant="h3">Education</Typography>
//             <hr  color="black"/>
//         </div>
//         </div>
        
//         </>
//     )
// }
// export default About



//coploit code
import React from "react";
import Appbar from "./Appbar";
import image from "./assets/images/ashish4.jpg";
import { Typography, Grid, Paper, Card, CardContent, CardMedia } from "@mui/material";

function About() {
  return (
    <Paper>
      <Appbar />
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={image}
              alt="ashish"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
            <Typography variant="h5" style={{
  // color: '#3f51b5', // Change the text color
  fontWeight: 'bold', // Make the text bold
  // textShadow: '2px 2px #ff0000', // Add a text shadow
  fontFamily: 'Arial', // Change the font
  textAlign: 'justify', // Align the text
  lineHeight: '1.5', // Change the line height
  letterSpacing: '0.05em', // Change the letter spacing
}}>
  "Hello everyone, I'm Ashish Kumar, a passionate web developer currently pursuing my B.Tech in Computer Science from Maharshi Dayanand University.
  <br />
  I find immense joy in bringing ideas to life through the art of coding and design."
</Typography>
              <br />
              <Typography variant="h5">
                "Beyond the classroom, my heart lies in web development. I am a firm believer in the power of the web to connect, inform, and inspire.
                <br />
                As a web developer, I've had the privilege of working on a range of projects that showcase my skills in front-end and back-end development."
              </Typography>
              <br />
              <Typography variant="h5">
                "Outside the digital realm, I find joy in the simple pleasures of life. My morning runs are not just about fitness but a rhythmic meditation. Badminton is my go-to for both competition and connection with others. In the kitchen, I'm a culinary experimenter, creating dishes that blend flavors and cultures."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '100px', backgroundColor: '#dadada', padding: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h3">Education</Typography>
          <hr color="black" />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;