import { Badge, Box, Container, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
export default function Footer() {

    const email = 'matias.dev7@gmail.com';
    const subject = 'Presupuesto';

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    return(
        <Container maxWidth>
            <Box sx={{p:2,mt:10, borderTop:1, textAlign:'center', display:'flex', justifyContent:"center"}}>
                <Typography variant="body2" fontSize='10px'>Matias Bustamante <CopyrightIcon sx={{fontSize:10}}/></Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', gap:2}}>
                <Link target="_blank" to='https://www.linkedin.com/in/matias-bustamante-90ba9b274/s'>
                    <LinkedInIcon color="action"/>
                </Link>
                <Link target="_blank" to='https://github.com/matibustamante7'>
                    <GitHubIcon color="action"/>
                </Link>
                <Link target="_blank" to={mailToLink}>
                    <EmailIcon color="action"/>
                </Link>
            </Box>
        </Container>
    )
}