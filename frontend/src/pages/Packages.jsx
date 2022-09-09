import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPackage from "../components/AddPackage";



const Packages = () => {
    const navigate = useNavigate();
    const columns = [
        { field: '_id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'Delete',
            renderCell: (cellValues) => {
                return (
                    <IconButton onClick={() => handleRemoveItem(cellValues)}><DeleteIcon />
                    </IconButton>)

                // <IconButton onClick={() => axios.delete(`http://localhost:5000/packages/${cellValues.row._id}`).
                //     then(alert("Deleted"))
                //     .them(window.location.reload())}><DeleteIcon />
                // </IconButton>)
            }, width: 80
        },
        {
            field: 'Update',
            renderCell: (cellValues) => {
                return (
                    <IconButton onClick={() => { navigate(`updatepackage/${cellValues.row._id}`) }}>
                        <EditIcon />
                    </IconButton>
                    // <IconButton onClick={() => console.log(cellValues.row)}>
                    //     <EditIcon />
                    //     </IconButton>
                )
            }, width: 80
        },
    ]


    const handleRemoveItem = (cellValues) => {
        axios.delete(`http://localhost:5000/packages/${cellValues.row._id}`).
            then(alert("Deleted"))
            .then(window.location.reload())
    };


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





