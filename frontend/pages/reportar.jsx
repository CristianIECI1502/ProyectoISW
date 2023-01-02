import { Container, Stack, FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { createReport } from '../data/report'
//import user from '../../backend/models/user'

const Reportar = () => {

    const [report, setReport] = useState({
        description: "",
        name: ""
    })
    const router = useRouter()

    const handleChange = (e) => {
        setReport({
            ...report,
            [e.target.name]: e.target.value
        })
    }
    const submitReport = (e) => {
        e.preventDefault()
        const respuesta = createReport(report)
        router.push('./report')
        console.log(respuesta)
    }

    return (

        <>

            <Button onClick={() => router.push('./posts')}>Volver a Posts</Button>
            <Container>
                <Stack spacing={3}>
                    <FormControl id="description">
                        <FormLabel>Publicación a reportar</FormLabel>

                        <Textarea size={'lg'} placeholder='Escriba su reporte' name="description" onChange={handleChange} />
                        <Button variant='outline' onClick={submitReport} colorScheme={"linkedin"}>Subir</Button>
                        <Button variant='outline' onClick={() => router.push('./posts')} colorScheme={"red"} >Cancelar</Button>
                    </FormControl>
                    <>
                    </>
                </Stack>
            </Container>
        </>
    )
}

export default Reportar