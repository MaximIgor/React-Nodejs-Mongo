import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Last = () => (
    <footer className="principal">
        <div class="container">
            <div class="row" >
                <div class="col-lg">
                 <h4 className="mt-3 d-flex justify-content-center">artLocus<i class="far fa-registered"></i></h4>
                 <p>For filmmakers, by filmmakers</p>
                 <hr/>
                 <p><i className="d-flex align-items-end"class="far fa-copyright"></i>2018 artLocus,Inc. All rights reserved.</p>
                </div>
                <div className="col-sm mt-3">
                    <h5>artLocus</h5>
                        <li>home</li>
                        <li>About us</li>
                        <li>staff picks</li>
                        <li>artLocus on-demad</li>
                        <li>Site map</li>
                        <li>Upload</li> 
                </div>
                <div className="col-sm mt-3">
                    <h5>Security</h5>
                        <li>Propietary secsys</li>
                        <li>Privacy policy</li>
                        <li>DRM</li>
                        <li>Cookies</li>
                </div>
                <div className="col-sm mt-3">
                    <h5>Resources</h5>
                        <li>Help center</li>
                        <li>Video school</li>
                        <li>Developers</li>
                        <li>Studens</li>
                        <li>Directors</li>
                </div>
                <div className="col-sm mt-3">
                    <h5>Careers</h5>
                        <li>Employement</li>
                        <li>Parners</li>
                </div>
            </div>
         </div>
    </footer>
)

export default Last;