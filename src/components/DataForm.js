import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
import DeleteEmployee from "./DeleteEmployee";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {Link} from 'react-router-dom';
// import DataTable from "./DataTable";
// import a from '../../public/profiles/profile2.png';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import '../../public/profiles'


function DataForm() {

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;


  const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [mobileNumber, setMobileNumber] = useState(0);

  // const [efileName, setEFileName] = useState("");
  const [efile, setEFile] = useState("");
  const [efirstName, setEFirstName] = useState("");
  const [elastName, setELastName] = useState("");
  const [eage, setEAge] = useState(0);
  const [emobileNumber, setEMobileNumber] = useState(0);
  // const [country, setCountry] = useState("");
  // const [position, setPosition] = useState("");
  const [oldRecord, setOldRecord] = useState({});
  const [isData, setIsData] = useState(false);
  const [isEditData, setIsEditData] = useState(false);

  const [employeeList, setEmployeeList] = useState([]);

  const[wrongInput, setWrongInput] = useState(false);

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {

    // Axios.get('http://localhost:8081/create')
    //     .then(res => {
    //         if(res.data.Status === "Success") {
    //           setAuth(true);
    //           console.log("res.data.Status", res.data.Status);
    //           navigate('/create')
    //         } else {
    //             setAuth(false);
    //             setMessage(res.data.Error);
    //             // alert("Unauthorized access");
    //         }
    //     })

        setAuth(true);

    Axios.get("http://localhost:8081/employees").then((response) => {
      // console.log("ffffffff", response.data);
      setEmployeeList(response.data);
      // setIsData(true);

    }, employeeList);
  }, [employeeList]);

  // const handleImage = (e) => {
  //   console.log("39 9999", URL.createObjectURL(e.target.files[0]));
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // }

  
  const addEmployee = () => {
    // const formData = new FormData();
    // console.log("formdata1", formData);
    //     formData.append("file", file);
    //     formData.append("fileName", fileName);
    // const formdata = new FormData();
    // formdata.append('image', file);
    console.log("name", firstName)
    console.log("age", age)
    // e.target.files[0]
    console.log("Image 51", file);
    // var formEntries = formData.entries();
    // console.log(formEntries.next().value); 
    // console.log(formEntries.next().value); 
    if( firstName !== '' && lastName !== '' && age !== 0 && mobileNumber !== 0){
      // Axios.post("http://localhost:8081/upload", {formData})
      // .then(res => console.log("sh",res))
      // .catch(err => console.log("err68",err))

      Axios.post("http://localhost:8081/create", {
      firstName: firstName,
      lastName: lastName,
      age: age,
      mobileNumber: mobileNumber,
      image: file
      // country: country,
      // position: position,
    }).then(() => {

      setFirstName("");
      setLastName("");
      setAge(0);
      setMobileNumber(0);
      setFile("");

      setEmployeeList([
        ...employeeList,
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          mobileNumber: mobileNumber,
          // country: country,
          // position: position,
        },
      ]);
    });
      setFirstName("");
      setLastName("");
      setAge(0);
      setMobileNumber(0);
      setFile("");
      setIsData(true);
  } else {
    setWrongInput(true);
    // toast("Please Enter Valid Input");
    toast("Please Enter Valid Input", {type: "error"})
  }
  };

  // const getEmployees = () => {
  //   Axios.get("http://localhost:8081/employees").then((response) => {
  //     console.log("ffffffff", response.data);
  //     setEmployeeList(response.data);
      

  //   });
  // };

  

  const handleEditEmployee = (eData) => {
    console.log("wwwww", eData);
    Axios.post("http://localhost:8081/editemployee", {
      firstName: efirstName,
      lastName: elastName,
      age: eage,
      mobileNumber: emobileNumber,
      image: efile,
      oldRecord: oldRecord,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          image: efile,
          firstName: efirstName,
          lastName: elastName,
          age: eage,
          mobileNumber: emobileNumber,
        },
      ]);
    });

    // Axios.post('http://localhost:8081/deleteemployee', oldRecord)
    //         .then(res => {
    //           // setEmployeeList([
    //           //   ...employeeList,
    //           //   {
    //           //     firstName: oldRecord.firstName,
    //           //     lastName: elastName,
    //           //     age: eage,
    //           //     mobileNumber: emobileNumber,
    //           //   },
    //           // ]);
    //             // navigate('/')
    //             console.log("Response ", res)})
    //         .catch(err => console.log("Error ", err));

    setIsEditData(false);
  }

  

  // const handleDeleteData = (eData) => {

  // }

    const handleEditData = (eData) => {
    console.log("MMMM", eData);
    setEFirstName(eData.firstName);
    setELastName(eData.lastName);
    setEAge(eData.age);
    setEMobileNumber(eData.mobileNumber);
    setEFile(eData.image);
    setOldRecord(eData);
    setIsEditData(true);
    // Axios.post('http://localhost:8081/deleteemployee', eData)
    //         .then(res => {
    //           setEmployeeList([
    //             ...employeeList,
    //             {
    //               firstName: efirstName,
    //               lastName: elastName,
    //               age: eage,
    //               mobileNumber: emobileNumber,
    //             },
    //           ]);
    //             // navigate('/')
    //             console.log("Response ", res)})
    //         .catch(err => console.log("Error ", err));
    // Axios.put("http://localhost:8081/update", { wage: newWage, id: id }).then(
    //   (response) => {
    //     setEmployeeList(
    //       employeeList.map((val) => {
    //         return val.id === id
    //           ? {
    //               id: val.id,
    //               name: val.name,
    //               country: val.country,
    //               age: val.age,
    //               position: val.position,
    //               wage: newWage,
    //             }
    //           : val;
    //       })
    //     );
    //   }
    // );
  };

//   const deleteEmployee = (id) => {
//     Axios.delete(`http://localhost:8081/delete/${id}`).then((response) => {
//       setEmployeeList(
//         employeeList.filter((val) => {
//           return val.id !== id;
//         })
//       );
//     });
//   };

// const HandleImage = (e) => {
//   console.log("iiiiii", e.target.files[0])
//   setFile(URL.createObjectURL(e.target.files[0]));
//   // setFileName(e.target.files[0].name)
// }
// const handleEImage = (e) => {
//   console.log("eee", e.target.files[0])
//   setEFile(e.target.files[0]);
//   setEFileName(URL.createObjectURL(e.target.files[0]))
//   console.log("EFIle", efileName);
// }



  return (
    auth && 
    <div >
      {/* <div className='m-3'>
      { wrongInput ?
         <ToastContainer style={{color: "red", textAlign: "center"}} /> : ""
        }
      </div> */}
      <Container>
      <div style={{backgroundColor: "burlywood", borderRadius:"5px", textAlign: "center"}} className='mb-3 mt-3 p-3'>
        {/* <label>uplaod image</label>
        <input
        type="file"
        // value={isEditData ? efirstName : firstName}
        name='image'
        id="image"
        // accept="image/jpg, image/jpeg, image/png"
        // value={image}
        onChange={(e) => {
          isEditData ? handleEImage(e) : HandleImage(e);
          // isEditData ? setEImage(`${e.target.files[0]}`) : setImage(`${e.target.files[0]}`);
        }}
        /> */}
        <Row md={6}>
        <Col md={2}>
        <label>First Name:</label>
        </Col>
        <Col md={4}>
        <input
        style={{borderRadius:"5px", borderColor:"brown"}}
          type="text"
          value={isEditData ? efirstName : firstName}
          onChange={(event) => {
            isEditData ? setEFirstName(event.target.value) : setFirstName(event.target.value);
          }}
        />
        </Col>
        </Row>
        <br/>
        <Row md={6}>
          <Col md={2}>
            <label>Last Name :</label>
          </Col>
        <Col md={4}>
        <input
        style={{borderRadius:"5px", borderColor:"brown"}}
          type="text"
          value={isEditData ? elastName : lastName}
          onChange={(event) => {
            isEditData ? setELastName(event.target.value) : setLastName(event.target.value);
          }}
        />
        </Col>
        </Row>
        <br/>
        <Row md={6}>
          <Col md={2}>
            <label>Age :</label>
          </Col>
          <Col md={4}>
        <input
        style={{borderRadius:"5px", borderColor:"brown"}}
          type="number"
          value={isEditData ? eage : age}
          onChange={(event) => {
            isEditData ? setEAge(event.target.value) : setAge(event.target.value);
          }}
        />
          </Col>
        </Row>
        <br/>
        <Row md={6}>
          <Col md={2}>
        <label>Mobile Number:</label>
          </Col>
        <Col md={4}>
        <input
        style={{borderRadius:"5px", borderColor:"brown"}}
          type="number"
          value={isEditData ? emobileNumber : mobileNumber}
          onChange={(event) => {
            isEditData ? setEMobileNumber(event.target.value) : setMobileNumber(event.target.value);
          }}
        />
        </Col>
        </Row>
        <br/>
        {/* <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        /> */}
        <div>
        <button className='btn btn-info mb-3 mt-3' onClick={isEditData ? handleEditEmployee : addEmployee}>{isEditData ? "Edit Employee" : "Add Employee"}</button>
        </div>
        {/* <div>
          {wrongInput && <p className='text-danger' >Please Enter Valid Input</p>}
        </div> */}
        <div className='m-3'>
      { wrongInput ?
         <ToastContainer style={{color: "red", textAlign: "center"}} /> : ""
        }
      </div>
      </div>
      {/* { isEditData &&  */}
      { false && 
        (<div className='bg-white p-3 rounded w-25'>
        <label>First Name:</label>
        <input
          type="text"
          value={efirstName}
          onChange={(event) => {
            setEFirstName(event.target.value);
          }}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={elastName}
          onChange={(event) => {
            setELastName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          value={eage}
          onChange={(event) => {
            setEAge(event.target.value);
          }}
        />
        <label>Mobile Number:</label>
        <input
          type="number"
          value={emobileNumber}
          onChange={(event) => {
            setEMobileNumber(event.target.value);
          }}
        />
        <div>
        <button className='mb-3 mt-3' onClick={handleEditEmployee}>Edit Employee</button>
        </div>
      </div>)
      }
      <div>
        {message}
      </div>
      </Container>
      <div className='m-3'>
        {/* <button onClick={getEmployees}> */}
        {/* Show Employees */}
          {/* <Link to={'/datainfo'} className='btn btn-default border w-100 bg-light rounded-0' >  </Link> */}
        {/* </button> */}
      
        {(isData || employeeList.length > 0) && 
          (<table className={"table table-striped table-dark"} >
            <thead>
                        <tr>
                        {/* <th scope="col">Profile</th> */}
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Edit Data</th>
                        <th scope="col">Delete Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList.map(( edata ) => 
                                <tr key={edata.mobileNumber}>
                                  {/*
                                  <td>
                                  {/* <Col xs={3} md={1}> 
                                  
                                       <img height={'50px'} width={'50px'} src={edata.image} alt={"profileimg"} /> 
                                      {/* <Image height={'50px'} width={'50px'} src="https://avatars.githubusercontent.com/u/60600110?s=400&u=4daf7d51b03150538a6dcc99f95ccc8c8d827d9d&v=4" roundedCircle /> 
                                      {/* <Image height={'50px'} width={'50px'} src="../../public/profiles/profile1.jpeg" roundedCircle /> */}
                                      {/* <Image imageSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fedumontclasses.com%2Fassets%2Fimages%2Fprofile.png&tbnid=dJxfuI6obnHK_M&vet=12ahUKEwiNkui5tPKBAxV55zgGHRXDCSIQMygBegQIARBI..i&imgrefurl=https%3A%2F%2Fedumontclasses.com%2F&docid=MBaBSTmMxUdMlM&w=512&h=512&q=dummy%20profile%20png&ved=2ahUKEwiNkui5tPKBAxV55zgGHRXDCSIQMygBegQIARBI" roundedCircle /> 
                                  {/* </Col> 
                                  </td>
                                  */}
                                    {/* <td><img  src={a} alt={"sample image"}/></td> */}
                                    <td>{edata.firstName}</td>
                                    <td>{edata.lastName}</td>
                                    <td>{edata.age}</td>
                                    <td>{edata.mobileNumber}</td>
                                    <td><button className="btn btn-info" onClick={() => handleEditData(edata)}>Edit</button></td>
                                    {/* <td><button className="btn btn-danger" onClick={() => handleDeleteData(edata)}>Delete</button></td> */}
                                    <td><DeleteEmployee edata={edata} /></td>
                                </tr>
                            )} 
                    </tbody>
                </table>)
        }
      </div >
    </div>
  );
}

export default DataForm;