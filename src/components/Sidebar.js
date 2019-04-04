import React, { useContext } from 'react';
import { BeerContext } from '../context/BeerContext';
import styles from './Sidebar.css';

export const Sidebar = () => {
    const {
        beers, ingredients,
        setSelectedBeers,
        setFilters,
    } = useContext(BeerContext);

    const handleClick = () => {
        const allCheckboxes = [...document.querySelectorAll('.filter-checkbox')];

        const checkedBoxesText = allCheckboxes
            .filter(el => el.checked === true)
            .map(el => (el.parentNode.textContent));

        setFilters(checkedBoxesText);

        setSelectedBeers(beers.filter(beer =>
            checkedBoxesText.every(text => beer.ingredients.yeast === text)));
    }

    return (
        <div className={ styles.sidebar }>
            <ul className={ styles.filterList }>
                {ingredients.yeast.map((item, index) =>
                    <li key={ `${index}-${item.name}` } className={ styles.listItem }>
                        <label className={ styles.listItem_label }>
                            <input className="filter-checkbox" type="checkbox" onChange={handleClick} />
                            { item.name }
                        </label>
                    </li>
                )}
            </ul>
        </div>
    )
};
