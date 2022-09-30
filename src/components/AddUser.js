import React , {useState} from 'react';
import {Form,Input,Button} from 'antd';
import '../App.css';
import Employees from './Employee';
import {v4 as uuid} from 'uuid';
import {NavLink,useNavigate} from 'react-router-dom';


const AddUser = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name, b = age;

        Employees.push({Id:uniqueId, Name:a,Age:b});

        history("/");

    }

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
                <Input placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="Age">
                <Input placeholder='Enter Age' required onChange={(e) => setAge(e.target.value)}></Input>
            </Form.Item>

            <Form.Item>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Form.Item>

        </Form>
    </div>
  )
}

export default AddUser