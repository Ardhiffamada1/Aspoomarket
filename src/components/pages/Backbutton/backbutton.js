import React from "react";
import { Row, Col, Typography, Timeline, Image, Divider, Layout } from "antd";
import { Checkbox } from 'antd'
import rekomendasi5 from "../Image/rekomendasi 5.png";
import Wallet from "../Image/Wallet.png";
import Leftarrow from "../Image/Left Arrow.png";

const { Title, Paragraph } = Typography;
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const Backbutton = () => {
  return (
    <Layout>
        <div style={{ display: 'flex', marginRight: '50px',  alignItems: 'center',  backgroundColor :'#FBD9C0' }}>
        <img src={Leftarrow} alt='Leftarrow' style={{ height : '40px' }}></img>
                <p style={{ marginLeft: '20px' }}><strong>Checkout</strong></p>
        </div>
    </Layout>
  );
};

export default Backbutton;