
const phonePrice = 15.678;
const tabletPrice = 123.965;
const headphonesPrice = 90.2345;


const maxPrice = Math.max(phonePrice, tabletPrice, headphonesPrice);
const minPrice = Math.min(phonePrice, tabletPrice, headphonesPrice);
// console.log(`Maximum: `, maxPrice);
// console.log(`Minimum: `, minPrice);


const allProductsPrice = phonePrice + tabletPrice + headphonesPrice;
// console.log(`Total of products: `, allProductsPrice);


const phoneEven = Math.floor(phonePrice);
const tabletEven = Math.floor(tabletPrice);
const headphonesEven = Math.floor(headphonesPrice);
const prodTtlEven = phoneEven + tabletEven + headphonesEven;
// console.log(`Total of even prices: `, prodTtlEven);


const roundedTtl = Math.ceil(prodTtlEven / 100) * 100;
// console.log(`Total rounded to hundreds: `, roundedTtl);


const pairedNumber = prodTtlEven % 2 === 0;
// console.log(pairedNumber);


const clientPays = 500;
const totalRest = clientPays - allProductsPrice;
// console.log(`Rest after client pays 500 UAH: `, totalRest);


const avrTtl = allProductsPrice / 3;
const avrEvened = Math.round(avrTtl * 100) / 100;
// console.log(`Average total: `, avrEvened);


const discount = Math.random().toFixed(2) * 100;
// console.log(`Amount of discount: `, discount, `%`);
const clientsDiscount = + (allProductsPrice - discount).toFixed(2);
// console.log(`Price with discount: `, clientsDiscount);
const costWithDiscount = + (allProductsPrice / 2 - discount).toFixed(2);
// console.log(`Final cost with discount: `, costWithDiscount);

//Advanced
// console.log (`
//     Maximum price: ${maxPrice};
//     Minimum price: ${minPrice};
//     Price of all products: ${allProductsPrice};
//     Price of all products evened to a less: ${prodTtlEven};
//     Price of all products evened to hundreds: ${roundedTtl};
//     Boolean value: ${pairedNumber};
//     Rest after client pays 500UAH: ${totalRest};
//     Rest evened after client paid 500UAH: ${avrEvened};
//     Random discount: ${discount}%;
//     A discount the client gets: ${clientsDiscount};
//     Final cost with discount: ${costWithDiscount};
// `)
// }

export {discount, clientsDiscount, costWithDiscount}