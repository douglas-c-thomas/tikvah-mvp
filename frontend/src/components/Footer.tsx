import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // <footer className="bg-[#a0bf7c] text-white px-6 py-12">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
    //     {/* Left: Logo, tagline, CTA */}
    //     <div className="flex items-start space-x-4">
    //       {/* Vertical Divider */}
    //       <div className="w-1 h-48 bg-[#f2c78a] rounded-sm"></div>
    //       <div>
    //         {/* Logo */}
    //         <img
    //           src="/logo/tikvah-logo.png"
    //           alt="Tikvah Health & Wellness"
    //           className="h-10 mb-4"
    //         />
    //         {/* Headline */}
    //         <h2 className="text-white font-serif text-xl font-bold leading-snug mb-4">
    //           Our community cares<br />for the whole person.
    //         </h2>
    //         {/* CTA */}
    //         <a
    //           href="https://www.tikvahhealthandwellness.com/pricing"
    //           className="inline-block bg-pink-300 text-pink-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-pink-400 transition"
    //         >
    //           Learn More
    //         </a>
    //       </div>
    //     </div>

    //     {/* Center: Navigation */}
    //     <div className="grid grid-cols-2 text-sm font-sans gap-y-2">
    //       <div className="space-y-2">
    //         <a href="https://www.tikvahhealthandwellness.com" className="hover:underline block">ABOUT</a>
    //         <a href="https://www.tikvahhealthandwellness.com/pricing" className="hover:underline block">PLANS</a>
    //         <a
    //           href="https://tikvahhealthandwellness.practicebetter.io/#/6270463eb864bdac5f6d6f23/forms?f=64f1e0e0a34c0b2c22d8c294"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:underline block"
    //         >
    //           GET STARTED
    //         </a>
    //         <a href="https://www.tikvahhealthandwellness.com/pricing" className="hover:underline block">PRICING</a>
    //       </div>
    //       <div className="space-y-2">
    //         <a href="https://my.practicebetter.io/#/signin" target="_blank" rel="noopener noreferrer" className="hover:underline block">LOGIN</a>
    //         <a href="https://www.tikvahhealthandwellness.com/contact" className="hover:underline block">CONTACT</a>
    //         <a href="https://www.tikvahhealthandwellness.com/faq" className="hover:underline block">FAQ</a>
    //       </div>
    //     </div>

    //     {/* Right: Social + credits */}
    //     <div>
    //       <h3 className="text-white font-serif text-lg font-bold mb-2">Follow Us</h3>
    //       <div className="flex space-x-4 mb-4 text-2xl">
    //         <a href="https://www.instagram.com/tikvah_healthandwellness/" target="_blank" rel="noopener noreferrer">
    //           <FaInstagram className="hover:text-gray-200 transition" />
    //         </a>
    //         <a href="https://www.linkedin.com/company/tikvah-health-and-wellness" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedin className="hover:text-gray-200 transition" />
    //         </a>
    //       </div>
    //       <p className="text-sm text-white">
    //         © 2024 by Tikvah.<br />
    //         Proudly created in collaboration with{" "}
    //         <a href="https://www.myteamtandem.com/" target="_blank" rel="noopener noreferrer" className="underline">
    //           Team Tandem
    //         </a>.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer>
      <img src="/static/footer.png" alt="Tikvah Header" className="w-full" />
    </footer>
  );
}
