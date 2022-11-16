import React from 'react';

import Root from './views/Root/Root';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


/* OLD RENDER V5 */
/*import ReactDOM from 'react-dom';*/
/*ReactDOM.render(<Root />, document.getElementById('root'));*/

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Root />);