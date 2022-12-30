import {React,} from 'react'
import { Button, Stack,Textarea,Container, FormControl, FormLabel,  } from '@chakra-ui/react'

import { useRouter } from 'next/router'

const InputStack = () => {


  return (
    
    <>
    
    <Button onClick={()=> router.push('./posts')}>ver Posts</Button>
    <Container>
      <Stack spacing={3}>
        <FormControl id="description">
          <FormLabel>Publicacion</FormLabel>
          <Textarea size={'lg'} placeholder='Escriba su publicación' name="description" onChange={handleChange}/>
        </FormControl>
          <>
          </>
      </Stack>
    </Container>
    </>
  )
}

export default InputStack