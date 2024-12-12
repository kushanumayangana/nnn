import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FoodItemModel({ isOpen, onClose, product }) {
    const [count, setcount] = useState(0);
  const [selectedTops, setSelectedTops] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);
  const [total,setTotal] = useState(0);
  //counter
  const increment = () => {
    if (count < 99) {
      setcount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  //get selected items from check box
  const handleTopChange = (e, item) => {
    const { checked } = e.target;
    setSelectedTops((prev) =>
      checked
        ? [...prev, item]
        : prev.filter((selectItem) => selectItem.name !== item.name)
    );
  };
  //get selected items from check box
  const handleSideChange = (e, item) => {
    const { checked } = e.target;
    setSelectedSides((prev) =>
      checked
        ? [...prev, item]
        : prev.filter((selectItem) => selectItem.name !== item.name)
    );
  };
  //total calculation
  useEffect(() => {
    let totalAcc = product.price;
    if(count === 0){
      setTotal(totalAcc);
    }
        if(selectedTops){
          selectedTops.forEach((item)=>(
             totalAcc  += item.price 
          ))
        }
        if(selectedSides){
          selectedSides.forEach((item)=>(
             totalAcc += item.price 
          ))
        }
      setTotal(totalAcc * count);
  }, [count, selectedTops, selectedSides,product.price]);

  const handlAdtoCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black z-50 bg-opacity-80"
      
    >
      <div
        className="bg-white rounded-lg shadow-lg relative px-6 py-2 w-[90%] max-w-md sm:max-w-lg md:w-[600px]  flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <button
            className="text-4xl text-gray-500 hover:text-black"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="font-bold text-[20px]">{product.name}</p>
        <p className="font-bold text-[15px] text-[#616161]">
          {product.description}
        </p>
        <div className="flex">
          <p className="font-bold text-[18px] sm:text-[20px] text-[#616161] inline-flex ">
            {product.ratings}
            <IoStar className="mt-[4px] ml-1 mr-1" />
          </p>
          <p className="text-[18px] sm:text-[20px] text-[#616161] inline-flex">
            (200
            <IoIosAdd className="mt-[5px]" />)
          </p>
          <p className="font-bold text-[18px] sm:text-[20px] text-[#616161] inline-flex ml-1">
            {product.price}/=
          </p>
        </div>
        <img src={product.cartImg} alt="product.image" />

        <p className="font-bold text-[14px] sm:text-[18px] mt-2">Add on Top</p>
        <p className="text-[13px] sm:text-[15px] text-[#616161] -mt-2">(optional)</p>

        {product.customize.top.map((item, index) => (
          <label key={index} className="block">
            <div className="flex mt-1">
              <input
                type="checkbox"
                value={item}
                onChange={(e) => {
                  handleTopChange(e, item);
                }}
                className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] mr-2 mt-[3px] border-4 rounded-full bg-gray-100  border-black"
              />
              <div>
                <p className="font-bold text-[12px] sm:text-[15px] mb-[-2px]">{item.name}</p>
                <p className=" font-bold sm:text-[12px] text-[10px] text-[#616161]">
                  Add a RS.{item.price}/=
                </p>
              </div>
            </div>
          </label>
        ))}

        <p className="font-bold text-[14px] sm:text-[18px] sm-1 sm:mt-2">Add a Side</p>
        <p className="text-[13px] sm:text-[15px] text-[#616161] -mt-2">(optional)</p>

        {product.customize.side.map((item, index) => (
          <label key={index} className="block">
            <div className="flex sm:mt-1 ">
              <input
                type="checkbox"
                value={item}
                onChange={(e) => {
                  handleSideChange(e, item);
                }}
                className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] mr-2 mt-[1px] border-4 rounded-full bg-gray-100  border-black "
              />
              <div>
                <p className="font-bold text-[12px] sm:text-[15px] mb-[-2px]">{item.name}</p>
                <p className="font-bold sm:text-[12px] text-[10px] text-[#616161]">
                  Add a RS.{item.price}/=
                </p>
              </div>
            </div>
          </label>
        ))}

        <div className="flex items-center justify-between">
          <div className="w-[100px] h-[33px] flex my-4 sm:w-[111px]">
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                decrement();
              }}
              className="w-[33px] h-[33px] bg-black rounded-full mr-1 "
              type="button"
            >
              <FaMinus color="white" className="mt-[0.5px] sm:ml-[8.6px] ml-[6.9px]" />
            </button>

            {count < 10 ? (
              <div className="w-[33px] h-[33px] bg-[#FF4C00] rounded-full mr-1 flex items-center justify-center ">
                <span className=" text-white text-[20px] mt-[2.5px] mr-[1px]">
                  {count}
                </span>
              </div>
            ) : (
              <div className="w-[33px] h-[33px] bg-[#FF4C00] rounded-full mr-1 flex items-center justify-center">
                <span className=" text-white text-[20px]">
                  {count}
                </span>
              </div>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation(); 
                increment();
              }}
              className="w-[33px] h-[33px] bg-[#FF4C00] rounded-full mr-1 "
              type="button"
            >
              <FaPlus className=" sm:ml-[9px] ml-[7px]" color="white" />
            </button>
          </div>

          <div className="flex ml-1">
            <button
              onClick={handlAdtoCart}
              type="button"
              className="bg-[#FF4C00] px-2 sm:px-0 text-white font-bold rounded-full h-[30px] sm:h-[40px] w-full sm:w-[180px] md:w-[200px] lg:w-[230px] shadow-lg hover:bg-[#E54300] flex items-center justify-center"
            >
              {total>0 ? null : <span className=" font-bold text-[10px] sm:text-[15px] lg:w-[103px]">
                Add to Cart -
              </span>
               }
              <span className=" py-1 text-white rounded-lg sm:text-[15px] text-[10px]">
                RS.
                {total}
                /=
              </span>
            </button>
          </div>
        </div>

       {/* testing checking items
        <div className="mt-4">
          <p className="font-bold">Selected Tops:</p>
          <ul>
            {selectedTops.map((top, index) => (
              <li key={index}>
                {top.name} - RS.{top.price}/=
              </li>
            ))}
          </ul>

          <p className="font-bold">Selected Sides:</p>
          <ul>
            {selectedSides.map((side, index) => (
              <li key={index}>
                {side.name} - RS.{side.price}/=
              </li>
            ))}
          </ul>
        </div>*/}
      </div>
    </div>
  )
}

export default FoodItemModel