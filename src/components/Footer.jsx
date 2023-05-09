import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#3b3a3a] shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="images/logo.png"
              className="h-16 w-16 mr-3"
              alt="apple logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Apple Az
            </span>
          </Link>
          <ul
            className="flex flex-wrap items-center mb-6 text-sm 
          font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a
                href="https://dadashussein.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Haqqımızda
              </a>
            </li>
            <li>
              <a
                href="https://dadashussein.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Gizlilik Siyasəti
              </a>
            </li>

            <li>
              <a
                href="https://dadashussein.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Əlaqə
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Apple Az™
          </Link>
          Bütün hüquqlar qorunur
        </span>
      </div>
    </footer>
  );
};

export default Footer;
