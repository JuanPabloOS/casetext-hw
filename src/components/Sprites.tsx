import { useAccount } from "@/store";
import Logos from "@/assets/creditcard_sprite.png";

const positions = {
  star: { width: 80, y: -40, x: 0 },
  pulse: { width: 100, y: -40, x: -76 },
  maestro: { width: 100, y: -40, x: -176 },
  mastercard: { width: 100, y: -40, x: -262 },
  plus: { width: 80, y: -40, x: -362 },
  visa: { width: 100, y: -40, x: -429 },
};
const Sprites = () => {
  const { accountDetails } = useAccount();
  return (
    <>
      {Object.entries(positions).map((p) => {
        console.log("-", p);
        return (
          <div
            style={{
              width: p[1].width,
              height: "50px",
              background: `url(${Logos})`,
              backgroundPositionX: p[1].x,
              backgroundPositionY:
                p[0] === accountDetails?.cardType ? 7 : p[1].y,
              backgroundRepeat: "no-repeat",
              backgroundSize: "500px auto",
            }}
          />
        );
      })}
    </>
  );
};

export default Sprites;
