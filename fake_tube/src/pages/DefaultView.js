import axios from "axios"
import { useEffect, useState } from "react"
import Video from "../components/Video";
import { useLoaderData, useNavigate } from "react-router-dom";

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&key=[YOUR_API_KEY]
// KEY = AIzaSyDlDRpz38NR8R2JebraC_aGLdyh_B63Je0
// 

const client = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/'
})

//Loader function
export async function videoDataLoader(){
  const key = 'AIzaSyDlDRpz38NR8R2JebraC_aGLdyh_B63Je0';
  const response = await client.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PL&key=${key}`);
  console.log(response.data);
  return response.data.items;
}


export default function DefaultView() {


  const videosData = useLoaderData();
  // const [videosData, setVideosData] = useState([]);
  const navigate = useNavigate();

  // async function fetchDefaultVideos(){
  //   const response = await client.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PL&key=${key}`);
  //   console.log(response.data);
  //   setVideosData(response.data.items);
  // }

  function handleVideoClick(id){
    navigate(`${id}`);
  }

  // useEffect(()=>{
  //   fetchDefaultVideos();
  // }, []);

  const listVideos = videosData.map( (video) => {
    return(
        <Video
          key={video.id}
          id={video.id}
          title={video.snippet.title} 
          url={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
          onClick={()=>{handleVideoClick(video.id)}}
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

