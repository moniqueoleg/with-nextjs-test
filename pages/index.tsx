import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Typography,Popover,Button, Space } from 'antd';
import {
  UploadOutlined, StarFilled 
} from '@ant-design/icons';
import { json } from 'stream/consumers';
const { Title, Paragraph } = Typography;

const customStarStyle = {
  color: '#fdb400', // Customize the color of the star icon
  marginLeft: '5px',
};

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('./api/hello');
      const jsonData = await response.json();
      setData(jsonData);
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <section className="main">
       
   
        <Row className='header'>
          <Col xs={24} xl={14}>
            <Image
              src={`./assets/banner.png`}
              alt={'ALBERTO NUNEZ 4 DAYS UPPER LOWSER'}
              preview={false}
             />
          </Col>
          <Col xs={24} xl={24}>
            <Row>
              <Col xs={24} xl={18}>
                <Paragraph className="title-with-review">
                  <Title level={2}>Alberto Nuñez Upper Lower Program</Title>      
                  <Popover placement="right" content={'Link Copied'} trigger="click">
                    <Button><UploadOutlined style={{fontSize:25,color:'#9586f2'}}/></Button>
                  </Popover>        
                </Paragraph>
              </Col>
              
              <Col  xs={24} xl={6} className='reviews'> 
                  <StarFilled key="icon"/><span>4.35 (89 reviews)</span>
              </Col>
            </Row>
            <Row>
              <Paragraph className="fsize18">
                4-day a week upper lower split by bodybuilding coach Alberto Nuñez, with 4 program variations.          
              </Paragraph>
            </Row> 
          </Col>
        </Row>
        <Row>
          <Col className='prog-description' xs={24} xl={14}>
              <Typography>
                <Title level={3}>{data?data.program_description:''}</Title>
                  <Paragraph style={{padding: '3px'}}>                
                    {data?data.program_content1:''}        
                  </Paragraph>
                  <Paragraph style={{padding: '3px'}}>                
                    {data?data.program_content2:''}        
                  </Paragraph>
              </Typography>
              <Image
                src={`./assets/youtube.png`}
                alt={'ALBERTO NUNEZ 4 DAYS UPPER LOWSER'}
                preview={false}
              />
          </Col>
          <Col className='prog-overview' xs={24} xl={{span:9, offset:1}}>
      
              <Row className='div-border1'>
                  <Col xs={24} xl={24}>
                   <Title level={4}>{data?data.program_overview:''}</Title>
                  </Col>
                  <Col xs={12} xl={12}>Coach</Col>
                  <Col xs={12} xl={12} className="anchor-name"><a href="#">Alberto Nuñez</a> <Image src={`./assets/verified.png`} alt={'verified'} preview={false} /></Col>
                  <Col xs={12} xl={12}>Level</Col>
                  <Col xs={12} xl={12} className="fw-bold">Beginner, Novice, Intermediate</Col>
                  <Col xs={12} xl={12}>Equipment</Col>
                  <Col xs={12} xl={12} className="fw-bold">Full Gym</Col>
                  <Col xs={12} xl={12}>Time Per Workout</Col>
                  <Col xs={12} xl={12} className="fw-bold">60 minutes</Col>
                  <Col xs={12} xl={12}>Days Per Week</Col>
                  <Col xs={12} xl={12} className="fw-bold">4 days</Col>
                  <Col xs={12} xl={12}>Program Length</Col>
                  <Col xs={12} xl={12} className="fw-bold">15 weeks</Col>
              </Row>

              <Row className='app-download'>

                <Col offset={3} xs={18} xl={18}>                  
                  <Title level={5}>Start the Program<br/> on BoostScamp for free</Title>                                    
                </Col>
                
                <Col xs={24} xl={24}>
                  <Image
                        src={`./assets/phone.png`}
                        alt={'phone'}
                        preview={false}
                      />
                </Col>
                  <Col xs={12} xl={12}>
                    <Button>
                      <Image
                        src={`./assets/app_store.png`}
                        alt={'App Store'}
                        preview={false}
                      />
                    </Button>
                   
                  </Col>
                  <Col xs={12} xl={12}>
                    <Button>
                      <Image
                        src={`./assets/google_play.png`}
                        alt={'Google Play'}
                        preview={false}
                      />
                    </Button>
                  </Col>
              </Row>
          </Col>
        </Row>
      
      </section>

  );
}
