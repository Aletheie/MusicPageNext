import AddSongInputGroup from "./components/add-song-input-group";

const AddSong = () => {
  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <AddSongInputGroup />
    </div>
  );
};

export default AddSong;
