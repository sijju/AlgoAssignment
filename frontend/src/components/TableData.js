import React,{useState,useEffect} from 'react'
import {Table,Modal, Input, Radio} from 'antd'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import axios from 'axios'


const TableData = () => {
    const [tasks,setTasks] = useState([])
    const [loading,setLoading] = useState(true)
    const [id,setId] = useState([])
    const [Open,setOpen] = useState(false)
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
   
    const [done,setDone] = useState('')
    const [text,setText]= useState('')

    
    useEffect(()=>{
        getData()
        
    },[])
    
    const getData = async() => {
        let response = await fetch(`/api/tasks/`)
        let data = await response.json()
        setTasks(data)
        setLoading(false)       
        
    }
    
    
    const handleEdit = async(record) =>{
        
        setOpen(true)
        setName(record.Title)
        setDescription(record.Description)
        
        setDone(record.Status)
        setId(record.id)
        

    }
    
    const handleDelete = ()=>{
           
         Modal.confirm({
            title: 'Do you want to delete this task?',
            onOk:async() => {
                await axios.delete(`/api/task/${id}`)
                getData()
            }

         }) 
          
    }
    
    

    const columns = [
        {   
            
            title: 'CreatedOn',
            dataIndex : 'CreatedAt',
            width:5,
            sorter: (task1,task2) =>{
                return task1.id > task2.id 
            }

           
        },
        {   
            
            title:'Name',
            dataIndex: 'Title',
            width:50,
            filteredValue : [text],
            onFilter: (value,record) =>{
                return String(record.Title)
                .toLowerCase()
                .includes(value.toLowerCase())
                
            }
            
        },
        {
            
            title:'Description',
            dataIndex:'Description',
            width:50,
        },
        {   
            
            title:"Status",
            dataIndex:'Status',
            width:50,
            
        },{
            
            title: "Actions",
            width:10,
            
            render : (record) =>{
                return (
                    <>
                     <EditOutlined  onClick={()=>handleEdit(record)} style={{fontSize:20,paddingRight:'5px'}}/>
                     <DeleteOutlined onClick={handleDelete} onMouseOver={()=>setId(record.id)} style={{color:"red",fontSize:20}}/>
                    </>
                )
            }
        }
    ]
   
    const updateTask = async()=>{
        let item = {
            Title: name,
            Description: description,
            Status: done,
            }
        setOpen(false)
        await axios.put(`/api/task/${id}/`,item)
        getData()
        
            
    }

    

    
    
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>  
       <Input.Search enterButton onSearch={(value)=> {
        setText(value)
       }} style={{width:'25%',marginBottom:'10px'}}/>
      </div> 
       {loading 
       ? "Loading ..." 
       : <Table  columns={columns} dataSource ={tasks} 
       pagination={{pageSize:10}} 
        />
       }
       <Modal
        title="Edit Task"
        open={Open} okText="Save"
        onCancel={()=>{
            setOpen(false)
        }}
        onOk ={updateTask}
        >
            <Input value={name} onChange={(e)=>setName(e.target.value)} style={{marginBottom:'10px'}}/>
            <Input value={description} onChange={(e)=>setDescription(e.target.value)} style={{marginBottom:'10px'}}/>
           
            <Radio.Group onChange={(e)=>setDone(e.target.value)} value={done} optionType='button'>
                <Radio value={'OPEN'}>OPEN</Radio>
                <Radio value={'WORKING'}>WORKING</Radio>
                <Radio value={'OVERDUE'}>OVERDUE</Radio>
                <Radio value={'COMPLETED'}>COMPLETED</Radio>
            </Radio.Group>
            
        </Modal>

    </div>
  )


}
export default TableData