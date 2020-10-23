import React, { Component } from "react";
//import App from '../App/App'
import axios from 'axios';

class GalleryItem extends Component {
    state = { 
        showDescription: false
    }
    showDescriptionUpdate = () => {
        console.log('clicked', this.state.showDescription);

        this.setState({
            showDescription: !this.state.showDescription
        })
    }     
    
    likesUpdate = () => {
        console.log('hello from likesUpdate', this.props.galleryItem.likes);
        axios({
            method: 'PUT',
            url: '/gallery/like/:id'
        }).then((response) => {
            console.log('Response in likesUpdate', response);

        }).catch(function (error){
            console.log(error);
        })
        }


    render() {
        return (
            <>
            {console.log('GalleryItem',this.props.galleryItem)}
            <div className="imageBlock" key={this.props.galleryItem.id}>
                 <li>
                    {this.state.showDescription ?
                        <>
                        <p>{this.props.galleryItem.description}</p>
                        <button onClick={this.showDescriptionUpdate}>Back to Photo!</button>
                        </>
                        :
                        <>
                        <img onClick={this.showDescriptionUpdate} src={this.props.galleryItem.path} alt={this.props.galleryItem.title}></img>
                        </>
                    }   
                </li> 
                    <>
                        <button onClick={this.likesUpdate}>Like</button>
                        <p>Likes: {this.props.galleryItem.likes}</p>
                    </>
            </div>
            </>
        )
    }
}
export default GalleryItem;
//  {this.props.hero.onDuty ?
//                     <p>is on duty</p>
//                 :
//                     <p>is not on duty</p>
//                 }