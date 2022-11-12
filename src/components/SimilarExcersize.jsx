import React, { useEffect, useState } from 'react';
import { HoriZontalScrollBar, Loader } from '../components';
import { useExcersize } from '../context/ExcersizeContext';
import { Typography, Stack, Box } from '@mui/material';
import { Axios, options } from '../context/ExcersizeContext';

const SimilarExcersize = ({ id }) => {

    const { FetchExcersizeDetailsData } = useExcersize();

    const [targetList, setTargetList] = useState([]);
    const [equiment, setEquiment] = useState([]);
    const [excersizeDetails, setExcersizeDetails] = useState({});
    const { equipment, target } = excersizeDetails;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const calldata = async () => {
            const data = await FetchExcersizeDetailsData(id);
            setExcersizeDetails(data);
            setLoading(false);
        }
        calldata();
    }, [id]);

    useEffect(() => {
        setLoading(true);
        const calldata = async () => {
            const { data: data1 } = await Axios.get(`/exercises/target/${target}`, options);
            setTargetList(data1);
            setLoading(false);

            const { data: data2 } = await Axios.get(`/exercises/equipment/${equipment}`, options);
            setEquiment(data2);
            setLoading(false);
        }
        calldata();
    }, [target, equipment]);


    return (

        loading ? <Loader /> : (
            <Box sx={{
                mt: { lg: '100px', xs: '0px' }
            }}>
                <Typography sx={{
                    fontSize: { lg: '44px', xs: '25px' },
                    ml: '20px'
                }} fontWeight={700} color="#000" mb="33px" textAlign="center">
                    Similar <span>Target Muscle</span> excersizes
                </Typography>
                <Stack direction="row" sx={{
                    p: 2,
                    position: 'relative'
                }}>
                    {targetList?.length !== 0 ? <HoriZontalScrollBar data={targetList} /> : <Loader />}
                </Stack>
                <Typography sx={{
                    fontSize: { lg: '44px', xs: '25px' },
                    mt: { lg: '100px', xs: '60px' }
                }} fontWeight={700} color="#000" mb="33px" textAlign="center">
                    Similar <span>Equipment</span> exercises
                    <Stack direction="row" sx={{
                        p: 2,
                        position: 'relative'
                    }}>
                        {equiment?.length !== 0 ? <HoriZontalScrollBar data={equiment} /> : <Loader />}
                    </Stack>
                </Typography>
            </Box>
        )
    )
}

export default SimilarExcersize
