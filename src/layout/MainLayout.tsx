import ATMSign from "@/assets/atm_sign.png";
import StickerGraf from "@/assets/sticker_graf.png";
import Graffiti from "@/assets/graffiti.png";
import Systems from "@/assets/systems.png";
import Sprites from "@/components/Sprites";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-dvh flex flex-col justify-center items-center w-[70%] m-auto">
      <div className="w-full bg-[#1e6cae] rounded-lg relative p-4">
        <div className="relative">
          <img src={ATMSign} alt="" className="m-auto" width={400} />
          <img
            src={Graffiti}
            alt=""
            width={250}
            className="absolute right-[25%] top-[16%]"
          />
        </div>
      </div>

      <div className="bg-[#f1f0e7] w-[95%]">
        <div className="bg-[#cac9c1] h-[15px]"></div>
        <div className="flex justify-center">
          <Sprites />
        </div>
        <div className="relative">{children}</div>
        <img src={Systems} alt="" className="ml-[80%]" />

        <div>
          <img
            src={StickerGraf}
            alt=""
            className="relative"
            style={{
              marginTop: "-38px",

              marginLeft: "83px",
              zIndex: 1,
              rotate: "-6deg",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
