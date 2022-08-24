import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { colors } from '../../utils/colors';
const { Header, Content, Footer, Sider } = Layout;
const HeaderLayout = () => {
  return (
    <Header style={{backgroundColor: colors.ashGrayBg, marginBottom: 10}}>
        <div className='d-flex justify-content-between container'>
            <div className='d-flex  pt-3'>
                <img src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px', borderRadius: '10px'}}/>
                <h4 className='text-success ml-3 mt-2'>Federal Polytechnic Ilaro</h4>
            </div>
            <div className='d-flex pt-3'>
                <h5 className='text-dark  mt-3'>Ibekwe Lilian</h5>
                <img className=' ml-2' src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid green'}}/>
            </div>
        </div>
   </Header>
  )
}

export {HeaderLayout}
