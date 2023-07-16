"use client"

import React from 'react'

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import IReview from '@/interfaces/Review.interface';

const Review = (props: IReview) => {

  const handleConfirm = () =>{

    props.handleNext();
  }

  const handleBack = () => {
    
    props.handleBack();
  }


  return (
    <>
        <Typography variant="h6" children="Personal Data" />

        <Grid container spacing={1} pl={2} mb={1}>
            <Grid item xs={4}>
                <Typography variant="subtitle2" children="First Name:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subtitle2" children="Second Name:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subtitle2" children="Last Name:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Last Second Name:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="RFC:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Mobile Phone:" />
            </Grid>
            <Grid item xs={8}>
                <Typography  children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Email:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>

        </Grid>
        <Divider variant="middle" />
        <Typography variant="h6" children="Address Data" mt={2}/>

        <Grid container spacing={1} pl={2}>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Street:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Street Num:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Neighborhood:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="City:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="State:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
            <Grid item xs={4}>
                <Typography  variant="subtitle2" children="Postal Code:" />
            </Grid>
            <Grid item xs={8}>
                <Typography children="TEST" />
            </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button sx={{mt: 3, ml: 1}} children="Back" onClick={handleBack} />
            <Button sx={{mt: 3, ml: 1}} variant="contained" children="Confirm" onClick={handleConfirm} />
        </Box>
    </>
  )
}

export default Review;