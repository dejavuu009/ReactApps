import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

const App = () => (
    <div>
        <h1>Hello World</h1>
        <ListWrapper ></ListWrapper>
        <button className='btn btn-primary'>button BS</button>
    </div>
);

export default App;
