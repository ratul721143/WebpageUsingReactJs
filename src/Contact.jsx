import React from 'react'

const Contact = () =>{
    return (
     <>
      <div className="mb-7 pb-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container mt-6">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              <div className="contact_div">
                <form action="/">
                <div className="form-group mb-5">
                    <input type="text" className="form-control" required placeholder="Full Name"/>  
                  </div>
                  <div className="form-group mb-5">
                    <input type="email" className="form-control" required placeholder="email id"/>  
                  </div>
                  <div className="form-group mb-5">
                    <input type="password" className="form-control" required placeholder="Passward"/>  
                  </div>
                  <div className="form-group mb-5">
                    <input type="text" maxLength="10" className="form-control" required placeholder="Conatact Number"/>  
                  </div>
                  <div className="form-group mb-5">
                    <textarea type="text" className="form-control" required placeholder="Write your massage here"></textarea>  
                  </div>
                  <div className="form-group mb-4 d-flex justify-content-center">
                    <button type="submit" className="bttn">SUBMIT</button>
                  </div>
                  
                </form>
              </div>
          </div>
        </div>
      </div>
     </>
    );
};

export default Contact;