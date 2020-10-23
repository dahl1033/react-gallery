import React, { Component } from "react";
import GalleryItem from './GalleryItem'
//import axios from 'axios';

class GalleryList extends Component {
    render() {
        return (
            <>
            {console.log('GalleryList galleryItems',this.props.galleryItems)}

            <ul>
                {this.props.galleryItems.map((item) => {
                    console.log(item);
                     return <GalleryItem galleryItem={item}/>
                })}
            </ul>
            </>
        )
    }
}
export default GalleryList;