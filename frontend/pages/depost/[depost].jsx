import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, ButtonGroup, Container, FormControl, FormLabel, Textarea, useDisclosure, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { React, useRef, useState } from 'react'
import { getIdPost, deletePost } from '../../data/post'

export const getServerSideProps = async (context) => {
  const response = await getIdPost(context.query.depost)
  return {
    props: {
      data: response.data
    }
  }
}
const Eliminar = ({ data }) => {
  const [post, setPost] = useState(data)
  const router = useRouter()
  const { depost } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelref = useRef()

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }
  const eliminar = (e) => {
    e.preventDefault()
    deletePost(depost, post).then(res => {
      console.log("eliminado", res.data.description)
      router.push('../posts')
    })
  }
  console.log("Esta", post)
  console.log(depost)
  return (
    <body>
      <Container>
        <Image src='https://demandasvecinalesvillajoyosa.files.wordpress.com/2018/03/img_9238.jpg' alt='' width={'lg'} />
        <FormControl id='description'>
          <FormLabel>Publicación a Eliminar</FormLabel>
          <Textarea size={'lg'} name='description' onChange={handleChange} value={post.description} isReadOnly />
          <ButtonGroup>
            <Button colorScheme={'red'} onClick={() => router.push('../posts')}>Cancelar</Button>
            <Button colorScheme={'linkedin'} onClick={onOpen}>Aceptar</Button>
          </ButtonGroup>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelref} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize={'lg'} fontWeight='bold'>Eliminar post</AlertDialogHeader>
                <AlertDialogBody>Esta seguro (no se puede deshacer)?</AlertDialogBody>
                <AlertDialogFooter>
                  <ButtonGroup>
                    <Button ref={cancelref} onClick={onClose} colorScheme='red'>Cancelar</Button>
                    <Button colorScheme={'blue'} onClick={eliminar}>Eliminar</Button>
                  </ButtonGroup>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </FormControl>
      </Container>
    </body>
  )
}

export default Eliminar