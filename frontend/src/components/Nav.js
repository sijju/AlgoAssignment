import React from 'react'
import { Layout,Menu } from 'antd'
import { HomeOutlined,FormOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const {Sider} = Layout
const Nav = ({def}) => {
    const navigate = useNavigate()
    const getItem = (label,key,icon)=>{
      return{
        key,icon,label
      }
  
    }
  
    const items = [
      getItem('Home','1',<HomeOutlined/>,),
      getItem('Todo','2',<FormOutlined/>),
    ]
    
  return (
    <Sider style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <h2 style={{color:'whitesmoke',alignContent:'center'}}>TODO LIST</h2>
    <Menu theme="dark" mode="inline" items={items} defaultSelectedKeys={def} style={{width:'100%'}}
     onClick={({key}) =>{
         if(key === '1'){
            navigate('/')
          }
         if(key==='2'){
            navigate('/add')
          } 
     }}
    />

    </Sider>
    )
}


export default Nav