import { isEqual } from 'lodash';

export const shallowUnique = arr => [...new Set(arr)];

export const returnIngredient = (beers, ingredient) =>
    beers
        .reduce((output, { ingredients }) => ([
            ...output,
            ...ingredients[ingredient]
        ]), [])
        // .reduce((output, { name, ...rest }) => ([
        //     ...output,
        //     {name},
        // ]), [])
;

export const checkIfAlreadyExists = (array, targetObject, values) =>
    array.some(item =>
        values.every(value => item[value] === targetObject[value]))
;

export const removeDupeByKeys = (array, values) =>
    array.reduce((acc, curr) =>
        checkIfAlreadyExists(acc, curr, values)
            ? acc : [...acc, curr], [])
;

export const removeDuplicates = array =>
    array.reduce((acc, val) =>
        (acc.find(v => isEqual(v, val)) ? acc : [...acc, val]),
        [],
    );
