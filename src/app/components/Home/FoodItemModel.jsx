import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FoodItemModel({ isOpen, onClose, product }) {
  const [count, setcount] = useState(0);
  const [selectedTops, setSelectedTops] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);
  const [total, setTotal] = useState(0);

  // prvent bg scrolling
  const openModal = () => {
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    document.body.style.overflow = '';
  };

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
    if (count === 0) {
      setTotal(totalAcc);
    }
    if (selectedTops) {
      selectedTops.forEach((item) => (totalAcc += item.price));
    }
    if (selectedSides) {
      selectedSides.forEach((item) => (totalAcc += item.price));
    }
    setTotal(totalAcc * count);
  }, [count, selectedTops, selectedSides, product.price]);

  const handlAdtoCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  if (!isOpen) return null;
  openModal();


  return (
  
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="absolute flex flex-col px-6 py-2 bg-white rounded-lg shadow-2xl w-[80%] max-w-[400px] 2xl:max-w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <button
            className="text-2xl text-gray-500 lg:text-3xl 2xl:text-4xl hover:text-black"
            onClick={()=> {onClose(); closeModal()}}
          >
            &times;
          </button>
        </div>
        <p className="font-bold text-[18px] 2xl:text-[20px]">{product.name}</p>
        <p className="font-bold text-[12px] 2xl:text-[15px] text-[#616161]">
          {product.description}
        </p>
        <div className="flex">
          <p className="font-bold text-[16px] 2xl:text-[20px] text-[#616161] inline-flex ">
            {product.ratings}
            <IoStar className="mt-[4px] ml-1 mr-1" />
          </p>
          <p className="text-[16px] 2xl:text-[20px] text-[#616161] inline-flex font-bold">
            ({product.ratingsCount}
            <IoIosAdd className="mt-[4px]" />)
          </p>
          <p className="font-bold text-[16px] 2xl:text-[22px] text-[#616161] inline-flex ml-1">
            Rs:{product.price}/=
          </p>
        </div>
        <img className="" src={product.cartImg} alt="product.image" />
        
        {product.customize.top ?
        <>
        <p className="font-bold text-[12px] 2xl:text-[15px]">Add on Top</p>
        <p className="text-[9px] 2xl:text-[13px] text-[#616161] -mt-2">
          (optional)
        </p>
        </>:null}

        {product.customize.top?.map((item, index) => (
          <label key={index} className="block">
            <div className="flex ">
              <input
                type="checkbox"
                value={item}
                onChange={(e) => {
                  handleTopChange(e, item);
                }}
                className="w-[28px] h-[18px] xs:w-[20px] xs:h-[20px] 2xl:w-[26px] 2xl:h-[26px] mr-2 mt-[3px] border-4 rounded-full bg-gray-100  border-black"
              />
              <div>
                <p className="font-bold text-[10px] 2xl:text-[12px] mb-[-2px]">
                  {item.name}
                </p>
                <p className=" font-bold text-[10px] 2xl:text-[11px] text-[#616161]">
                  Add a RS.{item.price}/=
                </p>
              </div>
            </div>
          </label>
        ))}

          {product.customize.side ? (
            <>
              <p className="font-bold text-[12px] 2xl:text-[15px] 2xl-1 2xl:mt-2">
                Add a Side
              </p>
              <p className="text-[9px] 2xl:text-[13px] text-[#616161] -mt-2">
                (optional)
              </p>
            </>
          ) : null}
              {product.customize.side?.map((item, index) => (
                <label key={index} className="block">
                  <div className="flex 2xl:mt-1 ">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={(e) => {
                        handleSideChange(e, item);
                      }}
                      className="w-[28px] h-[18px] xs:w-[20px] xs:h-[20px] 2xl:w-[26px] 2xl:h-[26px] mr-2 mt-[3px] border-4 rounded-full bg-gray-100  border-black"
                    />
                    <div>
                      <p className="font-bold text-[10px] 2xl:text-[12px] mb-[-2px]">
                        {item.name}
                      </p>
                      <p className="font-bold text-[10px] 2xl:text-[11px] text-[#616161]">
                        Add a RS.{item.price}/=
                      </p>
                    </div>
                  </div>
                </label>
              ))}

        <div className="flex items-center justify-between mt-[-3px] ">
          <div className="w-[100px] h-[30px] flex my-4 2xl:w-[111px] gap-x-[4px] 2xl:gap-x-[6px] ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                decrement();
              }}
              className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-black rounded-full flex items-center justify-center"
              type="button"
            >
              <FaMinus
                color="white"
                className=""
              />
            </button>

            {count < 10 ? (
              <div className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center">
                <span className=" text-white text-[16px]  xs:text-[20px] ">
                  {count}
                </span>
              </div>
            ) : (
              <div className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center">
                <span className=" text-white text-[16px]  xs:text-[20px]">
                  {count}
                </span>
              </div>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                increment();
              }}
              className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center  "
              type="button"
            >
              <FaPlus
                className=""
                color="white"
              />
            </button>
          </div>

          <div className="flex ml-1">
            <button
              onClick={handlAdtoCart}
              type="button"
              className="bg-[#FF4C00] px-2 2xl:px-0 text-white font-bold rounded-full h-[24px] 2xl:h-[33px] w-[120px] xs:w-[160px] 2xl:w-[180px] md:w-[200px] shadow-2xl hover:bg-[#E54300] flex items-center justify-center xs:h-[30px]"
            >
              {total > 0 && window.innerWidth < 640 ? 
                  <span className=" font-bold text-[10px] xs:text-[12px] 2xl:text-[15px] 2xl:w-[103px]">
                  Add - 
                  </span>: (
                  <span className=" font-bold text-[10px] xs:text-[12px] 2xl:text-[15px] 2xl:w-[103px]">
                  Add to Cart -
                  </span>
              )}
              <span className=" py-1 text-white rounded-2xl 2xl:text-[15px] text-[10px] xs:text-[12px]">
                Rs.
                {total}
                /=
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItemModel;