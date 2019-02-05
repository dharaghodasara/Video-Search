import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
    
    const renderList = props.videos.map((video)=> {
        return <VideoItem video={video} onSelectVideo={props.onSelectVideo} key={`video-list-${video.id.videoId}`}/>
    })
   
    return (
        <div className="ui relaxed divided list">   
            {renderList}
        </div>
    ) 
}

export default VideoList