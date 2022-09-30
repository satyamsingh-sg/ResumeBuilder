
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/form.css"

function Achievenments({achiv,getdata2,achivedit,achivdelet}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setValue] = useState(0)
  
  const [edit, setEdit] = useState(false);

  const handleeditclose= () => setEdit(false);
  const handleeditshow = () => setEdit(true);


  const handleEdit= (idx) => {
    handleeditshow();
    setValue(idx)
    handleShow()
  }

  const { register, handleSubmit } = useForm();
  const [user, setData] = useState({
    Title: "",
    Date: "",
    description: "",
  });




  const funct = () => {
    handleClose()
  }

  const [employees, setEmployees] = useState([]);
  function handleChange(data) {


    setData(data)
    setEmployees(prev => [...prev, data])
    getdata2(data)
  
    funct()
    
  }


  const removeProduct = (index) => {
    achivdelet(index)
    setEmployees([
      ...employees.slice(0, index),
      ...employees.slice(index + 1, employees.length)
    ]);
  }
  const UpdateProduct = (data) => {
    achivedit(data,count)
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
              Add Achievenments
            </Button>
          </div>
          { !edit && (
            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Achievenments</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <label>Title</label>
                <div className='get'>
                    <input type="test" name="Title" id="name"{...register("Title")}/>
                </div>
               
                <label>Date</label>
                <div className='get'>
                  <input type="date" name="Start" id="name"{...register("Date")} />
                  

                  
                </div>
                <label>Decription</label>
                <div className='get'>
                <textarea type="text" rows="6" cols="60" name="description" {...register("description")}/>
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
                <Modal.Title>Edit Achievenments</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <label>Title</label>
                <div className='get'>
                    <input type="test" name="Title" id="name"{...register("Title")}/>
                </div>
               
                <label>Date</label>
                <div className='get'>
                  <input type="date" name="Start" id="name"{...register("Date")} />
                  

                  
                </div>
                <label>Decription</label>
                <div className='get'>
                <textarea type="text" rows="6" cols="60" name="description" {...register("description")}/>
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

          {achiv.map((name, idx) => (
            // idx > 0 && (
              <div className='box4'>
                
              <div className='intitute'>
              <h3><b>  {name.Title}</b></h3>
              
              <p>{name.Date}   </p>
                
               
            </div>
              <div>
              <b>{name.Degree}</b>
            </div>
            <div className='dec'>
              <p>{name.description}</p>
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

export default Achievenments;