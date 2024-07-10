import { SocialMediaNumbers } from "./SocialMediaNumbers";

export const Profile = () => {
  return (
    <div className="w-96 h-96 grid grid-rows-5">
      <div className="row-span-2 bg-blue-500"></div>
      <div className="flex items-center justify-center absolute w-96 h-96">
        <div className="bg-white rounded-full mb-24 p-1">
          <img className="rounded-full h-30 w-30" src="./photo.jpg" />
        </div>
      </div>
      <div className="grid grid-rows-7 row-span-3 bg-gray-50">
        <div className="row-span-4 flex flex-col justify-end">
          <div className="flex justify-center pt-1">
              <div className="font-semibold">Robin Singh</div>
              <div className="ml-2 text-gray-400">24</div>
            </div>
            <div className="flex justify-center mt-1 mb-4 text-gray-400">
              Melbourne
            </div> 
        </div>
        <div className="row-span-3 flex border-t-2 border-gray-300">
          
          <div className="grid grid-cols-3 w-full">
                
            <SocialMediaNumbers number={80} title={"Followers"}/>
            <SocialMediaNumbers number={803} title={"Likes"}/>
            <SocialMediaNumbers number={1.4} title={"Photos"}/>
            
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
