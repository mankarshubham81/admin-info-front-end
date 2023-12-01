import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div className="mt-4" style={{display: 'flex', justifyContent: 'center'}}>
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Aidmin Section</Card.Header>
          <Card.Body>
            <Card.Title>Form Submission Page</Card.Title>
            <Card.Text>
            <Link to={'/signup'} className='btn btn-default bg-primary border w-100 rounded-3' > Create Account</Link>
            </Card.Text>
            <Card.Text>
            <Link to={'/logina'} className='btn btn-default border bg-warning w-100  rounded-3' > Login </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Home;