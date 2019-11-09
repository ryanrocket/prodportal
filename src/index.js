import logMessage from './js/logger';
import objs from './js/handle.pkg';
import './css/style.css';
import './img/favicon';
import './html/index.html';
// Log message to console
logMessage('A very warm welcome to Expack!');
objs.title();
// Needed for Hot Module Replacement
if (typeof module.hot !== 'undefined') {
	module.hot.accept(); // eslint-disable-line no-undef
}
