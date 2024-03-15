import { Link } from "react-router-dom"
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
    <section id="hero" className='w-full'>
        <div className='flex flex-col md:flex-row justify-around items-center w-full'>

            <div className='hidden md:flex flex-col  hover:scale-110 duration-300'>
                <Link to="/doctor">
                    <img src="/assets/images/heroDoctor.png" alt="Doctor" className='h-20 w-20' />
                    <p className='flex flex-col gap-0 justify-center items-center text-sm font-medium'>Choose your <span className='flex justify-center ps-5 relative bottom-[5px] left-2'>doctor</span></p>
                </Link>
            </div>
            <h1 className='text-5xl flex flex-col gap-2' >
                <span>Take <span className='text-primary-orange ms-1 '>control</span></span>
                <span className='ms-20'>of your <span className='text-blue-400 ms-1'>Health.</span></span>
            </h1>

            <div className="flex md:flex-col justify-between md:justify-start items-center max-md:w-full py-5">
                <div className="flex flex-row justify-center items-center gap-2 lg:relative lg:right-48 lg:top-3">
                    <p className="flex flex-col text-sm text-gray-400 mt-2">read <span className=" relative bottom-[7px]">more</span></p>
                    <Link to="/blog">
                        <BsArrowUpRightCircleFill className="text-5xl text-primary-orange hover:rotate-45 duration-300"/>
                    </Link>
                </div>
                <p className="flex flex-col justify-center items-start text-sm">
                    Your gateway to 
                    <span className=" relative bottom-[5px]">health & care.</span>
                    <Link to="/about" className="text-gray-400 underline ">
                        Welcome
                    </Link>
                </p>
                
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 mt-2">
            <div className="flex flex-row md:flex-col justify-center items-center gap-3">
                <div className="card flex flex-col justify-center items-center rounded-xl bg-primary-teal p-2 text-sm px-4 hover:scale-105 duration-300">
                    <Link to="/doctorpage">
                        <div className=" flex flex-row">
                            <div className="flex flex-row items-center justify-start gap-1">
                                <div className="border-[1px] border-gray-300 rounded-full px-2">statistics</div>
                                <div className="border-[1.5px] border-gray-300 rounded-full px-[10px]">i</div>
                            </div>
                        </div>
                        <div className="py-1">
                            <div className="radial-progress text-dark-teal" style={{ "--value": "80", "--size": "6rem", "--thickness": "2.5px" }} role="progressbar">
                                <span className="text-2xl text-black ps-1">80%</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-3">
                            <div className="flex flex-col">
                                Succesfull <span className="relative bottom-[5px]">diagnoss</span>
                            </div>    
                            <BsArrowUpRightCircle className="text-2xl text-gray-700" />
                        </div>
                    </Link>
                </div>
                <Link to="/blog">
                <div className="card flex flex-col justify-between items-start rounded-xl bg-cover bg-center h-[174px] p-2 text-sm px-4 text-white hover:scale-105 duration-300" style={{ backgroundImage:"url('/assets/images/mountains.jpg')" }}>
                    <div className=" flex flex-row">
                        <div className="flex flex-row items-start justify-start gap-1">
                            <div className="border-[1.5px] border-white rounded-full px-2">well being</div>
                        </div>  
                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <div className="flex flex-col text-xl">
                            Mental <span className="relative bottom-[5px]">Health</span> <span className="relative bottom-[10px]">Support</span>
                        </div>    
                        <BsArrowUpRightCircle className="text-2xl text-white" />
                    </div>
                </div>
                </Link>
            </div>

            <div className="flex flex-row text-white gap-3 mb-auto me-6">
                <div className="bg-gray-300 rounded-full p-1 hover:rotate-45 duration-300">
                    <BsArrowLeft className="font-bold"/>
                </div>
                <div className="bg-gray-200 rounded-full p-1 hover:-rotate-45 duration-300">
                    <BsArrowRight className="font-bold"/>
                </div>
            </div>
            <Link to="/doctorpage">
            <div className="card flex flex-col justify-between items-start rounded-xl bg-cover bg-center h-[370px] w-[330px] p-2 text-sm px-4 text-white hover:scale-105 duration-300" style={{ backgroundImage:"url('/assets/images/videoCall.png')" }}>
                <div className="flex flex-col text-xl">
                                Virtual <span className="relative bottom-[5px]">Consultation</span>
                </div>    
                <BsArrowUpRightCircle className="text-2xl text-white" />
            </div>
            </Link>
            <Link to="/diagnosis">
            <div className="flex flex-row gap-3 md:gap-4">
                <div className="card flex flex-col justify-end items-center rounded-xl bg-cover bg-center h-[370px] w-[170px] p-2 text-sm px-4 text-white hover:scale-105 duration-300" style={{ backgroundImage:"url('/assets/images/mobile.png')" }}>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <div className="border-[1.5px] border-white rounded-full px-2">Telemedicine</div>
                        <div className="border-[1.5px] border-white rounded-full px-[10px]">i</div>
                    </div>   
                </div>
                <div className="card flex flex-col justify-center items-center rounded-xl bg-white h-[370px] w-[170px] p-2 text-sm px-4 text-white hover:scale-105 duration-300">
                    <div className="flex flex-col  items-start h-full">
                        <div className="flex flex-col text-black text-2xl mb-auto">
                            <h1>Telehealth <span className="relative bottom-[10px]">solutions.</span> </h1> 
                            <div className="p-2 flex items-start justify-start">
                                <div className="text-white text-[15px] bg-primary-orange rounded-full flex justify-center px-[10px] relative bottom-[10px] right-[10px]">
                                    Explore ⟶
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start text-black mt-auto">
                            <div className="border-[1.5px] border-gray-400 rounded-full px-2 mb-2 flex">about</div>
                            <p className="text-xs ">Our platform<br /> connects you with<br /> trust healthcare.</p>
                            <p className="text-xs mt-2 text-gray-400 underline">Read more.</p>
                        </div>
                    </div>  
                </div>
            </div>
            </Link>
            <Link to="/diagnosis">
            <div className="flex flex-row md:flex-col text-gray-700 gap-3 my-auto me-6 ">
                <div className="border-gray-700 border-[1px] px-2 rounded-full p-1 hover:scale-110 duration-300">
                    in
                </div>  
                <div className="border-gray-700 border-[1px] px-3  rounded-full p-1 hover:scale-110 duration-300 flex justify-center">
                    f
                </div>
                <div className="border-gray-700 border-[1px] px-2  rounded-full p-1 py-2 hover:scale-110 duration-300 flex justify-center">
                    <FaXTwitter className="text-sm" />
                </div>
            </div>
            </Link>

        </div>
    </section>


        
    </>
  )
}

export default Home