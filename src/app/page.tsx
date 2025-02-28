import Image from "next/image";
import Link from "next/link";

export default function HackIndiaLandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/backgroundvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#230833] to-[#230c32e0] ">
        {/* Header */}
        <header className="bg-black p-4 flex justify-between items-center border-b border-[#b026ff] relative z-10">
          <div className="flex items-center ml-[40px]">
            <Image
              src="/db97ca76b35c74671e7ac8eefd3fce76.png"
              alt="DecodeBlock Logo"
              width={240}
              height={40}
              className="mr-2"
            />
          </div>
          <div className="relative w-[150px] h-[53px] flex items-center justify-center">
      {/* Left Vertical Bar (Rectangle 1120) */}
      <div className="absolute left-0 top-0 w-[5.9px] h-[53px] border-[0.7px] border-[#B026FF]"></div>

      {/* Main Button */}
      <button className="relative w-[141.56px] h-[52.28px] flex items-center justify-center text-white font-[PROXON] text-[16px] tracking-wide uppercase bg-black border border-[#B026FF] custom-clip-path transition-all duration-300 ease-in-out hover:bg-[#111] hover:shadow-[0_0_15px_#B026FF]">
        {/* Outer Neon Border */}
        <div className="absolute inset-0 border border-[#B026FF] custom-clip-path pointer-events-none"></div>

        {/* Sign-In Text */}
        <span className="relative z-10">Sign in</span>
      </button>
    </div>
        </header>

        {/* Navigation */}
        <nav className="absolute flex flex-row items-center gap-50 px-8 py-4 bg-[#28083A] border border-[rgba(223,223,223,0.1)] shadow-md shadow-[rgba(217,217,217,0.3)] rounded-[10px] left-[calc(50%-900px/2)] top-[150px] w-[900px] h-[70px] Justify-start">
          {/* HACKINDIA Logo */}
          <div className="flex flex-row items-center gap-2 absolute left-[-240px]">
            {/* Logo Image */}
            <div
              className="w-[38px] h-[38px] bg-cover bg-center"
              style={{ backgroundImage: "url('/cba1e0b03651a98d1e0fc4f2b736c984.png')" }}
            ></div>
            {/* HACKINDIA Text */}
            <span className="text-white font-[PROXON] text-[22px] leading-[165%] tracking-[0.1em]">
              HACKINDIA
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6 text-white text-sm md:text-base ml-auto">
    {[
      { label: "Overview", width: "102px" },
      { label: "Create Team", width: "125px" },
      { label: "Prizes & Sponsors", width: "159px" },
      { label: "FAQs", width: "102px" },
      { label: "Judges & Rules", width: "125px" },
      { label: "Resources", width: "102px" },
    ].map((item, index) => (
      <li
        key={index}
        className={`relative flex items-center justify-center h-[36px] border border-[#B026FF] text-white font-[PROXON] text-[12px] leading-[147.5%] tracking-[0.03em] cursor-pointer transition-all duration-300 ease-in-out
          ${item.label === "Overview" ? "bg-[#B026FF] text-black font-bold" : "hover:shadow-[0_0_15px_#B026FF] hover:bg-[#111]"}
        `}
        style={{ width: item.width }}
      >
        {item.label}
        {/* Side Indicator Line */}
        <div className="absolute w-[4px] h-[36px] left-0 bottom-0 border border-[#B026FF] transform scale-y-[-1]" />
      </li>
    ))}
  </ul>
 </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 relative">
          {/* SingularityNET Styled Text (Above the Title) */}
          <div 
            className="absolute w-[279.93px] h-[76px] left-1/2 transform -translate-x-1/2 top-[150px] bg-cover bg-center"
            style={{ backgroundImage: "url('/4ff18847d83ad83389f4cf79d0d06b51.png')" }}
          ></div>

          {/* HackIndia Title (Increased Margin for More Space) */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center mt-[200px]">
            <span className="relative inline-block px-4 py-1 bg-[#F86720] text-white border border-[rgba(255,255,255,0.5)] rounded-[3px]">Ha</span>
            <span className="text-white">ckIndia2025</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-white text-xl md:text-2xl mb-8">India's Biggest Web3 & AI Hackathon</h2>
          {/* Date Section */}
          <div className="flex items-center justify-center w-[377px] h-[52px] bg-gradient-to-r from-[#6A1799] to-[#230833] border border-[rgba(217,217,217,0.3)] rounded-[10px] text-white font-bold text-[22px] tracking-[0.03em]">
            February 28 - September 28
          </div>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row items-center justify-center text-xl mb-12 space-y-4 md:space-y-0 mt-6">
            <span className="font-bold">
              <span className="text-[#F86720]">$150+</span> 
              <span className="text-white"> Prize Pool</span>
            </span>
            <span className="text-white mx-4 hidden md:block">|</span>
            <span className="font-bold">
              <span className="text-[#F86720]">150+</span> 
              <span className="text-white"> Universities</span>
            </span>
            <span className="text-white mx-4 hidden md:block">|</span>
            <span className="font-bold">
              <span className="text-[#F86720]">25,000+</span> 
              <span className="text-white"> Students</span>
            </span>
          </div>

          {/* Register Button */}
          <button className="relative w-[150px] h-[53px] flex items-center justify-center text-white font-proxon text-[16px] tracking-[0.03em] border border-[#B026FF] bg-[rgba(217,217,217,0.05)] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#B026FF] hover:bg-[#111]">Register Now

  {/* Outer Neon Border (Same as Sign-In Button) */}
  <div className="absolute inset-0 border border-[#B026FF] pointer-events-none" />

  {/* Side Indicator Line */}
  <div className="absolute w-[5.9px] h-[53px] left-0 bottom-0 border border-[#B026FF] transform scale-y-[-1]" />
</button>
</main>
</div>

      {/* University Logos Section */}
      <div className="relative z-20 flex justify-center items-center mt-6">
        <Image
          src="/University logos.png" // Ensure the file is in the public folder
          alt="University Logos"
          width={1600} // Adjust width as needed
          height={3000} // Adjust height as needed
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Stats & Video Section */}
      <div
  className="relative py-16 px-4 bg-[#28083A] bg-cover bg-center"
  style={{ backgroundImage: "url('/aadaaac53bc80444bec43a33b5608c69.png')" }}
> 
      <div className="relative py-16 px-4">
        {/* Lightning Effect */}
        <div className="absolute left-[-19px] top-[30px] opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,1)]">
          <Image
            src="/63ebbf96cc6c8f90c6e371437c4a0dfe.png"
            alt="Lightning Effect"
            width={273}
            height={70}
            className="transform scale-y-[-1]" // This flips the image vertically
          />
        </div>
        <br />
    

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] items-center gap-16">
          {/* Stats Section */}
          <div className="text-white space-y-10 flex flex-col items-start">
            {/* Main Stat */}
            <div className="text-left top-[100px] gap-[50px] md:text-center md:ml-[-50px]">
              <h3 className="text-[50px] font-bold font-['PROXON'] leading-[75px] tracking-[0.06em] text-white drop-shadow-[0px_4px_4px_#D9D9D9]">
                150+
              </h3>
              <p className="text-lg text-white">Universities participating</p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-3 gap-10">
              {/* Judges Section - Slightly Left */}
              <div className="flex flex-col items-center md:items-start md:ml-[-10px]">
                <h3 className="text-[50px] font-[400] font-['PROXON'] leading-[75px] tracking-[0.06em] text-white drop-shadow-[0px_4px_4px_#D9D9D9]">
                  72+
                </h3>
                <p className="text-lg">Judges</p>
              </div>

              {/* Hackathons Section */}
              <div className="flex flex-col items-center">
                <h3 className="text-[50px] font-[400] font-['PROXON'] leading-[75px] tracking-[0.06em] text-white drop-shadow-[0px_4px_4px_#D9D9D9]">
                  21
                </h3>
                <p className="text-lg">Hackathons</p>
              </div>

              {/* Great Speakers Section */}
              <div className="flex flex-col items-center">
                <h3 className="text-[50px] font-[400] font-['PROXON'] leading-[75px] tracking-[0.06em] text-white drop-shadow-[0px_4px_4px_#D9D9D9]">
                  36+
                </h3>
                <p className="text-lg">Great Speakers</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full flex justify-center">
            <div className="w-[641px] h-[451px] rounded-lg overflow-hidden relative mt-[-10px] ml-[10px]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="/ebada1b52857e4988307ef8c402ddf50.png"
                title="HackIndia 2024 Finals"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Logos */}
      <div className="bg-[#D9D9D9] py-4 px-2 mb-12 relative z-20">
        <div className="max-w-[1445px] h-[90px] mx-auto flex flex-wrap justify-center items-center gap-[60px] mt-[-20px] ml-[15px] ">
          {[
            "/b8368f0a5c093c9cacc42c51816d0569.png",
            "/7edd37d4ddffc219568ce35e14235161.png",
            "/21f2465870c7baad8c0df29814e3674f.png",
            "/1551bb23c6b356c720c8aa47bed99da5.png",
            "/51288f69237ccb3de37ba3bc1706c38c.png",
            "/45a1c69d059214a180763ae0bbee4659.png"
          ].map((logo, index) => (
            <Image key={index} src={logo} alt={`Sponsor Logo ${index + 1}`} width={178} height={100} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className=" text-white py-6 px-4relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>Copyright © 2024 DecodeBlock</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#f86720]">
              Help Center
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#f86720]">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#f86720]">
              Privacy policy
            </Link>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}