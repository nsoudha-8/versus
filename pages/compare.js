import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import City from '../components/City';
import Cities from '../components/Cities';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';



export default function Home() {
    
    return ( 
      <>
      <Container fluid style={{paddingBottom:"80px"}}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className="fixed-top">
          <Container>
          <Navbar.Brand href="#home">Versus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav  className="me-auto " style={{paddingLeft:"100px"}}>
                  <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Mobile phones</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Audio and video</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Computer</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Printer</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.5">Travel</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.6">Transportation</NavDropdown.Item>
                  </NavDropdown>
                  <form class="form-inline mx-auto">
                    <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search" />
                    
                    </form>
                  <Nav.Link href="#templates">SMART PHONES</Nav.Link>
                  <Nav.Link href="#integrations">GRAPHIC CARDS</Nav.Link>
                  <Nav.Link href="#customers">WIRELESS EARBUDS</Nav.Link>
                  <Nav.Link href="#pricing">CPUS</Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link href="#deets">EN</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
                  
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </Container>

    <Container style={{paddingBottom:"50px"}}>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/">
        City Comparison
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Berlin vs Dubai City</Breadcrumb.Item>
    </Breadcrumb>

    <Row>
        <Col style={{paddingLeft:"100px"}}>
        <p style={{fontWeight:"700",fontSize:"22px"}}>Berlin</p>
        <img src = "/images/berlin.png" alt = "img" height="320px"width="320px"/>
        </Col>
       
        <Col style={{paddingLeft:"100px"}}>
        <p style={{fontWeight:"700",fontSize:"22px"}}>Dubai City</p>
        <img src = "/images/dubai.png" alt = "img" height="320px"width="320px"/>
        </Col>
    </Row>
    </Container>

    <Container  fluid  style={{backgroundColor:"#f6f7fb"}}>
    <p style={{fontWeight:"700",fontSize:"12",textAlign:"center"}}>98 FACTS IN COMPARISON</p>
    <h1 style={{textAlign:"center",fontSize:"40px"}}>Berlin vs Dubai City</h1>

    <Tabs
      defaultActiveKey="berlin"
      id="uncontrolled-tab-example"
      className="mb-3" style={{alignContent:"center",paddingLeft:"500px"}}
    >
      <Tab eventKey="berlin" title="Berlin">
        <City />
      </Tab>
      <Tab eventKey="dubai" title="Dubai">
        <Cities />
      </Tab>    
    </Tabs>
    </Container>

    <Container className="pt-5 pb-5">
      <h3 >WHICH ARE THE MOST POPULAR COMPARISONS?</h3>
      <Row className="pt-5">
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/t1.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/t2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/t1.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/t2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/t1.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/t2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/t1.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/t2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
         
        </Row>
      </Container>
      <Container fluid style={{backgroundColor:"#f6f7fb"}}>
        <h2 style={{paddingTop:"50px",paddingLeft:"50px",paddingBottom:"30px"}}>User Reviews</h2>
        <Container style={{backgroundColor:"white",paddingTop:"50px",paddingLeft:"50px",paddingBottom:"30px"}}>
          <h3>Overall Rating</h3>
          <Row className="pt-2 pb-3">
            <Col>
            <div class="side">
            <div>Berlin</div>
            </div>
            <div className="middle" style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div className="bar-container" style={{width: "100%",backgroundColor: "#f1f1f1",textAlign: "center",color: "white"}}>
            <div className="bar-5" style={{width: "60%", height: "18px" ,backgroundColor: "#04AA6D"}}></div>
            </div>
            </div>
            <div className="side right">
            <div><Button variant="outline-primary">Write a review</Button></div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <div class="side">
            <div>Dubai</div>
            </div>
            <div className="middle" style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div className="bar-container" style={{width: "100%",backgroundColor: "#f1f1f1",textAlign: "center",color: "white"}}>
            <div className="bar-5" style={{width: "40%", height: "18px" ,backgroundColor: "#f44336"}}></div>
            </div>
            </div>
            <div className="side right">
            <div><Button variant="outline-primary">Write a review</Button></div>
            </div>
            </Col>
          </Row>
        </Container>

        <Container style={{backgroundColor:"#f5f5f5",paddingTop:"50px"}}>
          
        <h2 style={{paddingTop:"50px",paddingLeft:"50px",paddingBottom:"30px"}}>Features</h2>
          <Row className="pt-2 pb-3">
            <Col >
            <Card className="pb-5">
            <Card.Body>
              <Card.Title style={{fontWeight:"700",fontSize:"14px"}}>SAFETY</Card.Title>
              
                <Card.Text className="pt-3">  
                </Card.Text>
                <div  style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div  style={{width: "100%",color: "white"}}>
              <p style={{color:"black"}}>7.5/10</p>
            <div  style={{width: "90%", height: "10px" ,backgroundColor: "#04AA6D",borderRadius:"24px"}}></div><br/>
            <p style={{color:"black"}}>6.2/10</p>
            <div  style={{width: "50%", height: "10px" ,backgroundColor: "#f44336",borderRadius:"24px"}}></div>
            </div>
            </div>
                
            </Card.Body>
          </Card>
            
            </Col>
            <Col>
            <Card className="pb-5">
            <Card.Body>
              <Card.Title style={{fontWeight:"700",fontSize:"14px"}}>WALKABILITY</Card.Title>
              
                <Card.Text className="pt-3">  
                </Card.Text>
                <div  style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div  style={{width: "100%",color: "white"}}>
              <p style={{color:"black"}}>7.5/10</p>
            <div  style={{width: "90%", height: "10px" ,backgroundColor: "#04AA6D",borderRadius:"24px"}}></div><br/>
            <p style={{color:"black"}}>6.2/10</p>
            <div  style={{width: "50%", height: "10px" ,backgroundColor: "#f44336",borderRadius:"24px"}}></div>
            </div>
            </div>
                
            </Card.Body>
          </Card>
            </Col>
            <Col>
            <Card className="pb-5">
            <Card.Body>
              <Card.Title style={{fontWeight:"700",fontSize:"14px"}}>JOB OPPURTUNITIES</Card.Title>
              
                <Card.Text className="pt-3">  
                </Card.Text>
                <div  style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div  style={{width: "100%",color: "white"}}>
              <p style={{color:"black"}}>7.5/10</p>
            <div  style={{width: "90%", height: "10px" ,backgroundColor: "#04AA6D",borderRadius:"24px"}}></div><br/>
            <p style={{color:"black"}}>6.2/10</p>
            <div  style={{width: "50%", height: "10px" ,backgroundColor: "#f44336",borderRadius:"24px"}}></div>
            </div>
            </div>
                
            </Card.Body>
          </Card>
            </Col>        
            
          </Row>
          <Row>
          <Col >
            <Card className="pb-5">
            <Card.Body>
              <Card.Title style={{fontWeight:"700",fontSize:"14px"}}>PUBLIC TRANSPORT</Card.Title>
              
                <Card.Text className="pt-3">  
                </Card.Text>
                <div  style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div  style={{width: "100%",color: "white"}}>
              <p style={{color:"black"}}>7.5/10</p>
            <div  style={{width: "90%", height: "10px" ,backgroundColor: "#04AA6D",borderRadius:"24px"}}></div><br/>
            <p style={{color:"black"}}>6.2/10</p>
            <div  style={{width: "50%", height: "10px" ,backgroundColor: "#f44336",borderRadius:"24px"}}></div>
            </div>
            </div>
                
            </Card.Body>
          </Card>
            
            </Col>
            <Col>
            <Card className="pb-5">
            <Card.Body>
              <Card.Title style={{fontWeight:"700",fontSize:"14px"}}>FOOD AND DRINK</Card.Title>
              
                <Card.Text className="pt-3">  
                </Card.Text>
                <div  style={{marginTop:"10px",float: "left",width: "70%"}}>
            <div  style={{width: "100%",color: "white"}}>
              <p style={{color:"black"}}>7.5/10</p>
            <div  style={{width: "90%", height: "10px" ,backgroundColor: "#04AA6D",borderRadius:"24px"}}></div><br/>
            <p style={{color:"black"}}>6.2/10</p>
            <div  style={{width: "50%", height: "10px" ,backgroundColor: "#f44336",borderRadius:"24px"}}></div>
            </div>
            </div>
                
            </Card.Body>
          </Card>
            </Col>
            <Col></Col>

          </Row>


        </Container> 
      </Container>
      <Container fluid className="pt-5">
      <div className="text-center" >
        <Button variant="primary" size="lg">Share</Button>     
        </div>
      </Container>

</>
    )
}