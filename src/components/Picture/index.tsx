interface IPictureProps {
  link: string
  title: string
}
function Picture(props: IPictureProps) {
  const { link, title } = props
  return (
    <div>
      <img className="image" src={link} alt={title} />
    </div>
  )
}

export default Picture
