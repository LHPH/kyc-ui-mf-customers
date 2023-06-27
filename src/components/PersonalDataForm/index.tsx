"use client"

import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IPersonalDataForm } from '@/interfaces/PersonalData.interface';

const PersonalDataForm = (props: IPersonalDataForm) => {

  const handleNext = () => {

    props.handleNext();
  }

  return (
    <>
        <Stack spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom children="Personal Data" />
            <TextField id="customer-first-name" label="First Name" variant="outlined" />
            <TextField id="customer-second-name" label="Second Name" variant="outlined" />
            <TextField id="customer-last-name" label="Last Name" variant="outlined" />
            <TextField id="customer-last-second-name" label="Last Second Name" variant="outlined" />
            <TextField id="customer-mobile-phone" label="Mobile Phone" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            <TextField id="customer-email" label="Email" variant="outlined" />
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button sx={{mt: 3, ml: 1}} variant="contained" children="Next" onClick={handleNext} />
        </Box>
    </>
  )
}

export default PersonalDataForm