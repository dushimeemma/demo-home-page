import TextHeader from './TextHeader';

interface Props {
  title?: string;
  children?: JSX.Element;
  containerClasses?: string;
  dividerClasses?: string;
}

const TextCard = ({
  title,
  children,
  containerClasses,
  dividerClasses,
}: Props) => {
  return (
    <div
      className={`w-[80%] mx-auto mb-6 flex flex-col justify-around items-start min-h-[15rem] ${containerClasses}`}
    >
      <TextHeader
        title={title}
        dividerClasses={dividerClasses}
      />
      {children}
    </div>
  );
};

export default TextCard;
