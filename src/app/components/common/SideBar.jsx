import React from "react";
import { RiMessage3Fill, RiChatHistoryFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavorite, MdDashboard } from "react-icons/md";

function SideBar() {
  return (
    <div className="fixed h-full p-2 bg-gray-100">
      <nav className="flex flex-col space-y-2">
        <div className="flex items-center justify-start h-10 p-2 pl-2 bg-gray-300 rounded-md">
          <MdDashboard className="text-xl" />
          <a className="pl-2 text-[10px]" href="/">
            Dashboard
          </a>
        </div>

        <div className="flex items-center justify-start h-10 p-2 pl-2 bg-gray-300 rounded-md">
          <MdFavorite className="text-xl" />
          <a className="pl-2 text-[10px]" href="/">
            Favorite
          </a>
        </div>

        <div className="flex items-center justify-start h-10 p-2 pl-2 bg-gray-300 rounded-md">
          <RiMessage3Fill className="text-xl" />
          <a className="pl-2 text-[10px]" href="/">
            Message
          </a>
        </div>

        <div className="flex items-center justify-start h-10 p-2 pl-2 bg-gray-300 rounded-md">
          <FaCartArrowDown className="text-xl" />
          <a className="pl-2 text-[10px]" href="/">
            Order
          </a>
        </div>

        <div className="flex items-center justify-start h-10 p-2 pl-2 bg-gray-300 rounded-md">
          <RiChatHistoryFill className="text-xl" />
          <a className="pl-2 text-[10px]" href="/">
            History
          </a>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
