interface IIconProps {
  url: string;
  reactIcon: object;
}

function Icon({ url, reactIcon }: IIconProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="px-2" style={{ color: '#ec7309' }}>
      {reactIcon}
    </a>
  );
}

export default Icon;
