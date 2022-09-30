import React, { useState } from "react";
import './profile.css';
import { useForm } from 'react-hook-form'
import { Button } from "bootstrap";
import imge from "../img/upload.png"



const Profile = ({ profiledata, alldata }) => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({

        name: "",
        email: "",
        bio: ""

    });
    console.log("satyam");
    console.log(alldata);
    // console.log(Object.keys(alldata). length === 0)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    const [file, setFile] = useState(imge);
    function handleChang(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleChange(data) {
       
        setUser(data)
        handleClose()
        profiledata(data);


    }

    
    
   



    return (
        <>
            { (show || !alldata ) ?( 
                <div>
                    <form>

                        <div className="box1">

                            <div className="profimg1" >

                                <img src={file} height="120px" width="120px" />

                                <input type="file" id="file-input"
                                onChange={handleChang}
                                    placeholder="upload" />
                            </div>






                            <div className="mid1">
                                <div className="name">
                                    <label>Name </label>
                                    <div className="inp1">
                                        <input type="test" name="name" id="name"
                                            {...register("name")}
                                            // value={user.name}
                                        //   onChange={handleChange}


                                        />



                                    </div>
                                </div>
                                <div className="email">
                                    <label>Email </label>
                                    <div className="inp2">
                                        <input type="test" name="email" id="name"
                                            {...register("email")}
                                        //   onChange={handleInputs}
                                        />
                                    </div>
                                </div>
                                <div className="btn1">
                                    <button type="submit"
                                        onClick={handleSubmit((data) => handleChange(data))}
                                    > Save</button>
                                </div>
                            </div>





                            <div className="end">
                                <label>Short Bio </label>
                                <div className="inp3">
                                    <textarea type="text" rows="11" cols="60" name="bio"
                                        {...register("bio")}
                                        //   onChange={handleInputs}
                                        placeholder="Enter Bio"
                                    ></textarea>
                                </div>
                            </div>




                        </div>
                    </form>
                </div>


            ):

            (  <div className="box1">
                    
                    <div className="profimg" >
                        <img src={file} height="120px" width="120px" />
                    </div>
                    
                    <div className="details">
                      
                        <div className="name"><h3>{alldata.name}</h3></div>
                        <div className="Email"><h5>{alldata.email}</h5></div>
                        <div className="intro"><p>{alldata.bio}</p></div>

                        <div className="btn2">
                            <button type="submit"
                            onClick={handleShow}
                            > Edit</button>
                        </div>
                    </div>
                   
                   

                </div>
            )}
        </>
    )
}

export default Profile;