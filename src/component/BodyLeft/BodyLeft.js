import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { green, pink } from '@mui/material/colors';

import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const BodyLeft = () => {
  return (
    <div>
     <Stack spacing={20} direction="row" sx={{backgroundColor:"white",width:"350px" ,height:"60px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
        <CheckCircleOutlineIcon sx={{marginRight:"8px",marginLeft:"10px"}}></CheckCircleOutlineIcon>
        <Typography sx={{marginRight:"6px"}}>Inbox</Typography>
<StarOutlineIcon ></StarOutlineIcon>
      </Badge>
      <Badge >
        <Typography sx={{Color:"#0178D4", opacity:"90%"}}>Filter</Typography>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>


      </Badge>
    </Stack>
    {/* ---------- */}
    <Stack spacing={20} direction="row" sx={{backgroundColor:" #C7E0F4",width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
      <Avatar sx={{ bgcolor: deepOrange[500], marginLeft:"10px",marginRight:"8px" }}>N</Avatar>
        <Typography sx={{marginRight:"6px", overflow:"hidden", flexWrap:"wrap"}}>Sed ut perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusalo…</Typography>
      </Badge>
      
    </Stack>
    {/* ---------------- */}
    <Stack spacing={20} direction="row" sx={{width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
      <Avatar sx={{ bgcolor: pink[500], marginLeft:"10px",marginRight:"8px" }}>M</Avatar>
        <Typography sx={{marginRight:"6px", overflow:"hidden", flexWrap:"wrap"}}>Sed ut perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusalo…</Typography>
      </Badge>
      
    </Stack>
    {/* 
    ------------- */}
    <Stack spacing={20} direction="row" sx={{width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
      <Avatar sx={{ bgcolor:green[500], marginLeft:"10px",marginRight:"8px" }}>S</Avatar>
        <Typography sx={{marginRight:"6px", overflow:"hidden", flexWrap:"wrap"}}>Sed ut perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusalo…</Typography>
      </Badge>
      
    </Stack>
    {/* ------------------- */}
    
    <Stack spacing={20} direction="row" sx={{width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
      <Avatar sx={{ bgcolor:[500], marginLeft:"10px",marginRight:"8px" }}>L</Avatar>
        <Typography sx={{marginRight:"6px", overflow:"hidden", flexWrap:"wrap"}}>Sed ut perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusalo…</Typography>
      </Badge>
      
    </Stack>
    {/* ------ */}
    <Stack spacing={20} direction="row" sx={{width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  >
      <Avatar sx={{ bgcolor:pink[500], marginLeft:"10px",marginRight:"8px" }}>A</Avatar>
        <Typography sx={{marginRight:"6px", overflow:"hidden", flexWrap:"wrap"}}>Sed ut perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusalo…</Typography>
      </Badge>
      
    </Stack>
    </div>
  )
}

export default BodyLeft
