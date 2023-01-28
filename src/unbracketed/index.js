export function load(x) {
	return import(`./data-${x}.js`);
}

const { a } = await load('a');
console.log(`data: ${a}`);
