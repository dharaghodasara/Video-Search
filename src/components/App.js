import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {

  state = {videos : [],selectedVideo : null,defaultText:"Buildings"}

  componentDidMount = () => {
    this.onFormSubmit(this.state.defaultText)
  }

  onFormSubmit =  async term => {
    const response =  await Youtube.get('/search',{
      params : {
        q: term
      }
    })
    this.setState({
      videos : response.data.items,
      video : response.data.items[0]
    })
  }

  onSelectVideo = (video) => {
    this.setState({video : video})
  }

  render() {
    return (
      <div className="ui container" style={{margin:"40px"}}>
        <SearchBar onFormSubmit={this.onFormSubmit} defaultText={this.state.defaultText}/>

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"> 
               <VideoDetail video ={this.state.video} />
            </div>
            <div className="five wide column"> 

              <VideoList videos = {this.state.videos} onSelectVideo={this.onSelectVideo}/>
            </div>
            
            
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
