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

export default function Home() {
    return <div>
        <Container maxWidth="sm">
            <Box sx={{ spacing: "mr" }}>
                <Typography variant="h6">
                    Email: sean.eric.bellinger@gmail.com <br/>
                    Location: Greater Portland, Oregon area.
                </Typography>
            </Box>
            <Box>    
                    Software Engineer with a focus on Full Stack JavaScript development, primarily with React and Node.js.
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Card sx={{ display: 'flex', border: 1, borderRadius: '12px', flexWrap: 'wrap'}} >
                    <Item sx={{ border: 0 }} >Strong:</Item>
                    <Item > JavaScript (All ECMAScripts)</Item>
                    <Item >React</Item>
                    <Item >Webpack</Item>
                    <Item >HTML5</Item>
                    <Item >CSS</Item>
                    <Item >Node.js</Item>
                    <Item >SQL</Item>
                    <Item >Git</Item>
                    <Item >Linux</Item>
                </Card>
                <Card sx={{ display: 'flex', border: 1, borderRadius: '12px', flexWrap: 'wrap'}}>
                    <Item sx={{ border: 0 }} >Actively Learning:</Item>
                    <Item>Kubernetes</Item>
                    <Item>Jira</Item>
                    <Item>Docker </Item>
                    <Item>Terraform </Item>
                    <Item>AWS Cloud Computing </Item> 
                    <Item>Typescript </Item>
                </Card>
            </Box>    
            <a class="social-container" href="https://www.linkedin.com/in/sean-bellinger/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a class="social-container" href="https://github.com/sean-bellinger?tab=repositories" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </Container>
    </div>
}