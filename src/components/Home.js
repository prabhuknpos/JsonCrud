import React, { Fragment } from 'react';
import "../App.css";
import { Button,Table } from 'antd';
import Employees from './Employee';
import { NavLink , useNavigate } from 'react-router-dom'

const Home = () => {

  let history = useNavigate();

  const handleEdit = (id,name,age) => {
    localStorage.setItem('Name',name);
    localStorage.setItem('Age',age);
    localStorage.setItem("Id",id);
  }

  const handleDelete = (id) => {
    let index = Employees.map(function(e){
      return e.Id
    }).indexOf(id);
    Employees.splice(index,1);

    history('/');

  }
  //Styles 

  const styles = {
    table:{
      width:"100%",
      border:"1px solid black",
    },
    thead:{
    
      border:"1px solid black",
    }
  }

  return (
    <Fragment>

      <div style={{margin:"10rem"}}>
        <h2 style={{textAlign:"center"}}>Json Crud Operations</h2>

    <table style={styles.table}>
      <thead style={styles.thead}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          Employees && Employees.length > 0 
          ?
          Employees.map((item) => {
            return (
              <tr style={styles.thead}>
                <td style={styles.thead}>{item.Name}</td>
                <td style={styles.thead}>{item.Age}</td>
                <td style={{textAlign:"center"}}>
                  <NavLink to={'/edit'}>
                  <Button onClick={() => handleEdit(item.Id,item.Name,item.Age)}>Edit</Button>
                  </NavLink>
                  <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                
                </td>
              </tr>
            )
          })
          :
          "No data Availabel"
        }
      </tbody>
    </table>
    

<br></br>
<br></br>

<NavLink to="/create">
  <Button>Create</Button>
</NavLink>

      </div>

    </Fragment>
  )
}

export default Home