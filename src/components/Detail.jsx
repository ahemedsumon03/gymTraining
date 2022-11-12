import React, { useEffect, useState } from 'react';
import { useExcersize } from '../context/ExcersizeContext';
import BodyPartImage from '../assets/icons/body-part.png';
import EquipmentImage from '../assets/icons/equipment.png';
import TargetImage from '../assets/icons/target.png';
import { Stack, Typography, Button } from '@mui/material';
import { Loader } from '../components';

const Detail = ({ id }) => {

    const { FetchExcersizeDetailsData } = useExcersize();
    const [excersizeDetails, setExcersizeDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const { bodyPart, equipment, gifUrl, name, target } = excersizeDetails;

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
        {
            icon: TargetImage,
            name: target
        }
    ]

    useEffect(() => {
        setLoading(true);
        const callData = async () => {
            const data = await FetchExcersizeDetailsData(id);
            setExcersizeDetails(data);
            setLoading(false);
        }
        callData();
    }, [id]);

    return (

        loading ? <Loader /> : (
            <Stack sx={{
                flexDirection: { lg: 'row' },
                gap: '60px',
                p: '20px',
                alignItems: 'center'
            }}>
                <img src={gifUrl} alt={name} className="detail-image" />
                <Stack sx={{
                    gap: { lg: '35px', xs: '20px' },
                }}>
                    <Typography sx={{
                        fontSize: { lg: '64px', xs: '30px' }
                    }}>{name}</Typography>
                    <Typography
                        sx={{
                            fontSize: { lg: '24px', xs: '18px' },
                            color: '#4F4C4C'
                        }}
                    >
                        Excersize keep you strong.{' '}
                        <span>{name}</span> bup is one
                        of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                        <br /> mood and gain energy.
                    </Typography>
                    {extraDetails.map(({ icon, name }, index) => (
                        <Stack key={index} direction='row' alignItems='center' gap="10px">
                            <Button
                                sx={{
                                    background: '#FFF2DB',
                                    borderRadius: '50%',
                                    width: '100px',
                                    height: '100px'
                                }}
                            >
                                <img src={icon} alt={name} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography textTransform='capitalize' sx={{
                                fontSize: { lg: '30px', xs: '20px' }
                            }}>{name}</Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        )
    )
}

export default Detail
