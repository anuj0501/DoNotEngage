import React from 'react';
import './EmailVerify.css';

const EmailVerify = () => {
    return (
        <div>
            <form method="POST">
                <div class="form-body">
                    <div class="row">
                        <div class="form-holder">
                            <div class="form-content">
                                <div class="form-items">
                                    <h3>Register Today</h3>
                                    <p>Fill in the data below.</p>           
                                        <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                                        </div>            
                                        <div class="col-md-12">
                                            <input class="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                        </div>            
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label class="form-check-label">I confirm that all data are correct</label>
                                    </div>
                                    <div class="form-button mt-3">
                                        <button id="submit" type="submit" class="bts">Validate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmailVerify;