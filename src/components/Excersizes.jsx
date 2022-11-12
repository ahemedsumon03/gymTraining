import React, { useEffect, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Pagination } from '@mui/material';
import { useExcersize } from '../context/ExcersizeContext';
import { ExcerSizeCard, Loader } from '../components';

const Excersizes = () => {

    const { setExcersizes, FetchExcersizeDataByCondition, excersizes, bodyPart } = useExcersize();

    const [currentPage, setCurrenPage] = useState(1);
    let excersizePerPage = 9;

    useEffect(() => {
        const calldata = async () => {
            let dataInfo = [];
            const data = await FetchExcersizeDataByCondition(bodyPart);
            dataInfo.push(data);
            setExcersizes(dataInfo);
        }
        calldata();
    }, [bodyPart]);


    let allExcersize = excersizes[0]?.length;
    // Pagination

    const indexofLastExcersize = currentPage * excersizePerPage;
    const indexofFirstExcersize = indexofLastExcersize - excersizePerPage;
    const currentExcersizes = excersizes.slice(indexofFirstExcersize, indexofLastExcersize);

    const paginate = (event, value) => {
        setCurrenPage(value);
        window.scrollTo({ top: 1800, behaviour: 'smooth' });
    }


    return (

        !currentExcersizes[0]?.length ? <Loader /> : (
            <Box>
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign='center' >Showing Results</Typography>
                <Stack direction='row' flexWrap="wrap" justifyContent='center' sx={{
                    gap: { lg: '110px', xs: '50px' }
                }}>
                    {currentExcersizes[0]?.map((exercise, idx) => (
                        <ExcerSizeCard key={idx} item={exercise} />
                    ))}
                </Stack>
                <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                    {allExcersize > excersizePerPage && (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(allExcersize / excersizePerPage)}
                            page={currentPage}
                            onChange={(event) => paginate(event, event.target.value)}
                            size="large"
                        />
                    )}
                </Stack>
            </Box>
        )


    )
}

export default Excersizes
