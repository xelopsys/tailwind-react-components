import { FcAbout, FcAcceptDatabase, FcAddColumn, FcAddDatabase, FcAddImage, FcPrevious, FcNext } from "react-icons/fc";
import React, { useState } from 'react';
// import Users from "./components/Users";
function App() {
  const [show, setShow] = useState(true);

  const icons = {
    1: <FcAbout className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    2: <FcAcceptDatabase className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    3: <FcAddColumn className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    4: <FcAddDatabase className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    5: <FcAddImage className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,

  }
  const bottomIcons = {
    1: <FcAbout className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    2: <FcAcceptDatabase className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
    3: <FcAddColumn className=" h-8 w-8 fill-current text-gray-400 group-hover:text-blue-500" />,
  }

  const handleClose = (e) => {
    setShow(false);
    e.preventDefault();
  }
  const handleShow = (e) => {
    setShow(true);
    e.preventDefault();
  }
  return (
    <div className="flex w-full h-screen max-h-sm font-sans text-gray-900 bg-white" lazyLoad="true">
      {show &&
        <aside className="flex flex-col py-4 px-6 w-52 h-full  border-r border-gray-200 relative">
          <button className="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200" onClick={handleClose}>
            <FcPrevious className=" h-4 w-4 fill-current text-gray-400 group-hover:text-blue-500" />
          </button>
          <a href="/" className="">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" className="rounded-full h-12 w-12 m-auto" />
          </a>

          <ul className="flex flex-col flex-auto  gap-y-5 pt-12">
            {icons && Object.keys(icons).map((key) => {
              return (
                <li className="">
                  <a href="/" className=" flex  gap-x-3 items-center group">
                    {icons[key]}
                    <span className="inline-block text-sm leading-6 text-gray-500 group-hover:text-gray-800 group-hover:font-semibold">Item</span>
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className="  flex flex-col flex-auto gap-y-3 pt-16">
            {bottomIcons && Object.keys(bottomIcons).map((key) => {
              return (
                <li className="">
                  <a href="/" className="flex gap-x-3 items-center group">
                    {bottomIcons[key]}
                    <span className="inline-block text-sm leading-6 text-gray-500  group-hover:text-gray-800 group-hover:font-semibold">Item</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </aside>

      }
      {
        !show &&
        <aside className="relative h-full w-0 px-2">
          <button className="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200" onClick={handleShow}>
            <FcNext className=" h-4 w-4 fill-current text-gray-400 group-hover:text-blue-500" />
          </button>
        </aside>
      }
    </div >
    // <div>
    //   <Users />
    // </div>
  );
}

export default App;
