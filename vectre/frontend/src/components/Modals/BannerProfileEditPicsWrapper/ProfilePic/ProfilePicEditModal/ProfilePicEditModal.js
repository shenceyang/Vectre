import React, { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Flex,
    Image
} from "@chakra-ui/react"
import { FaUserCircle } from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'
import { RiImageAddFill } from 'react-icons/ri'
import StyledModalHeader from "../../../StyledModalHeader/StyledModalHeader";
import { getAvatarOrDefault } from "../../../../../utils/Utils";
import TextButton from "../../../../Buttons/TextButton/TextButton";

const ProfilePicEditModal = ({
    data,
    isOpen,
    onClose,
    profilePicImageData,
    setProfilePicImageData
}) => {

    const profilePicHiddenFileInput = React.useRef(null);

    const profilePicHandleUploadClick = () => {
        profilePicHiddenFileInput.current.click();
    };
    const profilePicHandleChange = (event) => {
        setProfilePicImageData(document.getElementById("profilePicImageInput").files[0]);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                color={'primary.400'}
                size={'3xl'}>
                <ModalOverlay
                    bg={'rgba(255, 255, 255, 0.01)'}
                    backdropFilter='blur(20px)'
                />
                <ModalContent
                    bg={'rgba(255, 255, 255, 0.9)'}
                    py={'10px'}>
                    <StyledModalHeader headerText={'Choose Profile Picture'} icon={<FaUserCircle size={'2rem'} />} />
                    <ModalBody
                        px={{ base: '24px', md: '64px' }}>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            gap={'20px'}>
                            <Image
                                border={'5px solid white'}
                                src={profilePicImageData ? URL.createObjectURL(profilePicImageData) : getAvatarOrDefault(data.profilePic)}
                                fit={'cover'}
                                overflow={'hidden'}
                                borderRadius={'full'}
                                boxSize={'160px'} />
                            <TextButton
                                display={data.walletAddress ? 'inline-flex' : 'none'}
                                text={'Select NFT'}
                                fontWeight={700}
                                width={"250px"}
                                fontSize={'18px'}
                                background={'primary.400'}
                                color={'white'}
                                px={'46px'}
                                py={'11px'}
                                rightIcon={<SiEthereum />}
                            />
                            <TextButton
                                text={'Upload Image'}
                                fontWeight={700}
                                width={"250px"}
                                fontSize={'18px'}
                                background={'primary.400'}
                                color={'white'}
                                px={'46px'}
                                py={'11px'}
                                rightIcon={<RiImageAddFill />}
                                onClick={profilePicHandleUploadClick}
                            />
                            <input
                                type="file"
                                name="image"
                                id="profilePicImageInput"
                                accept="image/png, image/jpeg"
                                ref={profilePicHiddenFileInput}
                                onChange={profilePicHandleChange}
                                style={{ display: 'none' }} />
                        </Flex>
                    </ModalBody>
                    <ModalFooter
                        pt={'24px'}
                        px={{ base: '24px', md: '64px' }}>
                        <Button
                            alignSelf={'end'}
                            ml={'32px'}
                            background={'primary.400'}
                            color={'white'}
                            px={'46px'}
                            py={'11px'}
                            borderRadius={'6px'}
                            _focus={{ outline: 0 }}
                            onClick={onClose}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProfilePicEditModal;