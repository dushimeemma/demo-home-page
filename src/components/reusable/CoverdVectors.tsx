interface Props {
  classes?: string;
}

const CoverdVectors = ({ classes }: Props) => {
  return (
    <div
      className={` bg-rounded-vectors bg-no-repeat bg-cover h-[4.731rem] w-full ${classes}`}
    />
  );
};

export default CoverdVectors;
