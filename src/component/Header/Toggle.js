import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import classes from "./Toggle.module.css";
import { Fragment } from 'react';


const Toggle = (props) => {
    return (
      <Fragment>
        
        <ToggleButtonGroup
        // value={alignment}
        exclusive
        // onChange={handleAlignment}
        aria-label="text alignment"
        className={classes.togglegroup}
      >
        <ToggleButton value="center" aria-label="left aligned">
          {/* <Aboutme /> */}
        </ToggleButton>
      </ToggleButtonGroup> 
      
      </Fragment>
    );   
};

export default Toggle;