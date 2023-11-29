
export default function Video({ id, title, url, width, height, onClick }) {
  return (
    <div className="Video">
        <img src={url} width={width} height={height} alt="welp" id={id} onClick={onClick}/>
        <label htmlFor={id}>{title}</label>
    </div>
  )
}
