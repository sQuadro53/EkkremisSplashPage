import React from 'react';
import TopBar from './TopBar';

const Docs = () => {

    return (
        <div>
            <TopBar />
            <img className='header-logo' src={require('../img/Ekkremis_Banner.jpg')} alt="Ekkremis" height='100px' width='180px'/>
            <div className="table-of-contents">
                <img className='header-logo' src={require('../img/Ekkremis-sm.png')} alt="Ekkremis" height='100px' width='180px'/>
                <a href=""> </a>
                <a href=""> </a>
                <a href=""> </a>
                <a href=""> </a>
            </div>
            <div className="docs"> 
                <h2></h2>
                <p></p>
            </div>
        </div>
    )

}

export default Docs;