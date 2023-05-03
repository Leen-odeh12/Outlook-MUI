import React from 'react'
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SnoozeIcon from '@mui/icons-material/Snooze';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import ClassIcon from '@mui/icons-material/Class';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Main = () => {
  return (


<Stack spacing={5} direction="row" sx={{ marginLeft:"240px",color: 'action.active',width:"1040px",backgroundColor:"#F3F2F1",height:"50px",paddingTop:"7px",marginTop:'-45px',paddingLeft:"20px"}}>
      <Badge  >
        <DeleteOutlineIcon sx={{Color:"#C7E0F4"}}>

        </DeleteOutlineIcon>
<Typography sx={{Color:"#C7E0F4"}}> Delete</Typography>

      </Badge>
      <Badge color="secondary" >
<TurnedInIcon sx={{Color:"#C7E0F4"}}> </TurnedInIcon>
<Typography sx={{Color:"#C7E0F4"}}>Archive </Typography>
      </Badge>
      <Badge color="secondary" >
        
      <DoDisturbIcon sx={{Color:"#C7E0F4"}}></DoDisturbIcon>
<Typography sx={{Color:"#C7E0F4"}}> Junk</Typography>
      </Badge>
      <Badge color="secondary" >
        <CleaningServicesIcon sx={{Color:"#C7E0F4"}}></CleaningServicesIcon>
<Typography sx={{Color:"#C7E0F4"}}> Sweep</Typography>
      </Badge>
      <Badge color="secondary">
        <CancelScheduleSendIcon sx={{Color:"#C7E0F4"}}></CancelScheduleSendIcon>
        <Typography sx={{Color:"#C7E0F4"}}>Move to</Typography>
        

      </Badge>
      <Badge color="secondary" >
        <ClassIcon sx={{Color:"#C7E0F4"}}></ClassIcon>
      
<Typography sx={{Color:"#C7E0F4"}}> Categorize</Typography>
      </Badge>
      <Badge color="secondary" >
   <SnoozeIcon sx={{Color:"#C7E0F4"}}></SnoozeIcon>
<Typography sx={{Color:"#C7E0F4"}}> Snooze</Typography>
      </Badge>

      <Badge color="secondary" >
   <ReplayIcon sx={{Color:"#C7E0F4"}}></ReplayIcon>
   <Typography sx={{Color:"#C7E0F4"}}> Undo</Typography>
         </Badge>
      <MoreHorizIcon sx={{Color:"#C7E0F4"}}></MoreHorizIcon>
    </Stack>


    //  </Card>
     

    
        
      
        
        

    
  )
}

export default Main
