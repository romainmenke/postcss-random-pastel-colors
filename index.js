const creator = () => {
	return {
		postcssPlugin: 'randomize-colors',
		Once: (root) => {
			root.walkDecls((decl) => {
				if (decl.prop.toLowerCase() === 'color') {
					decl.value = randomColor();
				}
			})
		}
	};
};

creator.postcss = true;
module.exports = creator;

function randomColor() {
	const hue = Math.floor(Math.random() * 360);
	const saturation = Math.floor(Math.random() * 20) + 20; // 20-40%
	const lightness = Math.floor(Math.random() * 20) + 60; // 60-80%
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
