import React from 'react';

import './directory.styles.scss';
import '../menu-item/menu-item.styles.scss';
import MenuItem from '../menu-item/menu-item.component'; 


class Directory extends React.Component{
    constructor(){
        super ();

        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: '../../images/image1.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: '../../images/image2.jpg',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: '../../images/image3.jpg',
                    id: 3
                },
                {
                    title: 'women',
                    imageUrl: '../../images/image4.jpg',
                    size:'large',
                    id: 4
                },
                {
                    title: 'men',
                    imageUrl: '../../images/image5.jpg',
                    size:'large', 
                    id: 5
                }
                
            ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
              {
                    this.state.sections.map(({title, imageUrl,id, size}) =>(
                        <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))
              }
            </div>
        );
    }
}

export default Directory;