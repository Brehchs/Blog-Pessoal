import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Typography, Grid} from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
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
                className="textos"
              >
                Siga-me os bons!!{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.instagram.com/brehchs/"
                target="_blank"
              >
                <InstagramIcon className="redes" />
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-chagas-667aa3233/"
                target="_blank"
              >
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
            <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                Brenda Chagas
              </Typography>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
