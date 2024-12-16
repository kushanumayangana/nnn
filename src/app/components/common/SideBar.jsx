import React from "react";
import { RiMessage3Fill, RiChatHistoryFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavorite, MdDashboard } from "react-icons/md";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-full p-4 bg-gray-200">
      <nav className="flex flex-col space-y-2">
        <div className="flex items-center justify-start w-full h-10 pl-2 bg-gray-300 rounded-md">
          <MdDashboard className="text-xl" />
          <a className="pl-2 text-base" href="/">
            Dashboard
          </a>
        </div>

        <div className="flex items-center justify-start w-full h-10 pl-2 bg-gray-300 rounded-md">
          <MdFavorite className="text-xl" />
          <a className="pl-2 text-base" href="/">
            Favorite
          </a>
        </div>

        <div className="flex items-center justify-start w-full h-10 pl-2 bg-gray-300 rounded-md">
          <RiMessage3Fill className="text-xl" />
          <a className="pl-2 text-base" href="/">
            Message
          </a>
        </div>

        <div className="flex items-center justify-start w-full h-10 pl-2 bg-gray-300 rounded-md">
          <FaCartArrowDown className="text-xl" />
          <a className="pl-2 text-base" href="/">
            Order
          </a>
        </div>

        <div className="flex items-center justify-start w-full h-10 pl-2 bg-gray-300 rounded-md">
          <RiChatHistoryFill className="text-xl" />
          <a className="pl-2 text-base" href="/">
            History
          </a>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;