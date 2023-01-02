import {
    Container,
    Stack,
    FormControl,
    FormLabel,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { createComent } from "../data/coment";

const Comentar = () => {
    const router = useRouter();
    const [comentar, setComentar] = useState({
        description: "",
        name: "",
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

                        <Textarea
                            size={"lg"}
                            placeholder="Escriba su Comentario"
                            name="description"
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
