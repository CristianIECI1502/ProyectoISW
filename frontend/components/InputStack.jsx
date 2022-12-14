import React from 'react'
import { Button, Stack, Input } from '@chakra-ui/react'

const InputStack = () => {
  return (
    <Stack spacing={3}>
        <Input placeholder='Primer Nombre'/>
        <Input placeholder='Apellido'/>
        <Button colorScheme={"linkedin"} size="sm">Subir</Button>
    </Stack>
  )
}

export default InputStack