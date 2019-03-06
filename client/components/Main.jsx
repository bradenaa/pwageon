import React from 'react';

import TestComp1 from './TestComp1.jsx';
import '../css/styles.css';



// Components
const Main = ({click}) => {
    return (
      <div>
        <div className="header"></div>
        <img className="signin" src="./assets/pigeon-standard.png" style={{width: '355px', align: 'center'}}/>
        <h1 className="signin">Pigi</h1>
        <div>
            <button className="signin" onClick={click}><img src="./assets/GoogleSiginBtn/btn_google_signin_dark_focus_web@2x.png"/></button>
        </div>
      </div>
    )       
};

export default Main;