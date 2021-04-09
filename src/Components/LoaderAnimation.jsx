import React from 'react';
import {Container, Spinner} from 'react-bootstrap'

function LoaderAnimation() {
  return (
    <Container fluid className='justify-content-center align-items-center'>
      <Spinner animation='border' variant='primary' />
    </Container>
  );
}

export default LoaderAnimation;