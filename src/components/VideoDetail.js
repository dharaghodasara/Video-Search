import React from 'react'

const VideoDetail  = (props) => {

    if(props.video != null){
        const videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`
        return (
            <div> 
                <div className="ui embed">
                    <iframe width="100%" height="460px" src= {videoUrl} key={props.video.id} title={props.video.snippet.title}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {props.video.snippet.title}
                    </h4>
                    <p>
                        {props.video.snippet.description}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div> Loading... </div>
    )
}

export default VideoDetail