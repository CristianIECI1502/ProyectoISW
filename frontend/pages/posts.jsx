import {useEffect,useState} from 'react'
import axios from 'axios'
import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Spacer, useAccordionStyles } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getPosts } from '../data/post'
import { DeleteIcon, EditIcon, WarningTwoIcon } from '@chakra-ui/icons';

const Posts = () => {

    const [post, setPost] = useState([{
        id:'',
        description:'',
        createdAt:'',
        
    }]);


    const router=useRouter()

    const contenido = () =>{
      return post.map(posts=>{
        return(
          console.log("hola",posts),

        <Box key={posts._id} maxWidth='lg' borderWidth='2px' overflow={'hidden'}>
          <Box>
            {posts.description}
            <Box>
              {posts.createdAt}
              <ButtonGroup>
                <Spacer width={'140px'}/>
              <IconButton aria-label='Editar'icon={<EditIcon/>} colorScheme='linkedin' onClick={()=> router.push('./edpost')}/> 
              <IconButton aria-label='Eliminar' icon={<DeleteIcon/>} colorScheme='red' onClick={()=> router.push('./depost')}/>
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
      {contenido()}
      <Button colorScheme='linkedin' onClick={()=> router.push('./Postear')} >Nueva Publicaion</Button>
    </Container>
    </>
  )
}

export default Posts