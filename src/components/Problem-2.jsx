import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/PopUp/popup.scss'
import ModalA from './ModalA';
import ModalB from './ModalB';
const Problem2 = () => {
const navigate= useNavigate()

    return (

        <div className="container">
            <div className="row justify-content-center mt-5" style={{ zIndex: -1 }}>
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button type="button" className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#AllContactModal"  >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal"  data-bs-target="#UsContactModal" >US Contacts</button>
                </div>

            </div>
            <ModalA></ModalA>
            <ModalB></ModalB>
        </div>
    );
};

export default Problem2;