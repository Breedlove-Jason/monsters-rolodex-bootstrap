import React from "react";
import "./search-box.styles.css";

const SearchBoxComponent = (props) => {
    return (
        <div className="input-group mb-3 search">
            <input type={"search"} placeholder={props.placeholder} onChange={props.onChangeHandler} className={props.className}/>
        </div>
    );
};

export default SearchBoxComponent;
