
import { logo } from '../assets'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa'

export const Header = () => {
    return (
    <div className='grid grid-flow-col md:grid-flow-row'>
    <div className="h-18 top-navbar py-3 md:px-14 w-full flex flex-col md:flex-row 
    items-center bg-white justify-between">
        <a 
            href='https://alejandralopeznoriega.com/'
            target="_blank" 
            className="md:h-150 md:w-120 self-center mx-2"
        >
            <img className='h-16 self-center' src={logo} alt=""/>
        </a>
        <div className='hidden md:block'>
        <div className="py-1 pr-20 text-gray-300 font-semibold 
                    uppercase duration-300 social-media flex flex-row">
            
            <a className="px-1 text-3xl cursor-pointer facebook 
                          duration-300"
                href='https://www.facebook.com/AlejandraLopezNoriega.org'
                target="_blank"          
            >
                <FaFacebookSquare />    
            </a>
            <a className="px-1 text-3xl cursor-pointer twitter 
                          duration-300"
                href='https://twitter.com/alejandralopesn'
                target="_blank"
            >
                <FaTwitterSquare />    
            </a>
            <a className="px-1 text-3xl cursor-pointer instagram 
                          duration-300"
                href='https://www.instagram.com/alejandralopeznoriega2018/'
                target="_blank"
            >
                <FaInstagramSquare />    
            </a>
            <a className="px-1 text-3xl cursor-pointer youtube 
                          duration-300"
                href='https://www.youtube.com/user/alejandralopezn'
                target="_blank"
            >
                <FaYoutubeSquare />    
            </a>
        </div>
        </div> 
    </div> 
</div>
  )
}


