import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import './Student.css'

const Student = () => {
    const navigate = useNavigate();
    const array = useSelector((state)=>state.dataKey)
    const addstudent = () => {
        navigate('/addstudent')
    }

  return (
    <div>
        <div id='tableHead' >
        <h2>Students Details</h2>
        <button className='btnadd' onClick={addstudent} >Add New Student</button>
        </div>
 <table border='1px'>
     <thead>
         <tr>
             <td >Name</td>
             <td>Age</td>
             <td>Course</td>
             <td>Batch</td>
             <td>Change</td>
         </tr>
     </thead> 
     <tbody>
         {
        
        array.map((i,index)=>{
            return(
                <tr key={index}>
                    
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.course}</td>
                <td>{i.batch}</td>
                <td>
                    <Link to='/editstudent' state={{data:index}}>Edit</Link>
                </td>
            </tr>

            )
        })            
        }
     </tbody>
 </table>
    </div>
  )
}

export default Student