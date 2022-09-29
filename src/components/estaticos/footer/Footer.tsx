import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Typography, Grid} from "@material-ui/core";
import { Box } from "@mui/material";

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
          <Box style={{ backgroundColor: "#7299BE", height: "120px" }}>
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
                Siga-me os bons!!{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.instagram.com/brehchs/"
                target="_blank"
              >
                <InstagramIcon style={{ fontSize: 60, color: "#75C5DD" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-chagas-667aa3233/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 60, color: "#75C5DD" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#7299BE", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white"}}
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
            <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
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
