import React from "react";
import Icon from "./Icon";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Motion from "./Motion";
import Look from "./Looks";
export default function Sidebar({ move, setMove, look, setLook, spriteData }) {

  return (
    <div className="overflow-y-scroll">
      <Droppable droppableId="left" isDropDisabled={true} type="group">
        {(provided, snapshot) => (
          <>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Motion move={move} setMove={setMove} spriteData={spriteData} />
              <Look look={look} setLook={setLook} spriteData={spriteData} />
            </div>
            {provided.placeholder}
          </>

        )}
      </Droppable>

    </div>
  );
}
