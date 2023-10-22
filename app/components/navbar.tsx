"use client";

import Link from "next/link";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import {
  FaLayerGroup,
  FaHeadphonesAlt,
  FaUserPlus,
  FaUserMinus,
} from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

import Player from "./player";
import { useEffect, useState } from "react";
import axios from "axios";

type Login = "Logged In" | "Logged Out";

const linksData = [
  {
    icon: <AiFillHome className="text-3xl fill-gray-600" />,
    text: "Home",
    path: "/",
  },
  {
    icon: <MdAddBox className="text-3xl fill-gray-600" />,
    text: "Add",
    path: "/songs/add",
  },
  {
    icon: <FaLayerGroup className="text-2xl fill-gray-600 ml-0.5" />,
    text: "Songs",

    path: "/songs",
  },
  {
    icon: <AiFillHeart className="text-3xl fill-gray-600" />,
    text: "Hearts",

    path: "/songs/heart",
  },
  {
    icon: <FaHeadphonesAlt className="text-3xl fill-gray-600" />,
    text: "Lofi",
    path: "/",
  } as const,
];

const Navbar = () => {
  const [isLogged, setIsLogged] = useState<Login>("Logged Out");
  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:8080/api/login/auth", "hii", {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         if (res.data === "Logged In") {
  //           setIsLogged("Logged In");
  //         } else {
  //           setIsLogged("Logged Out");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }, [isLogged]);

  //   const handleClick = () => {
  //     axios
  //       .post("http://localhost:8080/api/logout", "hii", {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         alert(res.data);
  //         if (res.data === "Logged Out") {
  //           setIsLogged("Logged Out");
  //         } else {
  //           setIsLogged("Logged In");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div className="w-full hidden lg:visible lg:col-span-2 bg-[#ededed] lg:flex flex-col">
      <div className="m-8 flex flex-col gap-10 mt-10">
        {linksData.map((link, index) => (
          <Link href={link.path} key={index} className={"flex gap-4"}>
            {link.icon}
            <p>{link.text}</p>
          </Link>
        ))}
      </div>
      <Player />
      {isLogged === "Logged Out" ? (
        <Link href={"/login"} className="flex gap-4 m-8 mt-20">
          <FaUserPlus className="text-3xl fill-gray-600" />
          <p>Login</p>
        </Link>
      ) : (
        <div onClick={() => console.log("hi")}>
          <Link href={"/"} className="flex gap-4 m-8">
            <FaUserMinus className="text-3xl fill-gray-600 mt-20" />
            <p>Logout</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
