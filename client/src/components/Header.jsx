import React from "react";
import { FaCarSide, FaTaxi, FaPlane, FaBed, FaCalendar } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = (props) => {
    const [date, setDate] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openDate, setOpenDate] = React.useState(false);

    const [openOptions, setOpenOptions] = React.useState(false);

    const [options, setOptions] = React.useState({
        adult: 1,
        children: 0,
        roomNo: 9,
    });

    const optionHandler = (name, operator) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operator === "pos" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div className="bg-blue-600 text-white flex justify-center relative">
            <div className={`${props.type === "list" ? 'w-full max-w-[1024px] mt-5 mx-0 mb-0 ' : 'w-full max-w-[1024px] mt-5 mx-0 mb-24'}`}>
                <div className="flex gap-10">
                    <div className="flex items-center gap-2 p-2 border-2 border-white rounded-full">
                        <FaBed></FaBed>
                        <span>Stay</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaCarSide></FaCarSide>
                        <span>Car Rentals</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaPlane></FaPlane>
                        <span>FLight</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaBed></FaBed>
                        <span>Attractions</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaTaxi></FaTaxi>
                        <span>Taxi</span>
                    </div>
                </div>
                {props.type !== "list" && (
                    <React.Fragment>
                        <h1 className="my-5 mx-0 text-2xl font-bold">Discounts?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                            odio!
                        </p>
                        <button className="bg-blue-500 text-white font-medium border-none p-2">
                            Sign In
                        </button>
                        <div className="h-7 bg-white border-2 border-yellow-400  rounded flex items-center justify-between py-6 px-7 absolute bottom-[-22px] w-full max-w-5xl">
                            <div className="flex gap-2 items-center ">
                                <FaBed color="#D3D3D3" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-none outline-none"
                                />
                            </div>
                            <div className="flex gap-2 items-center ">
                                <FaCalendar color="#D3D3D3" />
                                <span
                                    className="text-zinc-400 cursor-pointer"
                                    onClick={() => setOpenDate(!openDate)}
                                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="absolute top-12 z-10"
                                    />
                                )}
                            </div>
                            <div className="flex gap-2 items-center ">
                                <BsFillPersonFill color="#D3D3D3" />
                                <span
                                    className="text-zinc-400 cursor-pointer"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >{`${options.adult} adult . ${options.children} children . ${options.roomNo} room`}</span>
                                {openOptions && (
                                    <div className="absolute top-12 bg-white text-zinc-500 rounded shadow-lg gap-2 z-10 p-2">
                                        <div className="w-48 flex justify-between">
                                            <span>Adult</span>
                                            <div className="flex items-center gap-2 text-xs text-black">
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer disabled:cursor-not-allowed"
                                                    onClick={() => optionHandler("adult", "neg")}
                                                    disabled={options.adult === 0}
                                                >
                                                    -
                                                </button>
                                                <span>{options.adult}</span>
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer"
                                                    onClick={() => optionHandler("adult", "pos")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-48 flex justify-between">
                                            <span>Children</span>
                                            <div className="flex items-center gap-2 text-xs text-black">
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer disabled:cursor-not-allowed"
                                                    onClick={() => optionHandler("children", "neg")}
                                                    disabled={options.children === 0}
                                                >
                                                    -
                                                </button>
                                                <span>{options.children}</span>
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer"
                                                    onClick={() => optionHandler("children", "pos")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-48 flex justify-between">
                                            <span>Room</span>
                                            <div className="flex items-center gap-2 text-xs text-black">
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer disabled:cursor-not-allowed"
                                                    onClick={() => optionHandler("roomNo", "neg")}
                                                    disabled={options.roomNo === 0}
                                                >
                                                    -
                                                </button>
                                                <span>{options.roomNo}</span>
                                                <button
                                                    className="w-7 h-7 border-2 border-solid border-blue-500 cursor-pointer"
                                                    onClick={() => optionHandler("roomNo", "pos")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2 items-center ">
                                <button className="bg-blue-400 p-2 rounded">Search</button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Header;
