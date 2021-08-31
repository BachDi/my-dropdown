interface IOptiopProps {
  value: string;
  name: string;
}

const Option = (props: IOptiopProps) => {
  const { value, name } = props;
  return <option value={value}>{name}</option>;
};
export default Option;
