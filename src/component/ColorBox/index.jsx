import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './ColorBox.scss'
ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST=['deeppink','green','black','blue','yellow']
    const randomIndex = Math.trunc(Math.random()*5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor]=useState(()=>{
        return localStorage.getItem('box_color')||getRandomColor();
    });
    function handleBoxClick() {
        const newColor=getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color',newColor);
    }
    return (
        <div 
            className="color-box"
            style={{backgroundColor:color}}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;