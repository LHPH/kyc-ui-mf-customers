"use client"

import React from 'react'
import {useEffect, useState} from 'react';

import {DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Alert } from "@mui/material";
import Loader from '../Loader';

import { Customer } from '@/interfaces/customerData.interface';
import { ICustomerListResult } from '@/interfaces/customerListResult.interfaces';


const CustomerListResult = (props: ICustomerListResult) => {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [showLoader, setShowLoader] = useState<boolean>(true)

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Name', width: 170,
          valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`},
        { field: 'rfc', headerName: 'RFC', width: 180},
        { field: 'cellPhone', headerName: 'Cellphone', width:130},
        { field: 'email', headerName: 'Email', width:150},
        { field: 'active', headerName: 'Status', width:100,
          valueGetter: (params: GridValueGetterParams) =>
          params.row.active ? 'Active': 'Inactive'}
    ]

    useEffect(()=>{

        let customer: Customer =  {
            id: "1",
            firstName: "ROBERTO",
            secondName: "LUIS",
            lastName: "MENDOZA",
            rfc: "MERR901010DS2",
            age: "30",
            homePhone: "5544332211",
            cellPhone: "5533221100",
            email: "dev.test@test.com",
            active: true,
            address:{
                street: "AV EL PASO",
                streetNumber: "2",
                idNeighborhood: "40",
                neighborhood: "ROMA",
                idState: "20",
                idCity: "10",
                postalCode: "01000"
            }
        };

        const customers: Customer[] = [
           customer, {...customer, id: "5"}
        ];

        setCustomers(customers);
        setShowLoader(!showLoader);
    },[])

    const handleBack = () =>{
        props.handleBack();
    }

    const getComponent = (showLoader: boolean, customersSize: number) =>{

        if(showLoader){

            return <Loader show={showLoader} subtitle={'Searching customers...'} />;
        }
        else if(customersSize>0){
            
            return <DataGrid
                            rows={customers}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    }
                                }
                            }}
                            pageSizeOptions={[10]}
                            disableRowSelectionOnClick
            />
        }
        else{
            return <Alert severity="warning">No customer(s) found!</Alert>
        }
    }

  return (
   <>
      {getComponent(showLoader,customers.length)}
      {!showLoader && 
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ mt: 3, ml: 1 }} children="Back" onClick={handleBack} />
        </Box>
      }
   </>
  )
}

export default CustomerListResult;