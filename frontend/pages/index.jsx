import { Container, FormControl, FormLabel, Heading, Stack,Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {useState} from 'react'
import {login} from '../data/user'

const Index = () => {

  const [rut, setRut] = useState('')
  const router= useRouter()

  const handleChange= (e) =>{
    setRut(e.target.value)
  }

  const longin = async(e) => {
    e.preventDefault()
    const result=await login(rut)
    try {
      if(result.status===200){
        localStorage.setItem('token',rut)
        router.push('./posts')
      }
    } catch (error) {
      
    }
  }
  return (
    <>
    <Container maxW={'container.xl'} centerContent backgroundColor={'linkedin.10'}>
      <Heading as={'h1'} size='2xl' textAlign={'center'} mt='10'>Benvenuto</Heading>
      <Stack my={5}>
        <FormControl>
          <FormLabel>Rut del usuario</FormLabel>
          <Input onChange={handleChange}/>
        </FormControl>
        <Button onClick={longin} colorScheme='linkedin'>Ingresa</Button>
      </Stack>
    </Container>
    </>
  )
}

export default Index