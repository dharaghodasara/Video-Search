import React from 'react'
import './VideoItem.css'
const VideoItem = (props) => {
    return (
        <div className="item video-item" onClick={() => props.onSelectVideo(props.video)}> 
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} key={props.video.id.videoId}/>
            <div className="content"> 
                <div className="header">{
                    props.video.snippet.title} 
                </div>
            </div>
        </div>
    ) 
}

export default VideoItem