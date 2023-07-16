"use client"

import React from 'react'
import { useState } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, Divider, Grid, Stack, TextField } from '@mui/material';
import SearchForm from '@/components/SearchForm';

const SearchPage = () => {

    const steps = ['Search Customer', 'Results'];
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleBack = () => {
        setActiveStep(activeStep+1);
    }

    const handleNext = () => {
        setActiveStep(activeStep+1);
    }
    const getComponent = (steps: number) => {

        switch(steps){
        }
    } 

  return (
    <>
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <SearchForm handleBack={handleBack} handleNext={handleNext} />
            </Paper>
        </Container>
    </>
  )
}

export default SearchPage;