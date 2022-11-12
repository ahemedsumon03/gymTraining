import React, { useState, useEffect } from 'react'
import { useExcersize } from '../context/ExcersizeContext';
import { Stack, Typography, TextField, Button, Box } from '@mui/material';
import { HoriZontalScrollBar } from '../components';

const SearchExcersizes = () => {

    const { FetchBodyPartData, setExcersizes, FetchExcersizeData, excersizes } = useExcersize();
    const [search, setSearch] = useState('');
    const [bodyPartData, setBodyPartData] = useState([]);

    useEffect(() => {
        const callData = async () => {
            const data = await FetchBodyPartData();
            setBodyPartData(['all', ...data]);
        }
        callData();
    }, []);

    const handleSearch = () => {
        if (search) {
            const calldata = async () => {
                const data = await FetchExcersizeData();
                const searchData = data.filter((item) =>
                    item.name.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search)
                )

                window.scroll({
                    top: 1800,
                    left: 100,
                    behavior: 'smooth'
                })

                setSearch('');
                setExcersizes([searchData]);
            }
            calldata();
        }
    }


    return (
        <Stack alignItems="center" justifyContent='center' p='20px' mt="37px">
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '30px' },
            }} mb="49px" textAlign='center'>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative'>
                <TextField
                    height="76px"
                    value={search}
                    sx={{ borderRadius: '40px', input: { borderRadius: '4px', border: 'none', fontWeight: '700' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff' }}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    type="text"
                    placeholder='Search Excersize'
                />
                <Button className='search-btn' sx={{
                    backgroundColor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '173px', xs: '80px' },
                    height: '56px',
                    fontSize: { lg: '20px', xs: '14px' },
                    position: 'absolute',
                    right: '0px',

                }} onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{
                width: '100%',
                p: '20px',
                position: 'relative'
            }}>
                <HoriZontalScrollBar data={bodyPartData} bodyPartData />
            </Box>
        </Stack>
    )
}

export default SearchExcersizes
