import React, { useState } from 'react'
import {
    Button,
    Form,
    Input,
    Layout,
    Radio
  } from 'antd';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { Content } from 'antd/es/layout/layout';


const Add = () => {
    
  const [name,setName] = useState('')
  const [description,setDescription] = useState(null)
  const [complete,setComplete] = useState('OPEN')
  
  
  
  const navigate = useNavigate()

  const handleSubmit = async() =>{
   
   const data = {
     Title: name,
     Description : description,
     Status : complete,
     
   }
     await axios.post(`/api/tasks/`,data)
     navigate('/')
    }
  return (
    
   <Layout style={{width:'100%',height:'100vh',display:'flex'}}>
   <Nav def={'2'}/>
   <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,display:'flex',alignItems:'center',flexDirection:'column' }}>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    
    autoComplete="off"
  >
    <Form.Item
      label="Title"
      name="Title"
      value = {name}
      rules={[{ required: true, message: 'Please input your Todo Activity' }]}
      onChange={((e) => setName(e.target.value))}
    >
      <Input required/>
    </Form.Item>

    <Form.Item
      label="Description"
      name="Description"
      initialValue={''}
      rules={[{ required: true, message: 'Please input your description!' }]}
      onChange={((e) => setDescription(e.target.value))}
    >
      <Input.TextArea required />
    </Form.Item>
    <Form.Item label="Status"  >
    <Radio.Group onChange={(e)=>setComplete(e.target.value)} value={complete} optionType='button'>
                <Radio value={'OPEN'}>OPEN</Radio>
                <Radio value={'WORKING'}>WORKING</Radio>
                <Radio value={'OVERDUE'} disabled>OVERDUE</Radio>
                <Radio value={'COMPLETED'}>COMPLETED</Radio>
            </Radio.Group>
    </Form.Item>



    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
     <Button onClick={handleSubmit} style={{color:'white',background:'green'}}>Add a Todo</Button>
    </Form.Item>
    </Form>

    </Content>
    </Layout>

  )
}

export default Add