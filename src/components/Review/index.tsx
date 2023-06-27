"use client"

import React from 'react'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IReview from '@/interfaces/Review.interface';

const Review = (props: IReview) => {


  return (
    <>
        <Typography variant="h6" gutterBottom children="Personal Data" />

        <Grid container spacing={2}>
            <Grid item>
                <Typography gutterBottom children="First name:" style={{fontWeight: 'bold'}} />
            </Grid>
            <Grid item>
                <Typography gutterBottom children="TEST" />
            </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom children="Address Data" />

    </>
  )
}

export default Review;