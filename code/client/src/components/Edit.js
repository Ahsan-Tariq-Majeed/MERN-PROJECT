import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const navigate = useNavigate();

    const { updata, setUPdata } = useContext(updatedata)


    const [user, setINP] = useState({
        name: "", refnum:"", phone:"", fees:"", work:"" 
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


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
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


//    // const updateuser = async (e) => {
//         e.preventDefault();

//         const { name, refnum, phone, fees, work } = user;

//         const res2 = await fetch(`/updateuser/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name, refnum, phone, fees, work 
//             })
//         });

//         const data2 = await res2.json();
//         console.log(data2);

//         if (res2.status === 422 || !data2) {
//             alert("fill the data");
//         } else {
//             navigate("/");
//             setUPdata(data2);
//         }

//     }




    const updateuser = async (e) => {
        e.preventDefault();
    
        const { name, refnum, phone, fees, work } = user;
    
        const res = await fetch(`/updateuser/${id}`, {
    
          method: "PATCH", 
          headers: { 
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, refnum, phone, fees, work
          })
    
        });
    
        const data = await res.json();
        if (res.status === 422 || !data) {
          window.alert("Invalid Updation")
          console.log("invalid")
        }
        else {
          window.alert("Updation Successfully")
          console.log("valid")
    
          navigate("/admin");
        }
    
      }





    return (
        <div className="container">
            <Link style={{
                width: 75,
                position: 'absolute',
                marginTop: -10,
                marginLeft: 1310,
                paddingLeft: 15,
                paddingBottom: 10, paddingTop: 10, paddingRight: 10, borderRadius: 7,
                backgroundColor: 'darkblue', color: 'white', textDecoration: 'none'
            }} to="/admin">Back</Link>
            <form method = "PATCH"className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Insitute name</label>
                        <input type="text" value={user.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Refernce number</label>
                        <input type="number" value={user.refnum} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Insitute phone</label>
                        <input type="number" value={user.phone} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Insitute fees</label>
                        <input type="number" value={user.fees} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Insitute work</label>
                        <input type="text" value={user.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>
                  

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
        }

export default Edit;





