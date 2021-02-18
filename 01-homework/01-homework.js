const phonePrice = 15.678;
const tabletPrice = 123.965;
const headphonesPrice = 90.2345;


const max = Math.max(phonePrice, tabletPrice, headphonesPrice);
const min = Math.min(phonePrice, tabletPrice, headphonesPrice);
console.log('Maximum: ' + max );
console.log('Minimum: ' + min);


const allProducts = phonePrice + tabletPrice + headphonesPrice;
console.log('Total of products: ' + allProducts);


const phoneEven = Math.floor(phonePrice);
const tabletEven = Math.floor(tabletPrice);
const headphonesEven = Math.floor(headphonesPrice);
const prodTtlEven = phoneEven + tabletEven + headphonesEven;
console.log('Total of even prices: ' + prodTtlEven);


const roundedTtl = Math.ceil(prodTtlEven / 100) * 100;
console.log('Total rounded to hundreds: ' + roundedTtl);


if(prodTtlEven %2 === 0) {
    console.log('true(even)')
} else {
    console.log('false(uneven)')
}


const clientPays = 500;
const totalRest = allProducts - clientPays;
console.log('Rest after client pays 500 UAH: ' + totalRest);


const avrTtl = allProducts/3;
const avrEvened = Math.round(avrTtl * 100) / 100;
console.log('Average total: ' + avrEvened);


const discount = (Math.random() * allProducts).toFixed(2);
console.log('Amount of discount: ' + discount);
const clientsDiscount = Number(allProducts - discount).toFixed(2);
console.log('Price with discount:' + clientsDiscount);
const costWithDiscount = Number(allProducts/2 - discount).toFixed(2);
console.log('Final cost with discount: ' + costWithDiscount);