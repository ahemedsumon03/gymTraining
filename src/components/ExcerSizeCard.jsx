import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const ExcerSizeCard = ({ item }) => {
    return (
        <Link className="exercise-card" to={`/excersize/${item?.id}`}>
            <img src={item?.gifUrl} alt={item?.name} loading="lazy" />
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {item?.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {item?.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {item?.name}
            </Typography>
        </Link>
    )
}

export default ExcerSizeCard
