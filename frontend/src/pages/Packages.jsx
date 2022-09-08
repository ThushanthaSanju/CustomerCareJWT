import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


//get all book details

const Packages = () => {

    const columns = [
        { field: '_id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'Delete',
            renderCell: (cellValues) => {
                return (<Button variant='outlined' ><DeleteIcon /></Button>)
            }, width: 80
        },
        {
            field: 'Update',
            renderCell: (cellValues) => {
                return (<Button variant='outlined' ><EditIcon /></Button>)
            }, width: 80
        },
    ]
    const [tabledata, setTableData] = useState([]);


    useEffect(() => {
        const getFileList = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/packages`, {
                });
                setTableData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getFileList();
    }, []);

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
                            rows={tabledata}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            getRowId={(row) => row._id}

                        />
                    </div>
                </Grid>
            </Box>
        </>


    )
}

export default Packages





