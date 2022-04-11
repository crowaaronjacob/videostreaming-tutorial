import React from 'react';
import ReactPlayer from 'react-player';

type Props = {
  url: string
}

const VideoPlayer: React.FC<Props> = ({ url }) => {
  const [videoComponent, setVideoComponent] = React.useState<any>(null);
  React.useEffect(() => {
    setVideoComponent(<ReactPlayer url={url} controls={true}/>);
  }, [])
  return (
    <div>
      {videoComponent}
    </div>
  )
}

export default VideoPlayer
