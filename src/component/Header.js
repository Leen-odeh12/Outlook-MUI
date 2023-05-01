import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Typography } from '@mui/material';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import DoDisturbAltTwoToneIcon from '@mui/icons-material/DoDisturbAltTwoTone';
import CleaningServicesTwoToneIcon from '@mui/icons-material/CleaningServicesTwoTone';
import DriveFileMoveTwoToneIcon from '@mui/icons-material/DriveFileMoveTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import SnoozeTwoToneIcon from '@mui/icons-material/SnoozeTwoTone';
import UndoTwoToneIcon from '@mui/icons-material/UndoTwoTone';
import { Stack } from '@mui/system';
const Header = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 35,
                backgroundColor: '#F3F2F1',
                display: "flex",
                justifyContent: "space-around",
                paddingTop:"10px",
                '&:hover': {

                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >

            <Button variant="contained" size="small" backgroundColor="#0178D4" sx={{ height: "28px", marginLeft: "25px" }}> New Message </Button>
            <Stack direction="row" spacing={.5}>
                <DeleteTwoToneIcon sx={{ color: "#005A9E" }}></DeleteTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}> Delete</Typography>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <Inventory2TwoToneIcon sx={{ color: "#005A9E" }}></Inventory2TwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Archive</Typography>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <DoDisturbAltTwoToneIcon sx={{ color: "#005A9E" }}></DoDisturbAltTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Junk</Typography>
                <KeyboardArrowDownTwoToneIcon sx={{ color: "#005A9E" }}></KeyboardArrowDownTwoToneIcon>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <CleaningServicesTwoToneIcon sx={{ color: "#005A9E" }}></CleaningServicesTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Sweep </Typography>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <DriveFileMoveTwoToneIcon sx={{ color: "#005A9E" }}> </DriveFileMoveTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}> Move to</Typography>
                <KeyboardArrowDownTwoToneIcon sx={{ color: "#005A9E" }}></KeyboardArrowDownTwoToneIcon>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <CategoryTwoToneIcon sx={{ color: "#005A9E" }}></CategoryTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Categorize </Typography>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <SnoozeTwoToneIcon sx={{ color: "#005A9E" }}></SnoozeTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Snooze </Typography>
            </Stack>
            <Stack direction="row" spacing={.5}>
                <UndoTwoToneIcon sx={{ color: "#005A9E" }}></UndoTwoToneIcon>
                <Typography sx={{ color: "#005A9E" }}>Undo</Typography>
            </Stack>
            <MoreHorizIcon sx={{ color: "#005A9E" }}></MoreHorizIcon>
        </Box>
    );
}

export default Header
