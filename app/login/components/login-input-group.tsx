"use client";

import { useState } from "react";
import TextInput from "@/app/components/inputs/text-input";
import axios, { AxiosError } from "axios";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { signIn } from "next-auth/react";

interface Props {
  icon: StaticImageData;
  buttonText: string;
  oneMoreInput?: boolean;
}

const LoginInputGroup = ({ icon, buttonText, oneMoreInput }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !passwordHash) {
      alert("Vyplňte prosím všechna povinná pole");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Zadejte prosím platnou e-mailovou adresu");
      return;
    }
    // if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(passwordHash)) {
    //   alert("Zadejte prosím heslo, které splňuje minimální požadavky");
    //   return;
    // }
    // axios
    //   .post(
    //     "/api/login",
    //     {
    //       name,
    //       email,
    //       passwordHash,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     alert("Úspěšně jste se přihlásili!");
    //     signIn("credentials", {
    //       email,
    //       password: passwordHash,
    //       //callbackUrl: "http://localhost:3000/",
    //     });
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log(err);
    //     alert(err.message || "Něco se pokazilo :(");
    //   });

    const randomNum = Math.floor(Math.random() * 4000) + 2000;

    setTimeout(() => {
      setName("");
      setEmail("");
      setPasswordHash("");
      alert("Vypadá to, že momentálně Vám nemohu vyhovět 🤧");
    }, randomNum);
  };

  return (
    <div className="w-full h-full lg:transform lg:transition lg:duration-700 lg:hover:scale-110">
      <form
        action=""
        className="flex flex-col lg:flex-row justify-center w-full h-full items-center relative"
      >
        <div className="w-3/4 md:w-1/2 lg:w-[55%] h-[80%] lg:h-[55%] rounded-3xl shadow-xl bg-[#f4f4f4]">
          <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl "></div>
          <Image
            src={icon}
            alt="cd image"
            className="floating mx-auto -mt-10"
          />
          <div className="mt-5 lg:mt-8">
            {oneMoreInput && (
              <TextInput
                placeholder="Uživatelské jméno"
                type="text"
                setInputText={setName}
                inputText={name}
              />
            )}
            <TextInput
              placeholder="Email"
              type="email"
              setInputText={setEmail}
              inputText={email}
            />
            <TextInput
              placeholder="Heslo"
              type="password"
              setInputText={setPasswordHash}
              inputText={passwordHash}
            />
          </div>
          <button
            onSubmit={handleFormSubmit}
            onClick={handleFormSubmit}
            className="w-3/4 md:w-1/2 lg:w-[55%] bg-[#ededed] hover:bg-[#eaeaea] h-[8%] rounded-b-3xl absolute bottom-10 lg:bottom-44"
          >
            <span className="font-semibold text-gray-500">{buttonText}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginInputGroup;
