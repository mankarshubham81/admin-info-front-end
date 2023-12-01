import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";


function DeleteEmployee({edata}) {
    const [show, setShow] = useState(false);
    const [deleteData, setDeleteData] = useState(false);
    
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    const handleShow = (eData) => {
        console.log("edata 6", edata);
        setDeleteData(edata);
        setShow(true);
    }

    const handleDeleteData = () => {
        console.log("deleteData 7", deleteData);
        Axios.post('http://localhost:8081/deleteemployee', deleteData)
            .then(res => {
              // setEmployeeList([
              //   ...employeeList,
              //   {
              //     firstName: oldRecord.firstName,
              //     lastName: elastName,
              //     age: eage,
              //     mobileNumber: emobileNumber,
              //   },
              // ]);
                // navigate('/')
                console.log("Response ", res)})
            .catch(err => console.log("Error ", err));
        setShow(false);
    }

  return (
    <>
      <button className="btn btn-danger" onClick={() => handleShow(edata)}>Delete</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure about deleteing this employee record ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDeleteData} variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default DeleteEmployee;