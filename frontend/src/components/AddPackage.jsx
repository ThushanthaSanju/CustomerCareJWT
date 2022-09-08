import React, { useState } from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();
function AddPackage() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };
    const handleDes = (e) => {
        setDescription(e.target.value);
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (event) => {


        event.preventDefault();

        const packagee = {
            name: name,
            description: description,
            price: price,

        };
        axios
            .post(`http://localhost:5000/packages`, packagee, {

            })
            .then((res) => {
                console.log(res.data);

                if (res.status === 201) {

                    console.log("kgakganlldk");
                } else {
                    setSuccessMsg("unuccessfully inserted");
                }
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pb: 20

                    }}
                >

                    <Typography component="h1" variant="h5">
                        Add Package
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    onChange={(e) => handleName(e)}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="description"
                                    label="Description"
                                    name="description"
                                    onChange={(e) => handleDes(e)}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="price"
                                    label="Price"
                                    name="price"
                                    type="number"
                                    onChange={(e) => handlePrice(e)}

                                />
                            </Grid>




                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Package
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    )
}

export default AddPackage