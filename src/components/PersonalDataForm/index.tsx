"use client"

import React from 'react'

import {TextField, Stack, Box, Typography, Button} from '@mui/material';

import { IPersonalDataForm } from '@/interfaces/personalDataForm.interface';

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
            <TextField id="customer-age" label="Age" variant="outlined"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
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