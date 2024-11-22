import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CharacterProfile = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.specificCharacter);


    useEffect(() => {
        actions.loadSpecificCharacter(params.theid);
    }, [params.theid]);




    return (
        <>
            <div className="row" >
                <div className="col-4 ms-auto mt-5">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
                        onError={(event) => event.target.src = "https://via.placeholder.com/600?text=Character+Image+Not+Found"}
                        className="card-img-top"
                        alt={store.specificCharacter?.name}
                    />
                </div>
                <div className="col-6 mt-5">
                    <h2>{store.specificCharacter?.name}</h2>
                    <p>lorem 30 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus</p>
                </div>
            </div>
            <hr className="text-danger d-flex mx-auto" style={{ width: "90%", height: "3px" }}></hr>
            <div className="row d-flex mx-auto text-danger" style={{ width: "90%" }}>
                <div className="col-2  mt-5">
                    <p><strong>
                        Name
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.name}</p>
                </div>
                <div className="col-2 mt-5">
                    <p><strong>
                        Birth Year
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.birth_year}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Gender
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.gender}</p>
                    {/* //? optional chaining */}
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Height
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.height}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Skin Color
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.skin_color}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Eye Color
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.eye_color}</p>
                </div>

            </div>
        </>
    );
};


export default CharacterProfile