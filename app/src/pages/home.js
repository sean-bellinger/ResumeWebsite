import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  function Card(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  var greeting = function(){
    let currentHour = new Date().getHours()
    if(currentHour > 4 && currentHour < 12){
      return 'Good Morning'
    }
    if(currentHour < 18){
      return 'Good Afternoon'
    }
    if(currentHour < 21){
      return 'Good Evening'
    }
      return 'Good Night'
  }

export default function Home() {
    return <div>
        <Container>
            <Card>
              <Typography sx={{ textAlign: 'center' }} variant='h4'>
                {greeting()} World, I'm Sean Bellinger!
              </Typography>
              <Typography sx={{ textAlign: 'center' }} variant='body1'>
                I'm an aspiring full stack developer located in the greater Portland OR area. I graduated from Hack Reactor, now known as Galvanize, in 2018,
                and I am relaunching my efforts to enter into a full stack developer career.<br/><br/>

                Job opportunies that would be intriguing to me are ones where I can further my learning in Javascript and/or Typescript and have the opportunity
                to explore CI/CD and Cloud infrastructure.<br/><br/>

                Many of my friends and employers would say I'm a very likable guy. I have overall strong communication skills, view teamwork as enjoyable,
                and find sovling puzzles to be something I seek in my free time.<br/><br/>

                This website was built with React, Docker, Terraform, and deployed on Digital Ocean. I invite you all to check out my source code
                <a href="https://github.com/sean-bellinger/ResumeWebsite" target="_blank">here</a>. <br/><br/>
              </Typography>
            </Card>
            <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Card sx={{ display: 'flex', border: 1, borderRadius: '12px', flexWrap: 'wrap'}} >
                    <Item sx={{ border: 0 }} >Comfortable with:</Item>
                    <Item > JavaScript</Item>
                    <Item >React</Item>
                    <Item >HTML5</Item>
                    <Item >CSS</Item>
                    <Item >Node.js</Item>
                    <Item >Git</Item>
                    <Item >Linux</Item>
                </Card>
                <Card sx={{ display: 'flex', border: 1, borderRadius: '12px', flexWrap: 'wrap'}}>
                    <Item sx={{ border: 0 }} >Actively Learning:</Item>
                    <Item>Jira</Item>
                    <Item>Docker </Item>
                    <Item>Terraform </Item>
                    <Item>Typescript </Item>
                </Card>
                <Card sx={{ display: 'flex', border: 1, borderRadius: '12px', flexWrap: 'wrap'}}>
                    <Item sx={{ border: 0 }} >Interested in:</Item>
                    <Item>Kubernetes</Item>
                    <Item>AWS Cloud Computing </Item> 

                </Card>
            </Box>
            <Typography variant="h6">
                  Email: sean.eric.bellinger@gmail.com <br/>
            </Typography>
              <Typography variant="h3">
                <a class="social-container" href="https://www.linkedin.com/in/sean-bellinger/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a class="social-container" href="https://github.com/sean-bellinger?tab=repositories" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
              </Typography>
        </Container>
    </div>
}