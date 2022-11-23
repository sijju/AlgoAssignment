import 'antd/dist/reset.css';
import {Button,Layout} from 'antd'
import TableData from './components/TableData';

import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';


const {Content} = Layout;


function App(){
  return (
    <Layout style={{width:'100%',height:'100vh'}}>
       <Nav def={'1'}/>
       <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,display:'flex',alignItems:'center',flexDirection:'column' }}>
        <Link to='/add'>
          <Button>Add TODO Item</Button>
        </Link>
         
       
           
          
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380,width:'100%' }}>
           <TableData />
        </div>
    </Content>

    </Layout>
  )
}

export default App;
