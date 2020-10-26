import React, { Component } from "react";
//import App from '../App/App'
import axios from 'axios';

class GalleryItem extends Component {
    state = { 
        showDescription: false
    }
    // functino updates the showDescription boolean value to decide whether to show the description or photo depending on state
    showDescriptionUpdate = () => {
        console.log('clicked', this.state.showDescription);

        this.setState({
            showDescription: !this.state.showDescription
        })
    }     
    
    // PUT axios request to update the likes of each inividual in database depending on which photo id is clicked
    likesUpdate = () => {
        axios({
             method: 'PUT',
            url: `gallery/like/${this.props.galleryItem.id}`
    }).then(response => {
                console.log(response.data, this.props.galleryItem.id);
                // refresh the liked state int App.js passed down using props
                this.props.getGallery();
            }).catch((error)=> {
                console.log(error);
            });
    }


    render() {
        return (
            <>
            {console.log('GalleryItem',this.props.galleryItem)}
            <div className="imageBlock" key={this.props.galleryItem.id}>
                 <li>
                    {/* conditional rendering option to check showDescription boolean value to decide what to display */}
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
                        {/* conditional rendering statement to display amount of likes if there are any likes on a given photo */}
                            <button onClick={this.likesUpdate}>Like</button>
                            <br/>
                            {this.props.galleryItem.likes === 0 ?
                                `No people like this :(`
                            :
                                <span>{this.props.galleryItem.likes} people like this!</span>
                            }
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