interface IPictureProps {
  link: string;
  title: string;
}
function Picture(props: IPictureProps) {
  const { link, title } = props;
  return (
    <div>
      {link && <img src={link} alt={title} />}
    </div>
  );
}

export default Picture;
