import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Input, Space } from 'antd';
import logo from "../Image/Logo.png"
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const Navbar = () => {
    const menuStyle = {
        backgroundColor: '#FBD9C0',
        color: '#000000',
        fontSize: '16px',
        padding:'20px',

      };

    const onSearch = (value) => {
        console.log(value); // Tambahkan logika pencarian sesuai kebutuhan
      };

  return (
    <Menu mode="horizontal" style={menuStyle}>
      <Space><img src={logo} width={80} ></img>
      </Space>  
      <Menu.Item key="home">
      <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="shop" >
        Produk
      </Menu.Item>
      <Menu.Item key="profile" >
        Kategori
      </Menu.Item>
      <Menu.Item key="tentang" >
        Tentang ASPOO
      </Menu.Item>
      <Menu.Item style={{ float: 'right',  paddingLeft: '300px' }}>
        <Search style={{ padding:'10px'}} placeholder="Cari produk" onSearch={onSearch} enterButton={<SearchOutlined />} />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

