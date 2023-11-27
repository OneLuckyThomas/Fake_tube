
export default function Video({ id, title, url, width, height }) {
  return (
    <div className="Video">
        <img src={url} width={width} height={height} alt="welp" id={id} />
        <label htmlFor={id}>{title}</label>
    </div>
  )
}
