import React, { useContext } from 'react';
import { BeerContext } from '../context/BeerContext';
import styles from './Shop.css';

const ProductTile = ({ beer }) => {
    const { name, tagline, image_url } = beer;

    return (
        <div className={ styles.product_tile }>
            {/* <img src={ image_url } className={ styles.thumbnail_large } /> */}
            <p>{ name }</p>
            <p>{ tagline }</p>
        </div>
    )
}

const renderList = beerList =>
    beerList.map(beer => <ProductTile key={ beer.id } beer={ beer } />)

export const Shop = () => {
    const { beers, selectedBeers, filters } = useContext(BeerContext);

    console.log(beers)

    return (
        <div className={ styles.product_list }>
            {/* { selectedBeers.length > 0
                ? renderList(selectedBeers)
                : renderList(beers)
            } */}
            {/* {renderList(selectedBeers)} */}
            { filters.length > 0
                ? renderList(selectedBeers)
                : renderList(beers)
            }
            {/* { beers.map(beer => <ProductTile key={ beer.id } beer={ beer } />) } */}
        </div>
    )
};
