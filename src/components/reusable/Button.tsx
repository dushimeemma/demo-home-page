interface Props {
  label?: string;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ label, classes, onClick }: Props) => {
  return (
    <button
      className={`bg-dark-green px-6 py-3 rounded-[2.5rem] text-dark-blue ${classes}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
