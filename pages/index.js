import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export default function Home() {
  return (
    <>
    <Container fluid style={{backgroundColor:"#FFD3B5",paddingBottom:"150px"}}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  className="fixed-top">
        <Container>
        <Navbar.Brand href="#home">Versus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto " style={{paddingLeft:"150px"}}>
                <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mobile phones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Audio and video</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Computer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Printer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Travel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Transportation</NavDropdown.Item>
                </NavDropdown>
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
      <Container className='fluid' style={{textAlign:'center' ,paddingTop:"200px"}}>
          <h1 style={{fontWeight:"700",fontSize:"3em"}} >Compare Everything</h1>
          <p style={{fontWeight:"400",fontSize:"1.5em"}}className='pt-4 pb-4'>Smartphones, Cities, Graphics Cards, Universities, and much more</p>
      </Container>

    
      
     <Container className="pb-5" style={{alignContent:"center",paddingLeft:"30%"}}>
      <form method="post" >
        <div className="input-group">
          <input type="text" className="col-xs-4" id="input" placeholder="Type here to compare" aria-label="Type here to compare up to 7 items"  />
          <div className="input-group-append " >
          <button className="btn btn-dark btn-lg" style={{width:"250px"}}type="submit">Compare</button>
          </div>
         
        </div>
      </form>
    </Container> 
     
    </Container>
      <Container  className="pt-3">
        <Row>
          <Col >
          <Card style={{backgroundColor:"#847af0"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>NEW</Card.Title>
              <Card.Title style={{textAlign:"center"}}>Montblanc Summit 3</Card.Title>
                <Card.Text className="pt-3">In the words of Montblanc, the Summit 3 is a smart piece of luxury for your wrist. It's the first non-Samsung watch to run Google's new Wear OS 3 platform and it comes with the new Snapdragon Wear processor.  
                </Card.Text>
                <a href="#">See Details</a>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{backgroundColor:"#d4bcc0"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>NEW</Card.Title>
              <Card.Title style={{textAlign:"center"}}>Montblanc Summit 3</Card.Title>
                <Card.Text className="pt-3">In the words of Montblanc, the Summit 3 is a smart piece of luxury for your wrist. It's the first non-Samsung watch to run Google's new Wear OS 3 platform and it comes with the new Snapdragon Wear processor.  
                </Card.Text>
                <a href="#">See Details</a>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{backgroundColor:"#ed9dcc", backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg")'}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>NEW</Card.Title>
              <Card.Title style={{textAlign:"center"}}>Montblanc Summit 3</Card.Title>
                <Card.Text className="pt-3">In the words of Montblanc, the Summit 3 is a smart piece of luxury for your wrist. It's the first non-Samsung watch to run Google's new Wear OS 3 platform and it comes with the new Snapdragon Wear processor.  
                </Card.Text>
                <a href="#">See Details</a>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{backgroundColor:"#fc889c"}}>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>NEW</Card.Title>
              <Card.Title style={{textAlign:"center"}}>Montblanc Summit 3</Card.Title>
                <Card.Text className="pt-3">In the words of Montblanc, the Summit 3 is a smart piece of luxury for your wrist. It's the first non-Samsung watch to run Google's new Wear OS 3 platform and it comes with the new Snapdragon Wear processor.  
                </Card.Text>
                <a href="#">See Details</a>
            </Card.Body>
          </Card>
          </Col>
        </Row>

      </Container>

      <Container  className="pt-5" style={{paddingBottom:"50px"}} >
        <p style={{fontSize:"12px",fontWeight:"700",color:"#616161"}}>TRENDING CATEGORY</p>
        <h1 style={{fontSize: "1.5em",fontWeight: "bold"}}>SmartPhones</h1>
        <Row >
          <Col>
          <Row style={{backgroundColor:"#adcbe3"}}>
          <img src = "" alt = "img" height="100px"width="100px"/>
            <p style={{textAlign:"center"}}>SMARTPHONE OF THE WEEK</p>
            <p style={{textAlign:"center"}}>APPLE IPHONE 13 PRO MAX</p>
          </Row>
          
          <Row style={{display:"flex",gap:"20px"}}>
        
            <Col style={{backgroundColor:"#DCEDC2"}}>
            <img src = "" alt = "img" height="100px"width="100px"/>
              <p style={{textAlign:"center"}}>SMARTPHONE OF THE WEEK</p>
              <p style={{textAlign:"center"}}>APPLE IPHONE 13 PRO MAX</p>
            </Col>
           
            <Col style={{backgroundColor:"#A8E6CE"}}>
            <img src = "" alt = "img" height="100px"width="100px"/>
            <p style={{textAlign:"center"}}>SMARTPHONE OF THE WEEK</p>
            <p style={{textAlign:"center"}}>APPLE IPHONE 13 PRO MAX</p>
            </Col>
          </Row>
  
      </Col>

          <Col style={{backgroundColor:"#FFAAA6"}}>
          <img src = "" alt = "img" height="100px"width="100px"/>
            <p style={{textAlign:"center"}}>SMARTPHONE OF THE WEEK</p>
            <p style={{textAlign:"center"}}>APPLE IPHONE 13 PRO MAX</p>
          
          </Col>

        </Row>
      </Container>

      <Container  fluid className='pt-5' style={{backgroundColor:"#f9f4f4"}} >
        <Row>
          <Col>
          <Table striped hover style={{borderCollapse:"collapse"}}>
            <thead>
              <tr>
                <th colspan="3" style={{fontSize:"14px"}}>POPULAR</th>
              </tr>
            </thead>
            <tbody style={{borderCollapse:"collapse"}}>
              <tr>
                <td>1</td>
                <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
                <td><a href=""style={{textDecoration:"none",color: "black"}}>Apple iPhone 13 Pro Max</a></td>
           
            </tr>
            <tr>
              <td>2</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung Galaxy S22 Ultra</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Poco F4 GT</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Xiaomi 11t pro</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung galaxy</a></td>
            </tr>
            </tbody>
          </Table>
          </Col>

          <Col>
          <Table striped  hover style={{borderCollapse:"collapse"}}>
            <thead>
              <tr>
                <th colspan="3" style={{fontSize:"14px"}}>TOP RATED</th>
              </tr>
            </thead>
            <tbody style={{borderCollapse:"collapse"}}>
              <tr>
                <td>1</td>
                <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
                <td><a href=""style={{textDecoration:"none",color: "black"}}>Apple iPhone 13 Pro Max</a></td>
           
            </tr>
            <tr>
              <td>2</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung Galaxy S22 Ultra</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Poco F4 GT</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Xiaomi 11t pro</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung galaxy</a></td>
            </tr>
            </tbody>
          </Table>
          </Col>
          <Col>
          <Table striped  hover style={{borderCollapse:"collapse"}}>
            <thead>
              <tr>
                <th colspan="3" style={{fontSize:"14px"}}>NEWEST</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>1</td>
                <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
                <td><a href=""style={{textDecoration:"none",color: "black"}}>Apple iPhone 13 Pro Max</a></td>
           
            </tr>
            <tr>
              <td>2</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung Galaxy S22 Ultra</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Poco F4 GT</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Xiaomi 11t pro</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src = "/images/1.png" alt = "img" height="50px"width="40px"/></td>
              <td><a href=""style={{textDecoration:"none",color: "black"}}>Samsung galaxy</a></td>
            </tr>
            </tbody>
          </Table>
          </Col>
        </Row>

      </Container>
      <Container className="pt-5 pb-5">
        <h3 style={{color: "#616161",fontWeight:"bold"}}>Which are the most popular comparisons?</h3>
        
        <Row className="pt-5">
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
          <Col><a href = "#" class = "thumbnail">
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            <img src = "/images/2.png" alt = "img" height="100px"width="100px"/>
            </a></Col>
        </Row>
         
      </Container>
     
      
    
    </>
  )
}
