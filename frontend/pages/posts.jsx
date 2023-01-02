import { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Container, Heading, IconButton, Link, Spacer, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getPosts } from '../data/post'
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';

const Posts = () => {

  const [post, setPost] = useState([{
    id: '',
    description: '',
    createdAt: '',
    name: ''
  }]);

<<<<<<< HEAD
    
    const router=useRouter()

    const contenido = () =>{
      return post.map(posts=>{
        return(
          console.log("info:",posts),
        <Box key={posts._id} maxWidth='lg' borderWidth='2px' overflow={'hidden'} color='white'>
=======
  const router = useRouter()

  const contenido = () => {
    return post.map(posts => {
      return (
        console.log("info:", posts),
        <Box key={posts._id} maxWidth='lg' borderWidth='2px' overflow={'hidden'}>
>>>>>>> fa3fdbfc1d1b1a99be3c24ea7dc7aa4574a6ea49
          <Box>
            {posts.name}
            {posts.description}
            <Box>
              {posts.createdAt}{Date}
              <ButtonGroup>
                <Spacer width={'140px'} />
                <IconButton aria-label='Editar' icon={<EditIcon />} colorScheme='linkedin' onClick={() => router.push(`./post/${posts._id}`)} />
                <IconButton aria-label='Eliminar' icon={<DeleteIcon />} colorScheme='red' onClick={() => router.push(`./depost/${posts._id}`)} />
                <IconButton aria-label='Reportar' icon={<WarningIcon />} colorScheme='red' onClick={() => router.push('./reportar')} />
              </ButtonGroup>
              <Box>
                <Link href={`./com/${posts._id}`} color='green' fontWeight={'bold'}>
                  Ver Comentarios
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )
    })
  }
  useEffect(() => {
    getPosts().then(res => {
      setPost(res.data)
    })
  }, []);


  return (
    <>
<<<<<<< HEAD
    <Container backgroundColor={'blueviolet'}>
      <Heading as='h1'>Avisos</Heading>
      <Box>
      {contenido()}
      </Box>
      <Button colorScheme='linkedin' onClick={()=> router.push('./Postear')} >Nueva Publicación</Button>
    </Container>
=======
      <Container backgroundColor={'LightGrey'} backgroundPosition='center'>
        <Heading size={"2xl"}textAling={"center"} my={10} as='h1'>Avisos</Heading>
        <Box>
          {contenido()}
        </Box>
        <HStack>
          <Button colorScheme='linkedin' w={"full"} my={5} onClick={() => router.push('./Postear')} >Nueva Publicación</Button>
        </HStack>
      </Container>
>>>>>>> fa3fdbfc1d1b1a99be3c24ea7dc7aa4574a6ea49
    </>
  )
}

export default Posts