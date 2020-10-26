import React, { Component } from "react";
import GalleryItem from './GalleryItem'
//import axios from 'axios';

class GalleryList extends Component {
    render() {
        return (
            <>
            {console.log('GalleryList galleryItems',this.props.galleryItems)}

            <ul>
                {/* iterate over items in gallerItems array */}
                {this.props.galleryItems.map((item) => {
                    console.log(item);
                    // Calling the GalleryItem component and passing out gallerItem aray and getGallery function in to be used as props
                     return <GalleryItem galleryItem={item} getGallery={this.props.getGallery}/>
                })}
            </ul>
            </>
        )
    }
}
export default GalleryList;