import React, { Component } from 'react';
import GalleryList from '../Gallery/GalleryList'
import './App.css';
import axios from 'axios';


class App extends Component {
  state= {
    galleryItems: []
  }

  componentDidMount = () => {
    console.log('App.js is mounted');
    // have to define what component this onReady function is calling from
    // in this case it is the Component
    this.getGallery();
  }


  getGallery = () => {
    console.log('In getGallery');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Response in getGallery', response.data);
      this.setState({
        galleryItems: response.data
      })
    }).catch(function (error){
      console.log(error);
    })
   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
         {/* Calling the GalleryList component and passing out galleryItems aray and getGallery function in to be used as props */}
        <GalleryList galleryItems={this.state.galleryItems} getGallery={this.getGallery} />
        
      </div>
    );
  }
}

export default App;
