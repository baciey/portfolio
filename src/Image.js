import React from 'react';
const Image = (props) => {
    return (
        <>
            <img src={props.monitor} alt="" />
            <img onLoad={props.imgLoaded} className="screenShot "
                src={props.projects[props.nr].img1}
                alt="" />
            <img onLoad={props.imgLoaded} className="screenShot fadeOutfadeIn"
                src={props.projects[props.nr].img2}
                alt="" />
            {props.isImgLoaded ? null : <div className="loadingImg">ładuję zdjęcie...</div>}
        </>
    );
}

export default Image;
