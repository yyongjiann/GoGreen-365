import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


function DropPoo() {
    const [items, setItems] = useState([]);
    
    const EItems = ['East Item 1', 'East Item 2'];
    const WItems = ['West Item 1', 'West Item 2'];
    const NItems = ['North Item 1', 'North Item 2'];
    const CItems = ['Central Item 1', 'Central Item 2'];
    const SItems = ['South Item 1', 'South Item 2'];
    const AItems = ['All Item 1'];
    

  return (
    <div className='droppoo--div1' style={{width:'600px', border: 'thick double #32a1ce'}}>
        
    <div  className='droppoo--div2' style={{ display: 'flex', alignItems: 'center',}}>
    <Container>
        <Row>
            <Col>
    <p style={{ marginRight: '20px' }}>Find a place!</p>
    </Col>
    <Col md="auto">
    <DropdownButton id="dropdown-basic-button" title="REGION">
      <Dropdown.Item eventKey="1" onClick={() => {setItems(NItems)}}>NORTH</Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={() => {setItems(SItems)}}>SOUTH</Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={() => {setItems(EItems)}}>EAST</Dropdown.Item>
      <Dropdown.Item eventKey="4" onClick={() => {setItems(WItems)}}>WEST</Dropdown.Item>
      <Dropdown.Item eventKey="5" onClick={() => {setItems(CItems)}}>CENTRAL</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="6" onClick={() => {setItems(AItems)}}>ALL</Dropdown.Item>
    </DropdownButton>
    </Col>
    <Col md="auto">
    <p style={{ marginRight: '20px' }}>TYPE:</p>
    <Form>
    <Form.Check type='checkbox' id='Dining' label='Dining' />
    <Form.Check type='checkbox' id='Recycling' label='Recycling' />
    <Form.Check type='checkbox' id='Educational' label='Educational' />

    
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
    {items.length > 0 && (
        <ListGroup>
          {items.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default DropPoo;