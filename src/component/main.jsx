import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Education from "./education/education"
import Profile from "./profile/profile"
import Achievenments from "./achievenments/achievements";
import Experiences from "./experiences/experiences";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
// import Dum from "../dum"
const Main = () => {
  const [education, seteduction] = useState([]);
  const getdata = (data) => {
  
    seteduction(prev => [...prev, data])
  }

  const Eductionedit = (data ,count) => {
    education[count] = data;
    
  }
  const Eductiondelet = (index) => {
    seteduction([
      ...education.slice(0, index),
      ...education.slice(index + 1, education.length)
    ]);
  }

  const [experience, setexperience] = useState([]);

    const getdata1 = (data) => {
       console.log(data)
      setexperience(prev => [...prev, data])
    }

    const experienceedit = (data ,count) => {
      experience[count] = data;
      
    }

  const experiencedelet = (index) => {
    setexperience([
      ...experience.slice(0, index),
      ...experience.slice(index + 1, experience.length)
    ]);

}
  
    const [achiv, setachiv] = useState([]);

    const getdata2 = (data) => {
       console.log(data)
       setachiv(prev => [...prev, data])
    }

    const achivedit = (data ,count) => {
      achiv[count] = data;
      
    }

  const achivdelet = (index) => {
    setachiv([
      ...achiv.slice(0, index),
      ...achiv.slice(index + 1, achiv.length)
    ]);
  }

  
  const [profile, setProfile] = useState();

    
  const profiledata = (data) => {
  
  setProfile(data)

  }
  
  const data = {
    "Profile": profile,
    "Education": education,
    "Experience": experience,
    "Achievenments":achiv
}

// const [file, setFiles] = useState([]);
  var file;
  const importfuntion = (data) => {
    
    setProfile(data["Profile"]);
    seteduction(data["Education"]);
    setachiv(data["Achievenments"]);
    setexperience(data["Experience"])

    
}
 
  return (
    <div>
      <Header data={data} importfuntion={importfuntion} />

      <Profile profiledata={profiledata} alldata={profile} />
    
      <BrowserRouter>
        <Navbar achiv={achiv.length} education={education.length} experience={experience.length}  />
        <Routes>
          <Route path='/' element={<Education education={education} getdata={getdata} editdata={Eductionedit} Delete={Eductiondelet} />} />
          <Route path='/Experiences' element={<Experiences experience={experience} getdata1={getdata1} editdata1={experienceedit} Delete1={experiencedelet}/>} />
          <Route path='/Achievenments' element={<Achievenments achiv={achiv} getdata2={getdata2} achivedit={achivedit} achivdelet={achivdelet}/>} />
        </Routes>

      </BrowserRouter>
    

    </div>


  )
}

export default Main;