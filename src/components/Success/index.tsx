"use client";

import React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { ISuccess } from "@/interfaces/Success.interface";

const Success = (props: ISuccess) => {
  return (
    <>
      <Grid container direction="column" alignItems="center" mb={2}>
        <Grid item>
          <CheckCircleIcon color="success" style={{ fontSize: "xxx-large" }} />
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center" children={"Success"} />
        </Grid>
      </Grid>
      <Alert severity="info">The registration was successful</Alert>
      <Grid container spacing={1} justifyContent="center" alignItems="center" mt={2} direction="column">
        <Grid item xs={6}>
            <Typography  variant="subtitle2" children="Customer number:" />
        </Grid>
        <Grid item xs={6}>
            <Typography  children="1234567890" />
        </Grid>
        <Grid item xs={6}>
            <Typography  variant="subtitle2" children="Customer name:" />
        </Grid>
        <Grid item xs={6}>
        <Typography  children="TEST TEST TEST TEST" />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Button sx={{mt: 3, ml: 1}} variant="contained" children="Accept" />
      </Box>
    </>
  );
};

export default Success;
