import Button from '../reusable/Button';
import FooterTextTitle from '../reusable/FooterTextTitle';
import FooterLink from '../reusable/FooterLink';
import { ReactComponent as FaceBook } from '../../assets/images/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';
import { ReactComponent as YouTube } from '../../assets/images/youtube.svg';

const Footer = () => {
  return (
    <div className='w-full bg-dark-white h-[40vh]'>
      <div className='h-[30vh] w-[76%] px-12 flex items-start mx-auto'>
        <div className='w-[40%] h-[30vh] flex flex-col items-start'>
          <div className='w-[70%] my-6'>
            <FooterTextTitle label='  Subscribe to our weekly newsletter' />
          </div>

          <div className='flex'>
            <input
              type='email'
              className='rounded-l-[2.5rem] focus:outline-none px-3'
              placeholder='email'
            />
            <Button
              label='submit'
              classes='-ml-6'
            />
          </div>
        </div>
        <div className='w-[60%] h-[30vh] flex items-start justify-around'>
          <div className='my-6 mx-3'>
            <FooterTextTitle label='Reach Us' />
            <ul className='mt-3'>
              <FooterLink
                href='#'
                label='Home'
              />
              <FooterLink
                href='#'
                label='Gallery'
              />
              <FooterLink
                href='#'
                label='About Us'
              />
              <FooterLink
                href='#'
                label='Contact Us'
              />
              <FooterLink
                href='#'
                label='Blog'
              />
            </ul>
          </div>
          <div className='my-6 mx-3'>
            <FooterTextTitle label='Be Social' />
            <ul className='mt-3'>
              <FooterLink
                href='#'
                label='FaceBook'
                isSocial={true}
                LinkIcon={FaceBook}
              />
              <FooterLink
                href='#'
                label='Twitter'
                isSocial={true}
                LinkIcon={Twitter}
              />
              <FooterLink
                href='#'
                label='LinkedIn'
                isSocial={true}
                LinkIcon={LinkedIn}
              />
              <FooterLink
                href='#'
                label='YouTube Channel'
                isSocial={true}
                LinkIcon={YouTube}
              />
            </ul>
          </div>
          <div className='my-12 mx-3'>
            <FooterTextTitle label='Quick links' />
            <ul className='mt-3'>
              <FooterLink
                href='#'
                label='Link 1'
              />
              <FooterLink
                href='#'
                label='Link 2'
              />
              <FooterLink
                href='#'
                label='Link 3'
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='w-[80%] border-t-2 border-white mx-auto flex items-center justify-center h-[10vh]'>
        <span className='text-dark-blue'>
          © 2023 Rwanda, All right Reserved. | Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
