"use client"

import React from 'react'
import { useState } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import PersonalDataForm from '../../../components/PersonalDataForm';
import AddressDataForm from '@/components/AddressDataFrom';
import Review from '@/components/Review';
import Success from '@/components/Success';
import { Box } from '@mui/material';
import { OperationType } from '@/components/enums/OperationType.enum';

const RegisterForm = () => {

    const steps = ['Personal Data', 'Address Data', 'Review','Success'];
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleBack = () => {
        setActiveStep(activeStep+1);
    }

    const handleNext = () => {
        setActiveStep(activeStep+1);
    }

    const getStepComponent = (step: number) =>{

        switch(step){
            case 0:
                return <PersonalDataForm handleNext={handleNext} />
            case 1:
                return <AddressDataForm handleNext={handleNext} handleBack={handleBack}/>
            case 2:
                return <Review handleNext={handleNext} handleBack={handleBack} />
        }
    }

  return (
    <>
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                
                {activeStep!==3 ?
                    <>
                        <Typography component="h1" variant="h4" align="center" children="Registration" />
                        <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                            {
                                steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))
                            }
                        </Stepper>
                        {getStepComponent(activeStep)}
                    </>
                    : <Success operation={OperationType.REGISTRATION}/>
                }
            </Paper>
        </Container>
    </>
  )
}

export default RegisterForm;