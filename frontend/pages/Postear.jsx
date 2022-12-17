import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import InputStack from '../components/InputStackPost'

const nombre = () => {
  return (
    <Container>
      <Heading as="h2" size="2xl" textalign="center">Aviso</Heading>
      <InputStack/>
    </Container>
  )
}

export default nombre