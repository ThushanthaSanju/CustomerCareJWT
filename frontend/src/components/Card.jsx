
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Sea from "../images/sea.jpg"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@material-ui/core';
import axios from 'axios';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Carditem = ({ item }) => {



    const handleSubmit = (event) => {

        // e.preventDefault();
        // setBtnDisable(true);

        // try {
        //     if (validateForm()) {
        //        (data).then((res) => {
        //             console.log(res);
        //             if (res.success) {
        //                 toast.success("Booking Success")
        //             } else {
        //                 toast.error("Booking Failed")
        //             }
        //             clearForm()
        //             setBtnDisable(false);
        //         }).catch((err) => {
        //             console.log(err);
        //             setBtnDisable(false);
        //         })
        //     }
        // } catch (error) {
        //     setBtnDisable(false);

        // }

    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>  <Card sx={{ maxWidth: 400 }}>
            <CardHeader

                title={item.name}

            />
            {/* <CardMedia
                component="img"
                height="194"
                width="154"

                image={Sea}
                alt="Diver"
            /> */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                click to view the price
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="view price"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        Rs.{item.price}.00
                    </Typography>
                    <Button style={{ backgroundColor: '#03a1fc', color: '#FFFFFF' }} onClick={handleSubmit}> Book Now</Button>
                </CardContent>
            </Collapse>
        </Card></div>
    )
}

export default Carditem