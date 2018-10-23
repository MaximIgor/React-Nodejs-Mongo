import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
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
                        <li class="lista" >home</li>
                        <li class="lista" >About us</li>
                        <li class="lista">staff picks</li>
                        <li class="lista">artLocus on-demad</li>
                        <li class="lista">Site map</li>
                        <li class="lista">Upload</li> 
                </div>
                <div className="col-sm mt-3">
                    <h5>Security</h5>
                        <li class="lista">Propietary secsys</li>
                        <li class="lista">Privacy policy</li>
                        <li class="lista">DRM</li>
                        <li class="lista">Cookies</li>
                </div>
                <div className="col-sm mt-3">
                    <h5>Resources</h5>
                        <li class="lista">Help center</li>
                        <li class="lista">Video school</li>
                        <li class="lista">Developers</li>
                        <li class="lista">Studens</li>
                        <li class="lista">Directors</li>
                </div>
                <div className="col-sm mt-3">
                    <h5>Careers</h5>
                        <li class="lista">Employement</li>
                        <li class="lista">Parners</li>
                </div>
            </div>
         </div>
    </footer>
)

export default Footer;