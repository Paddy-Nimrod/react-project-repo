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
                    id: 1,
                    linkUrl: 'Hats'
                },
                {
                    title: 'jackets',
                    imageUrl: '../../images/image2.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: '../../images/image3.jpg',
                    id: 3,
                    linkUrl:''
                },
                {
                    title: 'women',
                    imageUrl: '../../images/image4.jpg',
                    size:'large',
                    id: 4,
                    linkUrl:''
                },
                {
                    title: 'men',
                    imageUrl: '../../images/image5.jpg',
                    size:'large', 
                    id: 5,
                    linkUrl:''
                }
                
            ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
              {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
              }
            </div>
        );
    }
}

export default Directory;