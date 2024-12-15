import React from "react";
import { RiMessage3Fill, RiChatHistoryFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdDashboard } from "react-icons/md";



function SideBar() {
  return (
    <div className="pt-1 pl-1">
      <nav className="flex flex-col space-y-2 ">
        <div className="flex items-center justify-start bg-gray-300 rounded-[5px] h-[40px] pl-1 space-x-0 font-waght-[1px]">
          <MdDashboard className="size-5"/>
          <a className="pl-1 text-[15px]" href="/ ">
            Dashboard
          </a>
        </div>

        <div className="flex items-center justify-start bg-gray-300 rounded-[5px] h-[40px] pl-1 space-x-0 font-waght-[1px]">
          <MdFavorite className="size-5"/>
          <a className="pl-1 text-[15px]" href="/ ">
            Favorite
          </a>
        </div>

        <div className="flex items-center justify-start bg-gray-300 rounded-[5px] h-[40px] pl-1 space-x-0 font-waght-[1px]">
          <RiMessage3Fill className="size-5"/>
          <a className="pl-1 text-[15px]" href="/ ">
            Message
          </a>
        </div>

        <div className="flex items-center justify-start bg-gray-300 rounded-[5px] h-[40px] pl-1 space-x-0 font-waght-[1px]">
          <FaCartArrowDown className="size-5"/>
          <a className="pl-1 text-[15px]" href="/ ">
            Order
          </a>
        </div>

        <div className="flex items-center justify-start bg-gray-300 rounded-[5px] h-[40px] pl-1 space-x-0 font-waght-[1px]">
          <RiChatHistoryFill className="size-5"/>
          <a className="pl-1 text-[15px]" href="/ ">
            History
          </a>
        </div>

      </nav>
    </div>
  );
}

export default SideBar;
