import React from "react";
import {Grid, Paper, Button} from "@material-ui/core";
import { Box } from '@mui/material';
import "./Home.css";

function Home() {
    return(
        <> 
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://i.pinimg.com/originals/b3/2c/2d/b32c2d5cf17655fdbc61f66416ff19f0.jpg" alt="desenho de mulher negra com tranças" style={{width: "100%", height: "100%"}} />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained"color="primary">Texto 1</Button>
                        <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;
