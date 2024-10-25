import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-background pt-8 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 md:mb-0">
            <FaGraduationCap size={80} />
            <div className="mr-4">
              <h3 className="text-2xl font-bold">TZ Education Provider</h3>
              <p className="text-xs">
                Empowering futures through quality education
              </p>
            </div>
          </div>
          <Link
            className="bg-white rounded p-4"
            to="https://asic.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/asic-logo.svg"
              alt="ASIC Logo"
              className="h-16 object-contain"
            />
          </Link>
        </div>
      </div>
      <div className=" mt-8 bg-black border-t border-foreground">
        <div className="container mx-auto px-6 flex justify-between text-sm py-2">
          <div className="text-left">
            © {new Date().getFullYear()} TZ Education Provider. All rights
            reserved.
          </div>

          <div className="text-right hidden md:block">
            <Link to="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
