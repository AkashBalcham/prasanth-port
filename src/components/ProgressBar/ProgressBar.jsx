import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = (props) => {

    

    return (
        <div className="lg:ml-8 lgMid:ml-6 w-[96%] h-[50%] flex flex-col justify-center">
            {/* <progress id="file" value={prog} max="100"> 32% </progress> */}
            <LinearProgress 
                variant="determinate" 
                value={props.fill}
                sx={{
                    // width: "100%",
                    height: "40%", // Thickness
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Background color
                    // border: "2px solid black",
                    borderRadius: 4,
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "black", // Fill color
                    },
                }}
            />
        </div>
        
    ) 
}

export default ProgressBar;