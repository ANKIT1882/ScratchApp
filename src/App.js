import React, { useState,useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import useItems from "./handlers/useItems";
import { FaFlag } from "react-icons/fa6";
import useSprite from "./handlers/useSprite";
import { FcCancel } from "react-icons/fc";
export default function App() {
  const {move,dest_items,setMove,setDestItem,handleDrag}=useItems();
  const parentRef = React.useRef();
  const spriteData=useSprite(parentRef)
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
         
          <DragDropContext  onDragEnd={handleDrag}>
          <Sidebar move={move} setMove={setMove} look={move} setLook={setMove} spriteData={spriteData}/> 
          <MidArea  move={dest_items} setMove={setDestItem} />
            </DragDropContext>
         <div style={{position:'fixed',marginTop:'5px',marginRight:'5px',right:0}} className="flex-col">
      {!spriteData.isRunning? <>  <p className="font-serif text-green-600"> click flag to run</p>
         <FaFlag  className=" cursor-pointer" style={{fill:'green',scale:'2',cursor:'pointer'}}
        onClick={async ()=>await spriteData.play(dest_items)}
        /> </>:"Running.." }
         </div>
        </div>
        <div
         ref={parentRef}
        className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 pl-5">
        
          <PreviewArea spriteData={spriteData} x={move.coordinate.x} y={move.coordinate.y}/>
         
        </div>
      </div>
    </div>
  );
}
