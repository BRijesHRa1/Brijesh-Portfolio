import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    return (
      <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        {/* Thank You Message */}
        <div className="flex flex-col items-center justify-center w-1/2 h-1/2 rounded-2xl bg-transparent transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
          <p className="text-6xl mb-4 font-semibold text-[#D4D4D4]">Get In Touch !</p>
          <p className="mt-3 text-lg text-[#b8b8b8] text-center px-10">
            I appreciate you reaching out. Feel free to get in touch anytime—I'm happy to connect and Feel free to mail me about any relevant job updates.
          </p>
        </div>
  
        {/* Profile Card */}
        <div className="mt-10">
          <div className="profile-card w-[300px] rounded-md shadow-xl bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            {/* Avatar with Image */}
            <div className="avatar w-full pt-5 flex flex-col items-center justify-center gap-1">
              <div className="relative flex items-center justify-center w-full z-40">
                <img
                  src="../../public/images/Brijesh_picture.png"
                  alt="Brijesh"
                  className="size-36 z-40 border-4 border-white rounded-full object-cover group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                />
                <div className="absolute bg-[#8B4513] z-10 w-full size-[60%] group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
  
            {/* Profile Details */}
            <div className="headings text-center leading-4">
              <p className="text-xl font-serif font-semibold text-[#434955]">BRIJESH</p>
              <p className="text-sm font-semibold text-[#434955]">DEVELOPER</p>
            </div>
  
            {/* Contact Info */}
            <div className="w-full flex items-center justify-center">
              <ul className="flex flex-col items-start gap-2 pb-3">
                {/* Phone */}
                <li className="flex items-center gap-2 border-b-[1.5px] border-b-stone-700 border-dotted text-xs font-semibold text-[#434955]">
                  <svg height="15" width="15" className="fill-stone-700 group-hover:fill-[#8B4513]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p>+1(205) 572-3427</p>
                </li>
  
                {/* Email */}
                <li className="flex items-center gap-2 border-b-[1.5px] border-b-stone-700 border-dotted text-xs font-semibold text-[#434955]">
                  <svg height="15" width="15" className="fill-stone-700 group-hover:fill-[#8B4513]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"></path>
                    <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path>
                  </svg>
                  <p>brijeshrai0721@gmail.com</p>
                </li>
              </ul>
            </div>
  
            {/* Separator Line */}
            <hr className="w-full h-3 bg-[#8B4513] group-hover:h-5 group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>

        
        {/* Logo's */}
        <div className="m-8 flex items-center justify-center gap-4">
  <a
    href="mailto:brijeshrai0721@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 ease-in-out transform hover:scale-150 text-[#D14836]"
  >
    <MdEmail size={18} />
  </a>
  <a
    href="https://www.linkedin.com/in/brijesh-rai-120712129/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 ease-in-out transform hover:scale-150 text-[#0077B5]"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/BRijesHRa1/Music-Genre-Classification-using-GTZAN"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 ease-in-out transform hover:scale-150 "
  >
    <FaGithub />
  </a>
        </div>

      </div>
    );
  };
  
  export default ContactMe;
  