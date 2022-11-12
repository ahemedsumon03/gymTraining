import React, { useEffect, useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { useExcersize } from '../context/ExcersizeContext';
import { Loader } from '../components';

const ExcersizeVideo = ({ id }) => {

    const { FetchExcersizeVideosData, FetchExcersizeDetailsData } = useExcersize();
    const [excersizeVideos, setExcersizeVideos] = useState({});
    const [excersizeDetails, setExcersizeDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const { name } = excersizeDetails;

    useEffect(() => {
        const callData = async () => {
            const data = await FetchExcersizeDetailsData(id);
            setExcersizeDetails(data);
        }
        callData();
    }, [])

    useEffect(() => {
        setLoading(true);
        const calldata = async () => {
            const data = await FetchExcersizeVideosData(name);
            setExcersizeVideos(data);
            setLoading(false);
        }
        calldata();
    }, []);

    const n = [excersizeVideos]?.slice(0, 3);
    const { contents } = n[0];

    return (

        loading ? <Loader /> : (
            <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px" ml="30px">
                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                    Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
                </Typography>
                <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                    {[contents][0]?.map((item, index) => (
                        <a
                            key={index}
                            rel="noreferrer"
                            target="_blank"
                            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                            className="exercise-video"
                        >
                            {(item?.video?.thumbnails[0]?.url && item?.video?.videoId !== undefined && item?.video?.videoId) && (
                                <img src={item?.video?.thumbnails[0]?.url} style={{ borderTopLeftRadius: '20px' }} alt="logo" />
                            )}
                            <Box>
                                <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">{item?.video?.title}</Typography>
                                <Typography fontSize="14px" color="#000">{item?.video?.channelName}</Typography>
                            </Box>
                        </a>
                    ))}
                </Stack>
            </Box>
        )


    )
}

export default ExcersizeVideo
