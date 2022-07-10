import React from 'react'
import Card from 'react-bootstrap/Card';
function Contact(props) {
  
  return (
    <>
      <Card border="success" style={{ width: '18rem' }}>
       <Card.Header className='bg-success' style={{color:"white"}}>{props.contact.name}</Card.Header>
          <Card.Body>
            
            <Card.Text >
            {props.contact.email}
            </Card.Text>
            <Card.Text>
            {props.contact.phone}
            </Card.Text>
          </Card.Body>
          </Card>
     
    </>
  )
}

export default Contact