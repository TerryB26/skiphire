import { Box } from "@mui/material";
import CustomAccordion from '@root/components/CustomAccordion';
import { useState } from 'react';
import { CiCircleAlert } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa6";
import { GiConcreteBag, GiPathTile, GiTreeBranch } from "react-icons/gi";
import { IoMdTrash } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import { PiBiohazardFill } from "react-icons/pi";
import { SiWeightsandbiases } from "react-icons/si";

const WasteType = [
    { id: 1, name: 'General Waste', description: 'Everyday household and office rubbish.', icon: <IoMdTrash color="black" /> },
    { id: 2, name: 'Construction Waste', description: 'Bricks, rubble, and building materials.', icon: <LuConstruction color="#FAAC01" /> },
    { id: 3, name: 'Green Waste', description: 'Garden clippings and branches.', icon: <GiTreeBranch color="green" /> },
    { id: 4, name: 'Hazardous Waste', description: 'Chemicals, paint, or asbestos.', icon: <PiBiohazardFill color="red" /> },
];

const HeavyWasteType = [
    { id: 1, name: 'Soil', description: 'Excavated earth and dirt.', icon: <SiWeightsandbiases color="#7A716F" /> },
    { id: 2, name: 'Concrete', description: 'Broken concrete pieces.', icon: <GiConcreteBag color="brown" /> },
    { id: 3, name: 'Sand', description: 'Loose sand material.', icon: <SiWeightsandbiases color="#7A716F" /> },
    { id: 4, name: 'Tiles', description: 'Ceramic or stone tiles.', icon: <GiPathTile color="#956660" /> },
    { id: 5, name: 'Bricks', description: 'Clay or concrete bricks.', icon: <LuConstruction color="#FAAC01" /> },
    { id: 6, name: 'Rubble', description: 'Mixed demolition waste.', icon: <IoMdTrash color="black" /> },
    { id: 7, name: 'Asphalt', description: 'Road and paving material.', icon: <FaTruckMoving color="black" /> }
];

const WasteTypeForm = () => {
    const [expanded, setExpanded] = useState('waste');
  return (
    <Box>
      <CustomAccordion
        title="Waste Types"
        description={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CiCircleAlert color="red" style={{ marginRight: 8, fontSize: 22 }} />
            <span>
              Select the type of waste you want to dispose of. <b>Select all that apply.</b>
            </span>
          </Box>
        }
        items={WasteType}
        expanded={expanded === 'waste'}
        onChange={() => setExpanded(expanded === 'waste' ? false : 'waste')}
      />
      <Box mt={4}>
        <CustomAccordion
          title="Heavy Waste Types"
          description={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CiCircleAlert color="red" style={{ marginRight: 8, fontSize: 22 }} />
              <span>
                Select the type of heavy waste you want to dispose of. <b>Select all that apply.</b>
              </span>
            </Box>
          }
          items={HeavyWasteType}
          expanded={expanded === 'heavy'}
          onChange={() => setExpanded(expanded === 'heavy' ? false : 'heavy')}
        />
      </Box>
    </Box>
  )
}

export default WasteTypeForm