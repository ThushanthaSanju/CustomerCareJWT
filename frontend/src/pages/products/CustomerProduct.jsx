import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import "../../css/view.css";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from "@material-ui/core/Divider";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


const PCustomerView = (props) => {
  const { useState } = React;
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [successMsg, setSuccessMsg] = useState([]);
  const [issucc, setIssucc] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getFileList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/getproducts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setErrorMsg("");
        setData(data);
        console.log(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
        console.log(error);
      }
    };

    getFileList();

    console.log(data);
  }, []);

  const [columns, setColumns] = useState([
    {
      title: "Image",
      field: "image",
      render: (rowData) => (
        <img
          style={{ height: 50, width: 50, borderRadius: "10%" }}
          // src={`http://localhost:5000/${rowData.image}`}
          src={rowData.image}
        />
      ),
    },
    { title: "Product ID", field: "productID" },
    { title: "Product Name", field: "productName" },
    { title: "Description", field: "description" },
    { title: "Warrenty Period", field: "warantyPeriod", type: "numeric"  },
    { title: "Price", field: "price", type: "numeric" },
  ]);

  /////////////////////////update rows
  const api = axios.create({
    baseURL: `http://localhost:5000`,
  });

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = [];
    if (newData.productID === "") {
      errorList.push("Please Check Again");
    }
    if (newData.productName === "") {
      errorList.push("Please Check Again");
    }
    if (newData.warantyPeriod === "") {
      errorList.push("Please Check Again");
    }
    if (newData.price === "") {
      errorList.push("Please Check Again");
    }

    if (errorList.length < 1) {
      api
        .put("/pCtrl/" + newData._id, newData, {
        })
        .then((res) => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve();
          setIserror(false);
        })
        .catch((error) => {
          setErrorMsg(["Update failed! Server error"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMsg(errorList);
      setIserror(true);
      resolve();
    }
  };

  ////////////Delete Row

  const handleRowDelete = (oldData, resolve) => {
    api
      .delete("/pCtrl/" + oldData._id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve();
        setSuccessMsg(["Delete success"]);
        setIssucc(true);
      })
      .catch((error) => {
        setErrorMsg(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

  return (
    <div>
      <br />
      <br />
      <h1 id="h12" align="center">
        Beach Travellers
      </h1>
      <div className='row p-5'>
        {data.map((data)=>{
          return(
            <Card className='m-3' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.productName}({data.productID})
          </Typography>
          <Typography
          className='text-small'
          color="textSecondary"
          gutterBottom
        >
          ${data.price}
        </Typography>
        <Typography
          className='text-small'
          color="textSecondary"
          gutterBottom
        >
        {data.warantyPeriod} Months
        </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
        </Typography>
                <Stack className='mt-2 p-1' direction="row" spacing={1}>
            {data.productName .split(',').map((data)=>{
              return(
      <Chip label={data} variant="outlined" />
              )
            })}
    </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{navigate(`/AddCart/${data._id}`)}}>
          ADD CART
        </Button>
      </CardActions>
    </Card>
          )
        })}
      
      </div>
      <div className="tbl d-none">
        <div>
          {iserror && (
            <Alert severity="error">
              {errorMsg.map((msg, i) => {
                return <div key={i}>{msg}</div>;
              })}
            </Alert>
          )}

          {issucc && (
            <Alert severity="success">
              {successMsg.map((msg, i) => {
                return <div key={i}>{msg}</div>;
              })}
            </Alert>
          )}
        </div>

        <MaterialTable
        
        //   title={
        //     <><Button
        //       id="btnAdd"
        //       variant="contained"
        //       color="primary"
        //       href="/addliveboard"
        //     >
        //       Add new Liveboards
        //     </Button><Button
        //       id="btnbook"
        //       variant="contained"
        //       color="primary"
        //       href="/bookingsadmin"
        //     >
        //       Bookings
        //       </Button></>
        //   }
          columns={columns}
          data={data}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                handleRowUpdate(newData, oldData, resolve);
              }),

            // onRowDelete: (oldData) =>
            //   new Promise((resolve, reject) => {
            //     handleRowDelete(oldData, resolve);
            //   }),
          }}
          options={{
            headerStyle: {
              backgroundColor: "rgba(8, 9, 70, 0.363)",
              color: "rgba(0, 0, 0)",
            },
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

export default PCustomerView;