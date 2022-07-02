import {
    Box,
    Image,
    Grid
} from '@chakra-ui/react';

const dashboard_preset = "";

const DashboardMid = ({
    currentDashboard,
}) => {

    var dashboardList = '';
    if (currentDashboard.length !== 0) {
        const currentDashboardList = currentDashboard.replace(/'/g, "\"");
        dashboardList = JSON.parse(currentDashboardList);
    }
    const dashboard = dashboardList;

    return (
        <Box
            height={'350px'}
            bg={'rgba(255, 255, 255, 0.6)'}
            borderRadius={'6px'}
            px={'18px'}
            py={'15px'}
            alignItems={'baseline'}
            display={'in-line grid'}>
            {dashboard.length !== 0 ?
                <>
                    <Grid
                        justifyContent={'center'}
                        display={'grid'}
                        gap={6}
                        gridAutoFlow={'column'}>
                        {
                            dashboard.map((nftItem, i) => {
                                return (
                                    <Image
                                        //awaiting for the NFT verified symbol to showcase within the dashboard. 
                                        key={i}
                                        cursor={'pointer'}
                                        src={nftItem.imageURL}
                                        fit={'cover'}
                                        overflow={'hidden'}
                                        borderRadius={'6px'}
                                        height={'310px'}
                                        boxShadow={'outline'}>
                                    </Image>
                                )
                            })
                        }
                    </Grid>
                </> : null
            }
        </Box>
    );
};

export default DashboardMid;