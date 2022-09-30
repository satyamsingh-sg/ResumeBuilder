import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/form.css"
import "./experiences.css"
function Experiences({experience, getdata1,editdata1,Delete1}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setValue] = useState(0)

  const [edit, setEdit] = useState(false);

  const handleeditclose = () => setEdit(false);
  const handleeditshow = () => setEdit(true);


  const handleEdit = (idx) => {
    handleeditshow();
    setValue(idx)
    handleShow()
  }
  const { register, handleSubmit } = useForm();
  const [user, setData] = useState({
    Company: "",
    Role: "",
    Start:"",
    End: "",
    decription:""
  });




  const funct = () => {
    handleClose()
  }

  const [employees, setEmployees] = useState([]);
  function handleChange(data) {
   
    setData(data)
    setEmployees(prev => [...prev, data])
    getdata1(data)


    funct()

  }


  const removeProduct = (index) => {
    Delete1(index)
    setEmployees([
      ...employees.slice(0, index),
      ...employees.slice(index + 1, employees.length)
    ]);
  }
  const UpdateProduct = (data) => {
    console.log(data);
    editdata1(data,count)
    employees[count] = data;
    handleeditclose();
    funct()
  }


  return (

    <>
      <div className="block">
        <div>
          <div className="btn3">
            <Button variant="primary" onClick={handleShow}>
              Add Experiences
            </Button>
          </div>
          { !edit && (
            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Experiences</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <label>Company</label>
                <div className='get'>
                    <input type="test" name="Company" id="name"{...register("Company")}/>
                </div>
                <label>Role</label>
                <div className='get'>
                <input type="test" name="Role" id="name"{...register("Role")}/>
                </div>
                <label>Date</label>
                <div className='get'>
                  <input type="date" name="Start" id="name"{...register("Start")} />
                  <input type="date" name="End" id="name"{...register("End")}/>

                  
                </div>
                <label>Decription</label>
                <div className='get'>
                <textarea type="text" rows="6" cols="60" name="decription" {...register("decription")}/>
                </div>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit((data) => handleChange(data))}   >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

         ) }
          
          { edit && (
            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Experiences</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <label>Company</label>
                <div className='get'>
                    <input type="test" name="Company" id="name"{...register("Company")}/>
                </div>
                <label>Role</label>
                <div className='get'>
                <input type="test" name="Role" id="name"{...register("Role")}/>
                </div>
                <label>Date</label>
                <div className='get'>
                  <input type="date" name="Start" id="name"{...register("Start")} />
                  <input type="date" name="End" id="name"{...register("End")}/>

                  
                </div>
                <label>Decription</label>
                <div className='get'>
                <textarea type="text" rows="6" cols="60" name="decription" {...register("decription")}/>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit((data) => UpdateProduct(data))}   >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

         ) }
        </div>
        <div>

          {experience.map((name, idx) => (
            // idx > 0 && (
              <div className='box4'>
                
              <div className='intitute'>
              <h3><b> {name.Company}</b></h3>
              
              <p>{name.Start}   </p>
                
               
            </div>
              <div>
              <b>{name.Role}</b>
            </div>
            <div className='dec'>
              <p>{name.decription}</p>
            </div>
                <div className='data'>
              <button type="submit" onClick={() => removeProduct(idx)}> Delete</button>


              <Button variant="primary" onClick={() => handleEdit(idx)} >
                edit
                </Button>
              </div>
          </div>

            // )
          ))}

           
        </div>


      </div>
    </>
  );
}

export default Experiences;












