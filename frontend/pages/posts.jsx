import {useEffect,useState} from 'react'
import axios from 'axios'
import { Box, Button, ButtonGroup, Container, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getPosts } from '../data/post'
import { DeleteIcon, EditIcon, } from '@chakra-ui/icons';

const Posts = () => {

    const [post, setPost] = useState([{
        id:'',
        description:'',
        createdAt:'',
        name:''
    }]);

    const router=useRouter()

    const contenido = () =>{
      return post.map(posts=>{
        return(
          console.log("info:",posts),
        <Box key={posts._id} maxWidth='lg' borderWidth='2px' overflow={'hidden'}>
          <Box>
          {posts.name}
            {posts.description}
            <Box>
              {posts.createdAt}{Date}
              <ButtonGroup>
                <Spacer width={'140px'}/>
              <IconButton aria-label='Editar'icon={<EditIcon/>} colorScheme='linkedin' onClick={()=> router.push(`./post/${posts._id}`)}/> 
              <IconButton aria-label='Eliminar' icon={<DeleteIcon/>} colorScheme='red' onClick={()=> router.push(`./depost/${posts._id}`)}/>
              </ButtonGroup>
              </Box>
          </Box>
        </Box>
        )
      })
    }
    useEffect(() => {
        getPosts().then(res =>{
          setPost(res.data)
        })
    }, []);


  return (
    <>
    <Container>
      <Heading as='h1'>Avisos</Heading>
      <Box>
      {contenido()}
      </Box>
      <Button colorScheme='linkedin' onClick={()=> router.push('./Postear')} >Nueva Publicación</Button>
    </Container>
    </>
  )
}

export default Posts