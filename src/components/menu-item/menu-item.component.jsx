import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl })=> (
    <div style = {{  backgroundImage: 'url(&{require(imageUrl)})' }} className = 'menu-item'>
        <div className = 'content'>
            <h1 className = 'title'>{ title.toUpperCase() }</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;