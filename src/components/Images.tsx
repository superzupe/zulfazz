import { aboutImg } from "@/assets";


const Images = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={aboutImg}
        alt="About Image"
        className="w-70 md:w-120 rounded-2xl opacity-80 hover:opacity-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-opacity duration-300"
      />
    </div>
  );
}

export default Images;