import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink, useParams, useNavigate } from 'react-router-dom';


const Details = () => {

    const navigate = useNavigate();

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            navigate("/");
        }

    }

    return (
        <div className="container mt-3">
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <h3 className="mt-3">Institute Name: <br></br><span >{getuserdata.name}</span></h3>
                            <p className="mt-3">Refrence number <span >{getuserdata.refnum}</span></p>
                            <p className="mt-3">Institute phone <span>{getuserdata.phone}</span></p>
                            <p className="mt-3">Fees <span>{getuserdata.fees}</span></p>
                            <p className="mt-3">Desipline <span>{getuserdata.work}</span></p>
                        </div>
                       
                    </div>

                    
                <br></br><br></br>
                <a className="signup__link" href="http://localhost:3000/admin">Back to admin portal</a>
              

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
