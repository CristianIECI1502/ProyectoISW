import { React, useState } from 'react'
import { getReport, updateReport } from '../../../data/report'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getReport(context.query.rep)
    return {
        props: {
            data: response.data
        }
    }
}


const editar = ({ data }) => {
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
                title: 'Reporte Actualizado',
                showConfirmButton: true,
                text: 'El reporte se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Hubo un error al actualizar el producto'
            }
            )
        }
        /*const respuesta = createReport(report)
        router.push('./report')
        console.log(respuesta)*/
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

export default editar