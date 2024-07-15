import { Link } from "waku";
import LoginButton from "./button/login-button.js";
import PostButton from "./button/post-button.js";

export const Header = () => {
  return (
    <header className="w-full h-16 min-h-10% bg-white p-4 font-['IBM Plex Sans JP','sans-serif']">
      <div className="flex flex-row">
        <h2 className="text-lg font-bold tracking-tight font-bold font-size-64">
          Waku starter
        </h2>
        <ul className="flex flex-row ml-auto mr-2 listyle-none gap-16 font-bold font-size-16">
          <li className="flex flex-row">
            <Link to="/" className="text-blue-500 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 ">
              About
            </Link>
          </li>
          <li>
            <li>
              <PostButton />
            </li>
          </li>
          <li>
            <LoginButton />
          </li>
        </ul>
      </div>
    </header>
  );
};
