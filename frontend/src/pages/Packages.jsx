import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        width: 90,
    },
    {
        field: 'Delete',
        renderCell: (cellValues) => {
            return (<Button variant='outlined' >Delete</Button>)
        }
    },
    {
        field: 'Update',
        renderCell: (cellValues) => {
            return (<Button variant='outlined' >Update</Button>)
        }
    },


];

const rows = [
    {
        id: 1, lastName: 'Snow', firstName: 'Jon', age: 40
    },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },


];


const Packages = () => {
    const navigate = useNavigate();

    return (
        <>
            <Grid display="flex" justifyContent="flex-end" sx={{ m: 6 }}>
                <Button variant='outlined' onClick={() => navigate('/addpackage')}>Add Package</Button>
            </Grid>


            <Box sx={{ width: 1200, margin: 'auto', marginBottom: 10 }}>
                <Grid container
                    spacing={0}
                    direction="column"

                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '50vh' }}>

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}

                        />
                    </div>
                </Grid>
            </Box>
        </>


    )
}

export default Packages





