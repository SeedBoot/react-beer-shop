import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
import data from '../data.json';
import {
    abv, hops, malt, yeast
} from '../util/selectors';

export const BeerContext = createContext(null);

export const BeerProvider = ({ children }) => {
    const [beers, setBeers] = useState([]);
    const [selectedBeers, setSelectedBeers] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(()=>{setBeers(data)},[])

    // useEffect(() => {
    //     (async () => {
    //         const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    //         setBeers(data);
    //     })();
    // },[]);

    const beerData = {
        beers,
        selectedBeers,
        setSelectedBeers,
        filters,
        setFilters,
        abv: abv(beers),
        ingredients: {
            hops: hops(beers),
            malt: malt(beers),
            yeast: yeast(beers),
        }
    }

    console.log(beerData)

    return (
        <BeerContext.Provider value={ beerData }>
            { children }
        </BeerContext.Provider>
    )
}
