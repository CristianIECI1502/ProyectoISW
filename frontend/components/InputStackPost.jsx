import {React,useState} from 'react'
import { Button, Stack, Input,Textarea,Container, FormControl, FormLabel,  } from '@chakra-ui/react'
import {createPost} from '../data/post'
import { useRouter } from 'next/router'

const InputStack = () => {

  const router=useRouter()
  const [post,setPost]=useState({
    description:"",
  })
  const handleChange = (e) =>{
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
  }
  const submitpost = (e) => {
    e.preventDefault()
    const respuesta=createPost(post)
    router.push('./posts')
  }

  return (
    
    <>
    
    <Button onClick={()=> router.push('./posts')}>ver Posts</Button>
    <Container>
      <Stack spacing={3}>
        <FormControl id="description">
          <FormLabel>Publicacion</FormLabel>
          <Textarea size={'lg'} placeholder='Escriba su publicación' name="description" onChange={handleChange}/>
          <Button variant='outline' onClick={submitpost} colorScheme={"linkedin"} size='lg'>Subir</Button>
        </FormControl>
          <>
          </>
      </Stack>
    </Container>
    </>
  )
}

export default InputStack