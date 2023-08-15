import { Link } from "react-router-dom";
import LOGOPNG from "../pages/images/head_icon.png"
const Footer = () => {
    return (
        <footer className="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 md:py-12">
        <div className="container flex flex-wrap md:justify-between items-center md:items-start gap-12">
        <div className="grid gap-2 grow justify-items-center items-center md:justify-items-start basis-full md:basis-1/4">
            <img alt="" src={LOGOPNG} className="center w-auto sm:w-15 lg:w-20"/>
            <p className="text-muted text-sm text-center md:text-left">Need an agile software developer?<br />You found the dude!</p>
        </div>
          <nav aria-label="Secondary navigation" className="text-sm flex flex-col items-center sm:items-start sm:flex-row text-center sm:text-left gap-6 justify-between md:justify-around grow basis-full md:basis-1/2 mt-2">
            <div className="grid gap-3">
              <p className="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">Contents</p>
              <ul aria-label="Traverse Locations">
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">Contact Us</p>
              <ul aria-label="Contact Traverse">
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    Email
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    );
}

export default Footer;