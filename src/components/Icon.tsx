interface IIconProps {
  url: string;
  reactIcon: object;
  color: string;
}

function Icon({ url, reactIcon, color }: IIconProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="px-2" style={{ color }}>
      {reactIcon}
    </a>
  );
}

export default Icon;
