import { Box, Button, Container, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { getPosts } from '../data/post'

const edpost = () => {
    const route =useRouter()
    const edit =()=>{
        route.push('./posts')
    }
  return (
    <>
    <Container>
        <Box>editar post</Box>
        <Textarea/>
        <Button colorScheme={'red'} onClick={()=>route.push('./posts')}>Cancelar</Button>
        <Button colorScheme={'linkedin'} onClick={edit}>editar</Button>
    </Container>
    
    </>
  )
}

export default edpost