import { useRecoilValue } from "recoil"
import { ColorButton } from "./ColorButton"
import { colorAtom } from "../store/atoms/color"

export function BackgroundChanger() {
    let bgColor = useRecoilValue(colorAtom)
    bgColor = (bgColor == "black") ? "black" : bgColor+"-500";
    // bgColor = "orange" 
    return <div className={"h-screen flex items-end bg-"+bgColor}>
        <div className="w-full mb-20 rounded-xl  shadow-lg ml-10 mr-10 p-2 bg-white">
            <div className="flex justify-between">
                <ColorButton title={"Red"} color={"red"}/>
                <ColorButton title={"Yellow"} color={"yellow"}/>
                <ColorButton title={"Black"} color={"black"}/>
                <ColorButton title={"Purple"} color={"purple"}/>
                <ColorButton title={"Green"} color={"green"}/>
                <ColorButton title={"Blue"} color={"blue"}/>
                <ColorButton title={"Default"} color={"orange"}/>
            </div>
        </div>
    </div>
}