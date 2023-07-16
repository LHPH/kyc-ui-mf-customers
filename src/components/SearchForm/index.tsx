"use client";

import React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Divider, Grid, Stack, TextField } from "@mui/material";
import ISearchForm from "@/interfaces/SearchForm.interface";

const SearchForm = (props: ISearchForm) => {

  const [searchOption, setSearchOption] = useState<number>(0);

  const handleBack = () => {
    props.handleBack();
  };

  const handleNext = () => {
    props.handleNext();
  };

  const handleChangeOpt = (event: SelectChangeEvent) => {
    setSearchOption(parseInt(event.target.value));
  };

  const getComponent = (searchOption: number) => {
    switch (searchOption) {
      case 0:
        return (
          <TextField
            placeholder="Customer No."
            label="Customer No."
            variant="outlined"
            size="small"
            required
          />
        );
      case 1:
        return (
          <TextField
            placeholder="RFC"
            variant="outlined"
            label="RFC"
            size="small"
            required
          />
        );
      case 2:
        return (
          <>
            <Stack direction="column" spacing={2}>
              <TextField
                placeholder="First Name"
                label="First Name"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                placeholder="Second Name"
                label="Second Name"
                variant="outlined"
                size="small"
              />
              <TextField
                placeholder="Last Name"
                label="Last Name"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                placeholder="Last Second Name"
                label="Last Second Name"
                variant="outlined"
                size="small"
              />
            </Stack>
          </>
        );
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        children="Search Customer"
      />
      <Grid
        container
        alignContent={"center"}
        alignItems={"center"}
        mt={5}
        mb={2}
      >
        <Grid item xs={4}>
          <Select
            value={"" + searchOption}
            onChange={handleChangeOpt}
            size="small"
            sx={{ minWidth: 146 }}
          >
            <MenuItem value={0}>Customer No.</MenuItem>
            <MenuItem value={1}>RFC</MenuItem>
            <MenuItem value={2}>Full Name</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          {getComponent(searchOption)}
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 3, ml: 1 }} children="Back" onClick={handleBack} />
        <Button
          sx={{ mt: 3, ml: 1 }}
          variant="contained"
          children="Next"
          onClick={handleNext}
        />
      </Box>
    </>
  );
};

export default SearchForm;
