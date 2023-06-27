"use client"

import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import { IAddressDataForm } from '@/interfaces/AddressData.interface';

const AddressDataForm = (props: IAddressDataForm) => {

  const handleBack = () => {

    props.handleBack();
  }

  const handleNext = () =>{

    props.handleNext();
  }
  
  return (
    <>
        <Stack spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom children="Address Data" />
            <TextField id="customer-address-street" label="Street" variant="outlined" />
            <TextField id="customer-address-street-number" label="Street Number" variant="outlined" />
            <TextField id="customer-address-neighborhood" label="Neighborhood" variant="outlined" />
            <TextField id="customer-address-city" label="City" variant="outlined" />
            <TextField id="customer-address-state" label="State" variant="outlined" />
            <TextField id="customer-address-postal-code" label="Postal Code" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]{5}' }}/>
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button sx={{mt: 3, ml: 1}} children="Back" onClick={handleBack} />
            <Button sx={{mt: 3, ml: 1}} variant="contained" children="Next" onClick={handleNext} />
        </Box>
    </>
  )
}

export default AddressDataForm;