"use client"

import React from 'react'
import { useState } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SearchCustomerForm from '@/components/SearchCustomerForm';
import CustomerListResult from '@/components/CustomerListResult';

const SearchPage = () => {

    const steps = ['Search Customer', 'Results'];
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleBack = () => {
        setActiveStep(activeStep-1);
    }

    const handleNext = () => {
        setActiveStep(activeStep+1);
    }
    const getComponent = (steps: number) => {

        switch(steps){
            case 0:
                return <SearchCustomerForm handleBack={handleBack} handleNext={handleNext} />
            case 1:
                return <CustomerListResult handleBack={handleBack}/>
        }
    } 

    const getContainerSize = (step: number) => {

        switch(step){
            case 0:
                return "sm";
            case 1:
                return "md";
        }
    } 

  return (
    <>
        <Container component="main" maxWidth={getContainerSize(activeStep)} sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                {getComponent(activeStep)}
            </Paper>
        </Container>
    </>
  )
}

export default SearchPage;