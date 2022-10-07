import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@mui/material";

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
          <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
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
                style={{ color: "white" }}
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
                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/brehchs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-chagas-667aa3233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                © 2020 Copyright:
              </Typography>
            </Box>
            <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
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
