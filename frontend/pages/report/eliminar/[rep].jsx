import { React, useState } from 'react'
import { getReport, updateReport } from '../../../data/report'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { Button, Container,FormControl,FormLabel,Stack, Textarea } from '@chakra-ui/react'

export const getServerSideProps = async (context) => {
    const response = await getReport(context.query.rep)
    return {
        props: {
            data: response.data
        }
    }
}


const Eliminar = ({ data }) => {
    const [report, setReport] = useState(data)
    const router = useRouter()
    const { reportar } = router.query

    const handleChange = (e) => {
        setReport({
            ...report,
            [e.target.name]: e.target.value
        })
    }

    const submitReport = async (e) => {
        e.preventDefault()
        const response = await updateReport(reportar, report)
        if (response.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Reporte Eliminado',
                showConfirmButton: true,
                text: 'El reporte se eliminó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Hubo un error al eliminar el reporte'
            }
            )
        }
    }

return (

    
    <>

        <Container>
            <Stack spacing={3}>
                <FormControl id="description">
                    <FormLabel>Editar reporte: </FormLabel>

                    <Textarea size={'lg'} placeholder='Escriba su reporte' name="description" onChange={handleChange} />
                    <Button variant='outline' onClick={submitReport} colorScheme={"linkedin"}>Editar Reporte</Button>
                    <Button colorScheme={"red"} variant='outline' onClick={() => router.push('./reportes')}  >Cancelar</Button>
                </FormControl>
            </Stack>
        </Container>
    </>
)
}
export default Eliminar