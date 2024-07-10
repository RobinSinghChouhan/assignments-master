import { useSetRecoilState } from "recoil";
import { colorAtom } from "../store/atoms/color";

export function ColorButton({ title, color }) {
  const setBgColor = useSetRecoilState(colorAtom);
  const buttonColor = (color == "black") ? "black" : color+"-500"
  const hoverColor = (color == "black") ? "gray-700" : color+"-700"
  console.log("COLOR: "+color);
  return (
    <div>
      <button
        className={
          "bg-" +
          buttonColor +
          " hover:bg-" +
          hoverColor +
          " text-white font-bold py-2 px-4 rounded-xl"
        }
        onClick={()=>{
            setBgColor(color)
        }}
      >
        {title}
      </button>
    </div>
  );
}
