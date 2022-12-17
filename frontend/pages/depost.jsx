import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {React} from 'react'
import { getPosts } from '../data/post'

const depost = () => {
    const router = useRouter()
    const eliminar = ()=>{
        router.push('./posts')
    }
  return (
    <>
    <Container>
    <Box> <Heading>Eliminar post</Heading>
        Esta seguro de elimiar este post?
        <Box><Button colorScheme={'red'} onClick={eliminar} >Eliminar</Button>
        <Button colorScheme={'linkedin'} onClick={()=>router.push('./posts')} >volver</Button> </Box>
    </Box>
    </Container>
    </>
  )
}

export default depost