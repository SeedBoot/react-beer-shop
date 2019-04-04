import {
    shallowUnique,
    returnIngredient,
    removeDupeByKeys,
} from './';

export const abv = beers => shallowUnique(
    beers.reduce((acc, { abv }) => [...acc, abv], [])
);

export const hops = beers => removeDupeByKeys(
    returnIngredient(beers, 'hops'),
    ['name']
);

export const malt = beers => removeDupeByKeys(
    returnIngredient(beers, 'malt'),
    ['name']
);

// export const yeast = beers => shallowUnique(
//     beers.reduce((acc, curr) =>
//         [...acc, curr.ingredients.yeast], [])
// );

export const yeast = beers => removeDupeByKeys(
    beers.reduce((acc, curr) =>
        [...acc, { name: curr.ingredients.yeast }], []),
    ['name']
);
