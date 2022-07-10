import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Flex, 
    Stack, 
    Button,
    ButtonGroup, 

} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostModalComponent = ({
    isOpen,
    onClose,
}) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                color={'primary.400'}
                size={'4xl'}>
                <ModalOverlay
                    bg={'rgba(255, 255, 255, 0.01)'}
                    backdropFilter='blur(20px)'
                />
                <ModalContent
                    py={'24px'}>
                    <ModalHeader
                        px={{ base: '24px', md: '32px' }}>
                        <ModalCloseButton
                            color={'primary.400'}
                            top={4}
                            left={4}
                            transform={'scale(1.8)'}
                            _focus={{ outline: 0 }}
                            _hover={{ background: 'white' }}
                            _active={{ background: 'white' }}
                        />
                    </ModalHeader>
                    <ModalBody
                        px={{ base: '24px', md: '32px' }} alignItems={"center"}>
                        <Flex direction={"y"} gap="32px">
                            <Stack>
                                <h1 >Filter by</h1>
                                <Button onClick={onClose}>Posts with Photos? </Button>
                                <Button onClick={onClose}>Posts with Photos? </Button>
                                <Button onClick={onClose}>Posts with Photos? </Button>
                                <Button onClick={onClose}>Posts with Photos? </Button>
                            </Stack>
                            <Stack>
                                <h1>Sort By</h1>
                                <Button onClick={onClose}>Upload Date</Button>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PostModalComponent;