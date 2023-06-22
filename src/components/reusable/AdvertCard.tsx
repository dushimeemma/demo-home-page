interface Props {
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const AdvertCard = ({ classes, onClick }: Props) => {
  return (
    <div
      className={`border-2 border-dark-green min-w-[17.5vw] min-h-[35vh] rounded-lg cursor-pointer ${classes}`}
      onClick={onClick}
    />
  );
};

export default AdvertCard;
