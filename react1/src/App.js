import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';





class App extends React.Component {

state = {
    items: [
        {
            image: 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png' ,
            name: 'Dan Abramov',
            description: 'Working on @reactjs. The demo guy.',
            twitterLink: 'https://twitter.com/dan_abramov',
        },
        {
            image: 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'  ,
            name: 'Ryan Florence',
            description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
            twitterLink: 'https://twitter.com/ryanflorence',
        },
        {
            image: 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'  ,
            name: 'Michael Jackson',
            description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
            twitterLink: 'https://twitter.com/mjackson',
        },
        {
            image: 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'  ,
            name: 'Kent C. Dodds',
            description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
            twitterLink: 'https://twitter.com/kentcdodds',
        },
    ],
}

render() {
    return(
        <div>
        
        <ListWrapper items={this.state.items}></ListWrapper>
        

        
    </div>
    )
}

};

export default App;
