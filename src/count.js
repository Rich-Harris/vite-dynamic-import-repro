console.log('these should all be 3:');
console.log(Object.keys(import.meta.glob(`./\\(parens\\)/data-*.js`)).length);
console.log(Object.keys(import.meta.glob(`./[brackets]/data-*.js`)).length);
console.log(Object.keys(import.meta.glob(`./normal/data-*.js`)).length);
console.log(Object.keys(import.meta.glob('./\\(parens\\)/data-*.js')).length);
console.log(Object.keys(import.meta.glob('./[brackets]/data-*.js')).length);
console.log(Object.keys(import.meta.glob('./normal/data-*.js')).length);
console.log('');
