import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Container, FormControl, FormLabel, IconButton, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import {getIdPost} from '../../data/post'
import {getComent} from '../../data/coment'
export const getServerSideProps= async(context)=>{
    const response = await getIdPost(context.query.com)
    return {
        props:{
            data:response.data
        }
    }
}
const Com = ({data}) => {
  const [coment, setComent] = useState([{
  id:'',
  comentario: '',
  createdAt:'',
  user:{_id:'',rut:''}
 }])
 
  const [verpost,setVerpost] = useState(data)
  const handleChange = (e) =>{
    setVerpost({
      ...verpost,
      [e.target.name]:e.target.value
    })
  }
  const router = useRouter()
  
  const contenido = () => {
    return coment.map(comentario => {
    return  (
      console.log("info:",comentario),
      <Box key={comentario._id} maxWidth='lg' borderWidth='2px' overflow={'hidden'}>
        <Box>
        <Box>
        {comentario.user.rut}

        </Box>
          {comentario.comentario}
          <Box>
            {comentario.createdAt}{Date}
            <ButtonGroup>
            <IconButton aria-label='Editar'icon={<EditIcon/>} colorScheme='linkedin' onClick={()=> router.push(`../edcom/${comentario._id}`)}/>
            <IconButton aria-label='Eliminar' icon={<DeleteIcon/>} colorScheme='red' onClick={()=> router.push(`../delcom/${comentario._id}`)}/>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
      
      )
    })
  }
  useEffect(() => {
    getComent().then(res =>{
      setComent(res.data)
    })
  }, []);
  
  //const {com} = router.query
  
  
  
  return (
    <>
  <Container>

          <FormControl id='description'>
          <FormLabel>
            Publicacion
          </FormLabel>
          <Textarea backgroundColor={'linkedin.100'} size={'lg'} name='description' onChange={handleChange} value= {verpost.description} isReadOnly/>
        </FormControl>
  <Box> {contenido()} </Box>
  <ButtonGroup>
  <Button colorScheme='linkedin' onClick={()=> router.push('../Comentar')} > Comentar </Button>
  <Button colorScheme='red' onClick={()=> router.push('../posts')} > Volver </Button>
  </ButtonGroup>
  </Container>
  </>
  )
  
}

export default Com