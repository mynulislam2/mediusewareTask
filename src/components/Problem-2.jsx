import React from 'react';
import { useState } from 'react';
import '../assets/scss/PopUp/popup.scss'
const Problem2 = () => {
    const [ModalA, setModalA] = useState(false)
    return (

        <div className="container">
            <div className="row justify-content-center mt-5" style={{ zIndex: -1 }}>
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#AllContactModal" className="btn btn-lg btn-outline-primary" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#UsContactModal">US Contacts</button>
                </div>

            </div>
            <div class="modal fade" id="AllContactModal"   >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            <div>
                                <label>All Contacts</label> <br />
                                <button>Modal Button A</button>
                            </div>
                            <div>
                                <label>Us Contacts</label> <br />
                                <button>Modal Button B</button>
                            </div>
                            <div>
                                <label>Close</label> <br />
                                <button data-bs-dismiss="modal">Modal Button C</button>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Only even
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="UsContactModal"   >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            hello
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;