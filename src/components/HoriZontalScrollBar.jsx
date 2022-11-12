import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import { Typography, Box } from '@mui/material';
import { BodyPart, ExcerSizeCard } from '../components';

const HoriZontalScrollBar = ({ data, bodyPartData }) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollPrev()} className='right-arrow'>
                <img src={leftArrow} alt="left-arrow" />
            </Typography>
        )
    }

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollNext()} className='left-arrow'>
                <img src={rightArrow} alt="right-arrow" />
            </Typography>
        )
    }

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                data?.map((item) => (
                    <Box
                        key={item?.id || item}
                        title={item?.id || item}
                        itemId={item?.id || item}
                        m='0 40px'
                    >
                        {bodyPartData ? <BodyPart item={item} /> : <ExcerSizeCard item={item} />}
                    </Box>
                ))
            }
        </ScrollMenu>
    )
}

export default HoriZontalScrollBar
