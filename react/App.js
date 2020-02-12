import React from 'react';
import FetchData from './components/FetchData';
const logoPath = require('./img/image_2.png');
// const imagesCtx = require.context('./img', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
// imagesCtx.keys().forEach(imagesCtx);

//import './App.scss';
import './app.scss';

const App = () => {
    return (
        <div className="App">
            Hello World!
            {/* <img src="./img/image_2.png"/> */}
            <img src={logoPath}/>
            <FetchData></FetchData>
        </div>
    );
}

export default App;