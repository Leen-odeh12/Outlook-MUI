import { Card, Typography } from '@mui/material'
import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DownloadIcon from '@mui/icons-material/Download';const BodyRight = () => {
  return (
    
       <Card sx={{backgroundColor:"white" ,marginLeft:"590px",height:"457px",width:"690px", marginTop:"-459px"}}> 
         <Typography  sx={{backgroundColor:"#F3F2F1",paddingTop:"10px"}} > Lorem Ipsum</Typography>
         <Stack spacing="160px" direction="row" sx={{width:"350px" ,height:"80px",marginLeft:"240px" ,paddingTop:"11px"}}>
      <Badge  sx={{marginLeft:"-230px"}} >
      <Avatar sx={{ bgcolor:pink[500], marginLeft:"10px",marginRight:"8px" }}>L</Avatar>
        <Typography sx={{marginLeft:"3px", overflow:"hidden", flexWrap:"wrap"}}>Lorem Ipsum no_replyloremipsum.com<br></br> Thu 6/18/2020 4:49 PM<br></br> to:you <br></br></Typography>
      </Badge>
         <Badge >
 <ReplayIcon sx={{marginRight:"10px"}} > </ReplayIcon>
<DownloadIcon  sx={{marginRight:"10px"}} ></DownloadIcon>
     <ArrowForwardIcon  sx={{marginRight:"10px"}} ></ArrowForwardIcon>
 <MoreHorizIcon  sx={{marginRight:"10px"}} ></MoreHorizIcon>
</Badge>
    </Stack>
 

     <img src=" https://pbs.twimg.com/profile_images/1243218261954748416/iTDq_ikn_400x400.jpg" width="400px" height="200px"></img>

<Typography> Jeremy,</Typography>
     <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</Typography>

       </Card>
   
  )
}

export default BodyRight
