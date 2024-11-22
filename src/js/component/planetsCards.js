import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const PlanetsCards = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadPlanets();
    }, []);


    const characterItems = store.planets.map((planet) => (


        <Carousel.Item key={planet.uid}>
            <div className="col-4">
                <div className="card" style={{ minHeight: "550px" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${planet.uidid}.jpg`}
                        onError={(event) => event.target.src = "https://via.placeholder.com/300?text=Character+Image+Not+Found"}
                        className="card-img-top"
                        alt={planet.name} />

                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">
                            Name: {planet.name}<br />
                            Population: {planet.population}<br />
                            Terrain: {planet.terrain}<br />
                        </p>

                        <div className="btn-group mx-5 ">
                            <Link type="button" to="/" className="btn btn-outline-primary me-5 ms-0 ">Learn More!</Link>
                            <Link type="button" to="/" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>

    ));

    return (
        <div className="container">
            <h2 className="text-start mb-5">Planets</h2>
            <Carousel>
                {characterItems}
            </Carousel>
        </div>
    );

};


export default PlanetsCards;