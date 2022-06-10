import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Image
} from "@chakra-ui/react";

const PostModalComponent = ({
    isOpen,
    onClose,
    imageURL
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
                        px={{ base: '24px', md: '32px' }}>
                        <Image
                            border={'2px solid var(--chakra-colors-brand-400)'}
                            src={imageURL}
                            alt={imageURL}
                            fit={'cover'}
                            overflow={'hidden'}
                            borderRadius={'6px'} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PostModalComponent;