import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpModal = ({show, handleClose}) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <SignUpForm />
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default SignUpModal