
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa6";
import CustomAccordion from '@root/components/CustomAccordion';
import { Box } from "@mui/material";
import { useState } from "react";

const SkipLocation = [
    { 
        id: 1, 
        name: 'Private Property', 
        description: 'The skip will be placed on your own land, such as a driveway or garden. No permit required.', 
        icon: <BsHouseDoorFill color="black" /> 
    },
    { 
        id: 2, 
        name: 'Public Road', 
        description: 'The skip will be placed on a public road or pavement. A permit from the local council is required.', 
        icon: <FaRoad color="black" /> 
    },
];

const PermitCheckForm = () => {
    const [expanded, setExpanded] = useState('waste');
  return (
    <Box>
        <CustomAccordion
            title="Skip Location"
            description={
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <BsHouseDoorFill color="black" style={{ marginRight: 8, fontSize: 22 }} />
                <span>
                Select where you want the skip to be placed. <b>Choose one option.</b>
                </span>
            </Box>
            }
            items={SkipLocation}
            expanded={expanded === 'location'}
            onChange={() => setExpanded(expanded === 'location' ? false : 'location')}
        />
    </Box>
  )
}

export default PermitCheckForm