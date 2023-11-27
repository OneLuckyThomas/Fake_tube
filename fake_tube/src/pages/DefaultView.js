import axios from "axios"
import { useEffect, useState } from "react"
import Video from "../components/Video";

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&key=[YOUR_API_KEY]
// KEY = AIzaSyDlDRpz38NR8R2JebraC_aGLdyh_B63Je0
// 


export default function DefaultView() {

  const [videosData, setVideosData] = useState([]);

  const client = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/'
  })
  const key = 'AIzaSyDlDRpz38NR8R2JebraC_aGLdyh_B63Je0';

  async function fetchDefaultVideos(){
    const response = await client.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PL&key=${key}`);
    console.log(response.data);
    setVideosData(response.data.items);
  }

  useEffect(()=>{
    fetchDefaultVideos();
  }, []);

  const listVideos = videosData.map( (video) => {
    return(
        <Video
          key={video.id}
          id={video.id}
          title={video.snippet.title} 
          url={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
        />
    )
 
  })

  return (
    <>
        <h1>DefaultView</h1>
        <div className="VideosContainer">
          {listVideos}
        </div>
    </>
  )
}
