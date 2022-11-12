import { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const Axios = axios.create({ baseURL: 'https://exercisedb.p.rapidapi.com' });
const baseURL = "https://youtube-search-and-download.p.rapidapi.com";

export const options = {

    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXCERSIZE_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

const youtubeOptions = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXCERSIZE_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
}

const ExcerSizeContext = createContext();

export const ExcerSizeContextProvider = ({ children }) => {

    const [excersizes, setExcersizes] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    const FetchBodyPartData = async () => {
        try {

            const { data } = await Axios.get('/exercises/bodyPartList', options);
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    const FetchExcersizeData = async () => {
        try {

            const { data } = await Axios.get('/exercises', options);
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    const FetchExcersizeDataByCondition = async (bodyPart) => {
        try {

            if (bodyPart === 'all') {
                const { data } = await Axios.get('/exercises', options);
                return data;
            } else {
                const { data } = await Axios.get(`/exercises/bodyPart/${bodyPart}`, options);
                return data;
            }

        } catch (error) {
            console.log(error);
        }
    }

    const FetchExcersizeDetailsData = async (id) => {
        try {

            const { data } = await Axios.get(`/exercises/exercise/${id}`, options);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const FetchExcersizeVideosData = async (name) => {
        try {

            const { data } = await axios.get(`${baseURL}/search?query=${name} exercise`, youtubeOptions);
            return data;

        } catch (error) {
            console.log(error);
        }
    }


    return (

        <ExcerSizeContext.Provider value={{
            FetchBodyPartData,
            setExcersizes,
            bodyPart,
            setBodyPart,
            FetchExcersizeData,
            excersizes,
            FetchExcersizeDataByCondition,
            FetchExcersizeDetailsData,
            FetchExcersizeVideosData
        }}>
            {children}
        </ExcerSizeContext.Provider>
    )
}

export const useExcersize = () => useContext(ExcerSizeContext);