import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'

export default function Video() {
  const { vID } = useParams();
  const url = `https://www.youtube.com/watch?v=${vID}`;
  return (
    <div className="VideoPlayer">
        
      <h2>{vID}</h2>
      <ReactPlayer url={url} controls={true}/>
      
    </div>
  )
}
