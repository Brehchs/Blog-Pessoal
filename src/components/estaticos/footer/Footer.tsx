import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if(token != "") {
    footerComponent = <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    
    
  >
    <Grid alignItems="center" item xs={12}>
      <Box style={{ backgroundColor: "#1BFEA4", height: "120px" }}>
        <Box 
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography 
            variant="h5"
            align="center"
            gutterBottom
            fontFamily="Inconsolata"
            
            
          
          >
            Siga-me os bons!{" "}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a
            href="https://github.com/Brehchs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 60, color: "#D25B06" }}/>
          </a>
          <a
            href="https://www.instagram.com/brehchs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: 60, color: "#D25B06" }}  />
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-chagas-667aa3233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 60, color: "#D25B06" }} />
          </a>
        </Box>
      </Box>
      <Box  style={{ backgroundColor: "#1BFEA4", height: "60px" }}>
        <Box paddingTop={1}>
          <Typography 
            variant="subtitle2"
            align="center"
            gutterBottom
            fontFamily="Inconsolata"
            fontSize="15px"
         
          >
            © 2022 Copyright:
          </Typography>
        </Box>
        <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              align="center"
              fontFamily="Inconsolata"
              fontSize="16px"
              
            >
              Brenda Chagas
            </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
  }

  return (
    <>
     {footerComponent} 
    </>
  );
}

export default Footer;
