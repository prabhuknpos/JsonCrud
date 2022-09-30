import React , {useEffect, useState} from 'react';
import {Form,Input,Button} from 'antd';
import '../App.css';
import Employees from './Employee';
import {v4 as uuid} from 'uuid';
import {NavLink,useNavigate} from 'react-router-dom';


const Edit = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [id,setId] = useState('');

    let history = useNavigate();

    let index = Employees.map(function(e) {
        return e.Id
    }).indexOf(id);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];

        a.Name=name;
        a.Age = age;
      
        history("/");

    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
    },[])

  return (
    <div>
        <Form
        labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
        >
            <Form.Item label="Username">
                <Input placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="Age">
                <Input placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}></Input>
            </Form.Item>

            <Form.Item>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
            </Form.Item>

        </Form>
    </div>
  )
}

export default Edit