import React from 'react'
import Card from 'react-bootstrap/Card';

function Contact({contact:{name,phone,email,id},deleteContact}) {
  
  return (
    <>
      <Card border="success" style={{ width: '18rem' }}>
       <Card.Header className='bg-success' style={{color:"white"}}>{name}</Card.Header>
          <Card.Body>
            
            <Card.Text >
            {email}
            </Card.Text>
            <Card.Text>
            {phone}
            </Card.Text>
            <button type="button" onClick={()=>{deleteContact(id)}} class="btn btn-outline-success">Delete</button>
          </Card.Body>
          </Card>
     
    </>
  )
}

export default Contact