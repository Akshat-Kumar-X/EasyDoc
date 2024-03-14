import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-8 pt-3">
      
      <div className="text-xl" id="logo">
        <Link to="/" className='flex justify-center items-center'>
          <img src="/assets/images/stethoscope.png" alt="stethoscope" className='w-10 h-10'/>
          EasyDoc
        </Link>
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <div className="border-[1.5px] border-gray-300  px-4 py-[2px] rounded-full hover:scale-110 hover:shadow-sm duration-300">
            menu
          </div>
        </Link>
        <div className=" items-center hover:scale-110 duration-300 hidden sm:flex">
          <Link to="/">FAQs</Link>
        </div>
      </div>
      

      <div className="hidden sm:flex gap-6">
        
        <ul className="flex gap-6">
          <li className="flex items-center hover:scale-110 duration-300">
            <Link to="/diagnosis"> diagnosis </Link>
          </li>
          
          <li className="flex items-center hover:scale-110 duration-300">
            <Link to="/about"> about </Link>
          </li>
           
          <li className="flex items-center hover:scale-110 duration-300">
            <Link to="/contact"> contact </Link>
          </li>

          <li>
            <Link to="/login">
              <div className="flex gap-1 border-[1.5px] border-gray-300  px-4 py-[2px] rounded-full hover:scale-110 hover:shadow-sm duration-300">
                <span className="">login</span><span className="text-primary-orange">●</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;
