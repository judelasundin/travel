import Image from "next/image"
import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover backdrop-opacity-60 custom-img">
        <div/>
        <div className="text-center">
            <h2 className="text-6xl font-bold mb-4 text-white">Explore the Best of the Philippines</h2>
            <p className=" text-white mb-10">Discover Authentic Adventures and Hidden Gems with Travel Authentic Philippines</p>
            <SearchBar/>
        </div>
      
    </div>
  )
}

export default Hero
