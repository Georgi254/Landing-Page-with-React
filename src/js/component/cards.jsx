import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
            <div className="col">
                <div className="card h-100 ">
                <img src={props.cardSrc} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title text-center">{props.cardTitle}</h5>
                    <p className="card-text text-center">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href={props.href}className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.cardTitle}</h5>
                    <p className="card-text text-center">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href={props.href}className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.cardTitle}</h5>
                    <p className="card-text text-center">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href={props.href}className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.cardTitle}</h5>
                    <p className="card-text text-center">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href={props.href}className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
        </div>
    );
};

Cards.PropTypes = {
    cardSrc: PropTypes.string,
    cardTitle: PropTypes.string,
    pText: PropTypes.string,
    buttonText: PropTypes.string,
    href: PropTypes.string,
};

Cards.defaultProps = {
    cardSrc: "https://images.placesonline.com/photos/80576__gerusalemme_est.jpg?quality=80&w=710&h=510&mode=crop",
    cardTitle: "Card Title",
    pText: "Lorem Ipsum Sanctum Totum Locum viajum a la Quiacum Argentinum morte cuore et Punguen Manoteen Billeteren",
    buttonText: "Find Out More!",
    href: "https://github.com/Georgi254"
};

export default Cards