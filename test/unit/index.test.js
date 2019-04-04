import {
    shallowUnique,
    returnIngredient,
    removeDupeByKeys,
    removeDuplicates,
} from '../../src/util/index';

describe('Unit test -- Util', () => {
    test('shallow unique returns unique array', () => {
        const array = [1, 2, 3, 1];

        const expected = [1, 2, 3];

        expect( shallowUnique(array) ).toEqual(expected)
    });

    test('returnIngredient(beers, "hops") returns all hops', () => {
        const beers = [
            {
                name: 'buzz',
                ingredients: {
                    hops: [
                        {
                            add: "start",
                            amount: { value: 25, unit: "grams" },
                            attribute: "bitter",
                            name: "Fuggles"
                        },
                        {
                            add: "end",
                            amount: { value: 37.5, unit: "grams" },
                            attribute: "flavour",
                            name: "Cascade"
                        }
                    ],
                    malt: [],
                    yeast: ''
                }
            },
            {
                name: 'trashy blonde',
                ingredients: {
                    hops: [
                        {
                            add: "start",
                            amount: { value: 13.8, unit: "grams" },
                            attribute: "bitter",
                            name: "Amarillo"
                        },
                        {
                            add: "end",
                            amount: { value: 18.8, unit: "grams" },
                            attribute: "flavour",
                            name: "Montueka"
                        }
                    ],
                    malt: [],
                    yeast: ''
                }
            }
        ];

        const expected = [
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Cascade"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Montueka"
            }
        ];

        expect( returnIngredient(beers, 'hops') ).toEqual(expected)
    });

    test('removeDupeByKeys(array) removes duplicate objects from array', () => {

        const array = [
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Cascade"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Montueka"
            }
        ];

        const expected = [
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Cascade"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Montueka"
            }
        ];

        expect( removeDupeByKeys(array, ['name', 'add']) ).toEqual(expected);
    });

    test('removeDuplicates(array) removes duplicate objects from array', () => {

        const array = [
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Cascade"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Montueka"
            }
        ];

        const expected = [
            {
                add: "start",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "bitter",
                name: "Fuggles"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Cascade"
            },
            {
                add: "start",
                attribute: "bitter",
                name: "Amarillo"
            },
            {
                add: "end",
                attribute: "flavour",
                name: "Montueka"
            }
        ];

        expect( removeDuplicates(array) ).toEqual(expected);
    });
});

