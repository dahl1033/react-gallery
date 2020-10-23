import React, { Component } from "react";
//import axios from 'axios';

class GalleryItem extends Component {
    render() {
        return (
            <>
            {console.log('GalleryItem',this.props.galleryItem)}
                 <li key={this.props.galleryItem.id}>
                    <img src={this.props.galleryItem.path} alt={this.props.galleryItem.title}></img>
                </li> 
            </>
        )
    }
}
export default GalleryItem;