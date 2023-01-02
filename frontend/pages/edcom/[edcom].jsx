import { useState, React, useRef } from "react";
import { useRouter } from "next/router";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    ButtonGroup,
    Container,
    FormControl,
    FormLabel,
    Textarea,
    useDisclosure
} from "@chakra-ui/react";
import { getIdComent, updateComent } from "../../data/coment";

export const getServerSideProps = async (context) => {
    const response = await getIdComent(context.query.edcom);
    return {
        props: {
            data: response.data,
        },
    };
};

const Edcom = ({ data }) => {
    const [coment, setComent] = useState(data);
    const router = useRouter();
    const { edcom } = router.query;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const handleChange = (e) => {
        setComent({
            ...coment,
            [e.target.name]: e.target.value,
        });
    };
    const submitcom = (e) => {
        e.preventDefault();
        updateComent(edcom, coment).then((res) => {
            console.log("resdasd", res.data.comentario);
            router.push("../posts");
        });
    };

    console.log("Esta", coment);
    console.log(edcom);

    return (
        <>
            <html>
                <body>
                    <Container>
                        <FormControl id="comentario">
                            <FormLabel> Comentario a editar</FormLabel>
                            <Textarea
                                size={"lg"}
                                name="comentario"
                                onChange={handleChange}
                                value={coment.comentario}
                            />
                            <ButtonGroup>
                                <Button
                                    colorScheme={"red"}
                                    onClick={() => router.push("../posts")}
                                >
                                    Cancelar
                                </Button>
                                <Button colorScheme={"linkedin"} onClick={onOpen}>
                                    Aceptar
                                </Button>
                            </ButtonGroup>
                            <AlertDialog
                                isOpen={isOpen}
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                            >
                                <AlertDialogOverlay>
                                    <AlertDialogContent>
                                        <AlertDialogHeader fontSize={"lg"} fontWeight="bold">
                                            {" "}
                                            Editar Comentario
                                        </AlertDialogHeader>
                                        <AlertDialogBody>Esta seguro?</AlertDialogBody>
                                        <AlertDialogFooter>
                                            <ButtonGroup>
                                                <Button
                                                    ref={cancelRef}
                                                    onClick={onClose}
                                                    colorScheme="red"
                                                >
                                                    Cancelar
                                                </Button>
                                                <Button colorScheme={"messenger"} onClick={submitcom}>
                                                    Editar
                                                </Button>
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
    );
};

export default Edcom;
