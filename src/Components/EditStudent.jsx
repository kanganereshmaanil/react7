import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddStudent.css'
import { editData } from './slice';


const EditStudent = () => {

 
  const navigate = useNavigate();
  const location = useLocation();
  const index = (location.state.data);
  const array = useSelector((state)=>state.dataKey)
const dispatch = useDispatch()
    const newObj = {
      name : array[index].name,
      age : array[index].age,
      course : array[index].course,
      batch : array[index].batch
    }
  const edichange = (e) => {
newObj[e.target.name] = e.target.value
  }
 
 const edited = (e) => {
  e.preventDefault();
  dispatch(editData({newObj,index}))

  navigate('/student')
 }
  
  const goback = () => {
    navigate('/student')
  }
      
  return (
    <>
    <div className='studentaddclass'>
<form  >
          <div id='formDiv'>
            <input type="text" onChange={edichange} name="name" placeholder={array[index].name}></input>
            <br />
            <br />
            <input type="text" onChange={edichange} name="age" placeholder={array[index].age} ></input>
            <br />
            <br />
            <input type="text" onChange={edichange} name="course" placeholder={array[index].course} ></input>
            <br />
            <br />
            <input type="text" onChange={edichange} name="batch" placeholder={array[index].batch} ></input>
            </div>
            <br />
            <br />
            <button onClick={goback} className='button-cancel' >Cancel</button>
            <button onClick={edited} className='button-submit' >Update</button>
          </form>
          </div>
    </>
  )
}

export default EditStudent
