import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cities = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <img src="../images/dubai.png" alt="imgdubai" height="400px"></img>
        </Col>
        <Col>
        <h2>How does Dubai compare to Berlin City?</h2>
        <ul style={{listStyleType:"none"}}>
          <li>&#10004; 161.06$ cheaper rent for a one-bedroom apartment? 1 222.58$vs1 </li>
          <li>&#10004; 1.34million more inhabitants? 3.6 millionvs2.26 million</li>
          <li>&#10004;12.6$ billion higher GDP (PPP)?
            94.7$ billion vs82.1$ billion</li>
          <li>&#10004; Has a bike-sharing system?</li>
          <li>&#10004;Possibility of drinking alcohol in public places?</li>
          <li>&#10004;1 more big sports facilities (stadiums, arenas, etc.)?
          2vs1</li>
          <li>&#10004;1 8.4°C lower average minimum temperature?
          6.8°Cvs25.2°C</li>
          <li>&#10004;3 more landmarks from UNESCO World Heritage list 3vs0</li>
          </ul>   
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
export default Cities;
