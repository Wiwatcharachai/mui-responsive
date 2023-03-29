import { Tooltip } from '@mui/material'
import React from 'react'
import {Add as AddIcon} from '@mui/icons-material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



function Add() {
    // const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip
        // onClick={(e) => setOpen(true)}
        // title="Delete"
        // sx={{
        //   position: "fixed",
        //   bottom: 20,
        //   left: { xs: "calc(50% - 25px)", md: 30 },
        // }}
      >
       <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Tooltip>
  </>
  )
}

export default Add