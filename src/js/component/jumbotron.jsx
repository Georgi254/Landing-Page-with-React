import React from "react";
import propTypes from "prop-types";

const Jumbotron = () => {
    return (
 <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">Custom Jumbotron</h1>
    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
    <a href="#" className="btn btn-primary btn-lg" type="button">Go Somewhere</a>  
 </div>
    );
}

export default Jumbotron;