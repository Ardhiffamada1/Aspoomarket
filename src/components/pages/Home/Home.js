import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Carousel, Card,Space, Input, Alert} from 'antd';
import logo from "../Image/Logo.png"
import '@fontsource/poppins';
import { SearchOutlined } from '@ant-design/icons';
import keranjang from "../Image/keranjang.png";
import iklan1 from "../Image/iklan1.png";

const { Search } = Input;

const { Header, Content, Footer } = Layout;

const Home = () => {
  const menuStyle = {
    backgroundColor: '#FBD9C0',
    color: '#000000',
    fontSize: '16px',
    paddingTop:'11px',
    fontFamily:'Poppins',
    fontWeight: 'Bold',
    paddingLeft:'10px',
  };

  const onSearch = (value) => {
    console.log(value); // Tambahkan logika pencarian sesuai kebutuhan
  };

  return (
    <Layout>
        <Menu style={menuStyle} mode="horizontal">
        <Space><img src={logo} style={{width:'70px', paddingTop:'4px'}} ></img></Space>
          <Menu.Item key="1">Beranda</Menu.Item>
          <Menu.Item key="2">Produk</Menu.Item>
          <Menu.Item key="3">Kategori</Menu.Item>
          <Menu.Item key="4">Tentang ASPOO</Menu.Item>
          <Menu.Item key="5" style={{ paddingLeft: '350px' }}>
          <Search style={{ padding:'10px'}} placeholder="Cari produk" onSearch={onSearch} enterButton={<SearchOutlined />} />
          </Menu.Item>
          <Menu.Item key="6"> <img src={keranjang} style={{width:'25px', paddingTop:'10px'}} ></img> </Menu.Item>
          <Menu.Item key="7" style={{color:'#757272'}}>Jadi Mitra</Menu.Item>
          <Menu.Item key="8" style={{color:'#757272'}}>Login</Menu.Item>
          <Menu.Item key="9" style={{color:'#757272'}}>|</Menu.Item>
          <Menu.Item key="10" style={{color:'#757272'}}>Daftar</Menu.Item>
        </Menu>
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Carousel>
          <div>
            <img src={iklan1} alt="Iklan 1" style={{ width: '800px', justifyContent:'center', marginLeft:'350px', marginTop:'50px', paddingBottom:'50px'}}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="path-to-image-2" alt="Iklan 2" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="path-to-image-3" alt="Iklan 3" />
          </div>
        </Carousel>
          <Card title="Produk Terpopuler" style={{ width: '100%' }}>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <h2>Produk 1</h2>
            </Card.Grid>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <h2>Produk 2</h2>
            </Card.Grid>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <h2>Produk 3</h2>
            </Card.Grid>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Marketplace ©2023 Created by You</Footer>
    </Layout>
  );
};

export default Home;
