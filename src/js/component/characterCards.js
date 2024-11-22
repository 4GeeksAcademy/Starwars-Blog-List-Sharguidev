import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const CharacterCards = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadCharacters();
    }, []);


    const characterItems = store.characters.map((character) => (
        <Carousel.Item key={character.id}>
            <div className="col-4">
                <div className="card" >
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                        onError={(event) => event.target.src = "https://via.placeholder.com/300?text=Character+Image+Not+Found"}
                        className="card-img-top"
                        alt={character.name}
                    />

                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">
                            Gender: {character.gender}<br />
                            Hair Color: {character.hair_color}<br />
                            Eye Color: {character.eye_color}<br />
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
            <h2 className="text-start mb-5">Characters</h2>
            <Carousel>
                {characterItems}
            </Carousel>
        </div>
    );

};


export default CharacterCards;