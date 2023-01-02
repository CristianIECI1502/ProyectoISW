import {useState, React, useRef} from 'react'
import { useRouter } from 'next/router'
import {getIdPost,updatePost} from '../../data/post'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, ButtonGroup, Container, FormControl, FormLabel, Image, Textarea, useDisclosure } from '@chakra-ui/react'

export const getServerSideProps = async (context)=>{
  const response=await getIdPost(context.query.edpost)
  return {
    props : {
      data: response.data
    }
  }
}

const Edidar = ({data}) => {
  const [post,setPost]=useState(data)
  const router=useRouter()
  const {edpost} = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef= useRef()

  const handleChange = (e) =>{
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
  }
  const submitpost = (e) => {
    e.preventDefault()
    updatePost(edpost,post).then(res=>{
      console.log("resdasd", res.data.description)
      router.push('../posts')
    })
  }
  return (
    <>
    <html>
      <body>
        <Container>
     <Image src='https://www.dzoom.org.es/wp-content/uploads/2020/04/programas-editar-videos-con-fotos-portada-1024x682.jpg' alt=''width={'lg'}/>
          <FormControl id='description'>
          <FormLabel>Publicacion a editar</FormLabel>
          <Textarea size={'lg'} name='description' onChange={handleChange} value={post.description}/>
          <ButtonGroup>
          <Button colorScheme={'red'} onClick={()=>router.push('../posts')}>Cancelar</Button>
          <Button colorScheme={'linkedin'} onClick={onOpen}>Aceptar</Button>
          </ButtonGroup>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize={'lg'} fontWeight='bold'> Editar post</AlertDialogHeader>
                <AlertDialogBody>Esta seguro? uwu</AlertDialogBody>
                <AlertDialogFooter>
                  <ButtonGroup>
                  <Button ref={cancelRef} onClick={onClose} colorScheme='red'>Cancelar</Button>
                  <Button colorScheme={'messenger'} onClick={submitpost}>Editar</Button>
                  </ButtonGroup>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          </FormControl>
        </Container>
      </body>
    </html>
    </>
  )
}

export default Edidar