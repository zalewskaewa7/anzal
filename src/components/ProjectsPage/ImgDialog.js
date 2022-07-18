import React from 'react';
import "./imgDialog.css";
const ImgDialog = (props) => {
    

    function closeDialog() {
        let biggerPhoto = document.getElementById("imgDialog");
        biggerPhoto.style.display = "none";
    }

    return ( 
        <div id="imgDialog" className="imgDialog" >
            <button  onClick={closeDialog} className="btnImg">&times;</button>
            <button id="btnPreviousImage" className="btnPreviousImage" onClick={props.previousImage}>&#8249;</button>
            <button id="btnNextImage" className="btnNextImage" onClick={props.nextImage}>&#8250;</button>
       <img className="showImg" src={props.path} alt={props.path} />
        </div>
     );
}
 
export default ImgDialog;