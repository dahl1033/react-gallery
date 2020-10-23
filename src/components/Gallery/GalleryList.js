import React, { Component } from "react";
//import axios from 'axios';

class GalleryList extends Component {
    render() {
        return (
            <>
            {console.log('GalleryList galleryItems',this.props.galleryItems)}
            
            <ul>
                {this.props.galleryItems.map((item) => {
                    return  <li key={item.id}>
                                <img src={item.path} alt={item.title}></img>
                            </li>
                    
                })}
            </ul>
            </>
        )
    }
}
export default GalleryList;