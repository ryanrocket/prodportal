const objs = {
	title: () => {
		let a = window.location.pathname;
		let b = a.split('/')[1];
		if (b === '' || a === '/') {
			window.document.title = 'ProdPortal';
		} else {
			window.document.title = 'ProdPortal - ' + b;
		}
	}
};
export default objs;
