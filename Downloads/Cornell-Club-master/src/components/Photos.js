import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                {/* <Col sm={4} md={4} lg={4}></Col> */}
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/mayank.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Mayank Arora"
                    description="mayank1219263@jmit.ac.in"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  
                <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/vishu.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Sunaina"
                    description="sunaina email"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/anjali.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Anjali"
                    description="anjali email"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/ankit.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Ankit"
                    description="Best"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/mamta.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Mamta"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/shivani.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Shivani"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/divyasquare.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Divya"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/anushka.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Anushka"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/aditya.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Aditya"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/leesha.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Leesha"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/harshsquare.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Harsh"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/vanshika.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Vanshika"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/sonia.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Sonia"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/tarang.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Tarang"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/muskaan.jpeg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Muskaan"
                    description="Second"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}