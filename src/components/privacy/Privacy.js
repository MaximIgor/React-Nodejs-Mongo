import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/main.css';

const Privacy = () => (
    <div className="container-fluid" style={{border: '1px solid red'}}>
        <div className='container d-flex'>
            <div style={{border: '1px solid red'}} className='col'>
                <img src={require('./../../images/qwerty.jpg')} alt="kk" style={{width: '100%'}}/>
            </div>
            <div style={{border: '1px solid red'}} className='col offset-1'>
                hola2
            </div>
        </div>
    </div>
)

export default Privacy;