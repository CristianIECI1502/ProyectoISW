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
import { getIdComent, deleteComent } from "../../data/coment";

export const getServerSideProps = async (context) => {
    const response = await getIdComent(context.query.delcom);
    return {
        props: {
            data: response.data,
        },
    };
};

const Delcom = ({ data }) => {
    const [coment, setComent] = useState(data);
    const router = useRouter();
    const { delcom } = router.query;
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
        deleteComent(delcom, coment).then((res) => {
            console.log("resdasd", res.data.comentario);
            router.push("../posts");
        });
    };

    console.log("Esta", coment);
    console.log(delcom);

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
                                isReadOnly
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
                                            Eliminar Comentario
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
                                                    Eliminar
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

export default Delcom;
