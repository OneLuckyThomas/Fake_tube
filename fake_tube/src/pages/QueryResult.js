import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import Video from "../components/Video";

export default function SearchView() {

  const queryData = useLoaderData();
  const navigate = useNavigate();

  function handleVideoClick(id){
    navigate(`/${id}`);
  }

  const listVideos = queryData.map( (video) => {
    return(
        <Video
          key={video.id.videoId}
          id={video.id.videoId}
          title={video.snippet.title} 
          url={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
          onClick={()=>{handleVideoClick(video.id.videoId)}}
        />
    )
 
  })

  return (
    <div className="SearchResult">
      
      {listVideos}
      
    </div>
  )
}



// Loader function
export async function queryDataLoader({ params }){
  const key = 'AIzaSyDlDRpz38NR8R2JebraC_aGLdyh_B63Je0';
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${params.query}&key=${key}`);
  console.log(response.data);
  console.log(params.query);
  return response.data.items;
}