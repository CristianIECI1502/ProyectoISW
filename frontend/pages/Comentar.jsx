import {
    Container,
    Stack,
    FormControl,
    FormLabel,
    Textarea,
    Button,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { createComent } from "../data/coment";

const Comentar = () => {
    const router = useRouter();
    const [comentar, setComentar] = useState({
        comentario: "",
        name: "",
        user: {_id:''}
    });
    const handleChange = (e) => {
        setComentar({
            ...comentar,
            [e.target.name]: e.target.value,
        });
    };
    const Comentar = (e) => {
        e.preventDefault();
        const respuesta = createComent(comentar);
        router.push("./posts");
        console.log(respuesta);
    };

    return (
        <>
            <Container>
                <Stack spacing={3}>
                    <FormControl id="description">
                        <FormLabel>Comentario</FormLabel>
                        <Input placeholder='usuario' name='user' onChange={handleChange}/>
                        <Textarea
                            size={"lg"}
                            placeholder="Escriba su Comentario"
                            name="comentario"
                            onChange={handleChange}
                        />
                        <Button
                            variant="outline"
                            onClick={Comentar}
                            colorScheme={"linkedin"}
                        >
                            Subir
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push("./posts")}
                            colorScheme={"red"}
                        >
                            Cancelar
                        </Button>
                    </FormControl>
                    console.log(submitpost)
                    <></>
                </Stack>
            </Container>
        </>
    );
};

export default Comentar;
