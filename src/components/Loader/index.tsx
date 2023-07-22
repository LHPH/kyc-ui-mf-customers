"use client";

import React from 'react'

import {CircularProgress, Modal, Typography, Box, Stack} from '@mui/material'

import ILoader from '@/interfaces/loaderModal.interface';

const Loader = (props: ILoader) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        //p: 4,
      };

  return (
    <>
        <Modal open={props.show} disableAutoFocus={true} disablePortal={true} disableEscapeKeyDown={true} disableScrollLock={true}>
            <Box sx={style}>
                <Stack direction={'column'} alignItems={'center'}>
                    <CircularProgress sx={{color: 'white'}}/>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        children={props.subtitle}
                        color={'white'}
                    />
                </Stack>
            </Box>
        </Modal>
    </>
  )
}

export default Loader;