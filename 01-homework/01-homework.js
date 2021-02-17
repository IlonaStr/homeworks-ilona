const phone = 15.678;
const tablet = 123.965;
const headphones = 90.2345;

const max = Math.max(phone, tablet, headphones);
const min = Math.min(phone, tablet, headphones);
console.log('Maximum: ' + max );
console.log('Minimum: ' + min);

const allProducts = phone + tablet + headphones;
console.log('Total of products: ' + allProducts);

const phoneEven = Math.floor(phone);
const tabletEven = Math.floor(tablet);
const headphonesEven = Math.floor(headphones);
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
console.log('Avarage total: ' + avrEvened);