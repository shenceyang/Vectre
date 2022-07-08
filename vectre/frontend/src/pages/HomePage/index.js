import ContentWIthNavContainer from "../../components/Containers/ContentWIthNavContainer";
import PostComponent from "../../components/PostComponent/PostComponent";
import {
    Box,
    Stack
} from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux";
import {feedSelector} from "../../redux/selectors/posts";
import {useEffect} from "react";
import {getFeed} from "../../redux/actions/posts";

const HomePage = () => {
    const feed = useSelector(feedSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFeed())
    }, [])

    return (
        <ContentWIthNavContainer>
            <Box py={'60px'} maxWidth={'4xl'} margin={'0 auto'}>
                <Stack alignSelf={'center'} gap={'36px'}>
                    {feed.map((item, i) => {
                        return (
                            <Box key={i}>
                                <PostComponent item={item} fromFeed={true} />
                            </Box>
                        )
                    })}
                </Stack>
            </Box>
        </ContentWIthNavContainer>
    )
}

export default HomePage;
