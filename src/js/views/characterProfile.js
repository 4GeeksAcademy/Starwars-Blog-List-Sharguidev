import React, { useState, useEffect } from "react";

const CharacterProfile = () => {
    return (
        <>
            <div className="row">
                <div className="col-4 ms-auto mt-5"><img src="https://via.placeholder.com/500?text=Character+Image+Not+Found"></img></div>
                <div className="col-6 ms-auto mt-5">
                    <h2>Luke Skywalker</h2>
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
                </div>
                <div className="col-2 mt-5">
                    <p><strong>
                        Birth Year
                    </strong>
                    </p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Gender
                    </strong>
                    </p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Height
                    </strong>
                    </p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Skin Color
                    </strong>
                    </p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Eye Color
                    </strong>
                    </p>
                </div>

            </div>
        </>
    );
};


export default CharacterProfile