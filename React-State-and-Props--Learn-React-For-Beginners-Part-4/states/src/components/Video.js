import React from "react";

const Video = (props) => {
    return(
        <section>
            <h2>Video {props.nr}</h2>
            <button  onClick={props.setToggle}>Toggle</button>
        </section>
    );
}

export  default Video;