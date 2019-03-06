import React from 'react';
import '../css/styles.css';



// Components
const ConfirmMessage = ({click}) => {
    return (
      <div>
        <img className="signin" src="./assets/courier_pidgeon.jpg" style={{width: '355px', align: 'center'}}/>
        <h1 className="signin">Pigeon Messenger</h1>
        <div>
            <button className="signin" onClick={click}><img src="./assets/GoogleSiginBtn/btn_google_signin_light_normal_web@2x.png"/></button>
        </div>
      </div>
    )       
};

export default ConfirmMessage;