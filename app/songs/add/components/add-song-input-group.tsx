"use client";

import { useState } from "react";
import cd from "@/public/icons8-music-record-64.png";
import FileInput from "@/app/components/inputs/file-input";
import TextInput from "@/app/components/inputs/text-input";
//import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import Image from "next/image";
import { useSession } from "next-auth/react";

const AddSongInputGroup = () => {
  //const { status, data } = useSession();
  const [songName, setSongName] = useState("");
  const [songAuthor, setSongAuthor] = useState("");
  const [songFile, setSongFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!songName || !songAuthor || !songFile) {
      alert("Please fill in all required fields");
      return;
    }
    if (!/\.(mp3)$/i.test(songFile.name)) {
      alert("Please select an MP3");
      return;
    }

    setLoading(true);

    const randomNum = Math.floor(Math.random() * 4000) + 2000;

    setTimeout(() => {
      setSongName("");
      setSongAuthor("");
      setSongFile(null);
      setLoading(false);
      alert("Vypadá to, že momentálně Vám nemohu vyhovět 🤧");
    }, randomNum);
    // const formData = new FormData();
    // formData.append("file", songFile as File);
    // formData.append("upload_preset", "nthxnjhd" as string);

    // try {
    //   const response = await axios.post(
    //     `https://api.cloudinary.com/v1_1/dgj3s3q6m/video/upload`,
    //     formData
    //   );

    //   console.log(response.data.url);
    //   await axios.post("/api/songs/add", {
    //     status,
    //     data: data?.user,
    //     songName,
    //     songAuthor,
    //     path: response.data.url,
    //     bitRate: response.data.bit_rate,
    //     duration: response.data.duration,
    //     format: response.data.format,
    //   });
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="w-full h-screen lg:transform lg:transition lg:duration-700 lg:hover:scale-105">
      <form
        typeof="multipart/form-data"
        method="post"
        className="flex justify-center w-full h-screen items-center relative"
      >
        <PacmanLoader
          color="#8b5cf6"
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="absolute -bottom-80 left-[55%] z-10"
        />
        <div className="w-3/4 md:w-1/2 lg:w-1/3  h-2/3 rounded-3xl shadow-xl bg-[#f4f4f4]">
          <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl"></div>
          <Image src={cd} alt="cd image" className="floating mx-auto -mt-10" />
          <FileInput selectedFile={songFile} setSelectedFile={setSongFile} />
          <div className="mt-8">
            <TextInput
              placeholder="Jméno skladby"
              type="text"
              setInputText={setSongName}
              inputText={songName}
            />
            <TextInput
              placeholder="Jméno autora"
              type="text"
              setInputText={setSongAuthor}
              inputText={songAuthor}
            />
          </div>
          <button
            onSubmit={handleFormSubmit}
            onClick={handleFormSubmit}
            className="w-3/4 md:w-1/2 lg:w-1/3 bg-[#ededed] hover:bg-[#eaeaea] h-[8%] rounded-b-3xl absolute bottom-32 lg:bottom-32"
          >
            <span className="font-semibold text-gray-500">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSongInputGroup;
