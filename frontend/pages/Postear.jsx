import { Container, Stack, FormControl, FormLabel, Textarea, Button, useToken, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { createPost } from '../data/post'
//import user from '../../backend/models/user'

const Nombre = () => {
  const router = useRouter()
  const [post, setPost] = useState({
    description: "",
    name: "",
    user: {rut:''}
  })

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }
  const submitpost = (e) => {
    e.preventDefault()
    const respuesta = createPost(post)
    router.push('./posts')
    console.log(respuesta)
  }

  return (

    <>

      <Button onClick={() => router.push('./posts')}>ver Posts</Button>
      <Container>
        <Stack spacing={3}>
          <FormControl id="description">
            <FormLabel>Publicacion</FormLabel>
            <Input placeholder='usuario' name='user' onChange={handleChange}/>
            <Textarea size={'lg'} placeholder='Escriba su publicación' name="description" onChange={handleChange} />
            <Button variant='outline' onClick={submitpost} colorScheme={"linkedin"}>Subir</Button>
            <Button variant='outline' onClick={() => router.push('./posts')} colorScheme={"red"} >Cancelar</Button>
          </FormControl>
          console.log(submitpost)
          <>
          </>
        </Stack>
      </Container>
    </>
  )
}

export default Nombre