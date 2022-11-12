import React, { useEffect } from 'react'
import { Detail, ExcersizeVideo, SimilarExcersize } from '../components';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const ExcersizeDetails = () => {

    const { id } = useParams();

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Box sx={{ mt: { lg: '80px', xs: '60px' } }}>
            <Detail id={id} />
            <ExcersizeVideo id={id} />
            <SimilarExcersize id={id} />
        </Box>
    )
}

export default ExcersizeDetails
