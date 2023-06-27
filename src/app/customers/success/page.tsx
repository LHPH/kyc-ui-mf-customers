"use client"

import React from 'react'

import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Success = () => {
  return (
    <>
        <Container>
            <Box sx={{ width: '35%', textAlign: 'center' }}>
                <CheckCircleIcon color='success' style={{fontSize: 'xxx-large'}}/>
                <Typography variant='h2' children={'Success'}/>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={5}>
                        {'No. Customer'}
                    </Grid>
                    <Grid item xs={7}>
                        {'Customer Name'}
                    </Grid>
                    <Grid item xs={5}>
                        {12314131}
                    </Grid>
                    <Grid item xs={7}>
                        {'TEST TEST TEST TEST'}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>
  )
}

export default Success;

