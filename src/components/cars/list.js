import React from "react";
import '../../App.css';
import '../../filter.css';

const List = () => {
    return (
        <>
            {/* Car List Container */}
            <div className="container car-list-container">
                <div className="row" id="container-element">
                    {" "}
                </div>
                {/* Clear Button */}
                <button className="btn btn-danger" id="clear-btn">
                    Clear Cars
                </button>
            </div>
        </>

    );
};

export default List;