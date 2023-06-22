interface Props {
  AddButton?: any;
  bgImage?: string;
}

const StoryCard = ({ AddButton, bgImage }: Props) => {
  return (
    <div className='rounded-xl flex flex-col w-[20vw] min-h-[36vh] my-6'>
      <div
        className={`min-h-[22vh]  rounded-t-xl ${bgImage}  bg-no-repeat bg-cover `}
      />
      <div className='min-h-[14vh] rounded-b-xl bg-dark-blue text-white p-6'>
        <span className='my-3 font-bold'>
          Blandit dolor eu enim ac nisl enim sed diam.
        </span>
        <p>
          Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc
          adipiscing gravida tincidunt sed aliquet condimentum leo.
        </p>
        <button className='my-3'>
          <AddButton />
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
