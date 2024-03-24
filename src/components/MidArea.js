import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
export default function MidArea({ move, setMove }) {
  const divStyle = 'p-1 h-10 text-black text-sm font-serif border-b-2 border-gray-400 bg-blue-400 rounded-tl-lg rounded-br-lg w-1/2'
  const LookdivStyle = 'p-1 h-10 text-black text-sm font-serif border-b-2 border-gray-400 bg-red-400 rounded-tl-lg rounded-br-lg w-1/2'
  const inpStyle = 'w-10 ml-2 mr-2 rounded-xl text-center p-1'
  const selectStyle = 'w-fit rounded-md p-1 bg-gray-500 ml-1'
  return <div className="flex-1 h-full overflow-y-scroll pl-10">
    {"mid area"}
    <Droppable droppableId="right" isDropDisabled={false} type="group" >
      {(provided, snapshot) => (
        <>
          <div {...provided.droppableProps} ref={provided.innerRef} className=' flex flex-col h-full'>
            {
              move.map((el, ind) => {
                if (el.type === 'move')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            move <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                            steps
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'turnR')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            turn &#8631; <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />

                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'turnL')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            turn &#8630; <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />

                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'goto')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            goto
                            <select className={selectStyle} value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })}>
                              <option value="random_pos">ramdom position</option>
                              <option value="mouse_pointer">mouse pointer</option>
                            </select>
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'gotoxy')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            goto
                            x<input className={inpStyle} type="number" value={el.x} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].x = e.target.value; return arr; })} />
                            y <input className={inpStyle} type="number" value={el.y} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].y = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'glide')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            glide
                            <input className={inpStyle} type="number" value={el.sec} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].sec = e.target.value; return arr; })} />
                            secs to
                            <select className={selectStyle} value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })}>
                              <option value="random_pos">ramdom position</option>
                              <option value="mouse_pointer">mouse pointer</option>
                            </select>

                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'glidexy')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            glide
                            <input className={inpStyle} type="number" value={el.sec} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].sec = e.target.value; return arr; })} />
                            secs to
                            x<input className={inpStyle} type="number" value={el.x} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].x = e.target.value; return arr; })} />
                            y <input className={inpStyle} type="number" value={el.y} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].y = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'pointDirec')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            point in direction <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'pointTo')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            point towards
                            <select className={selectStyle} value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })}>
                              <option value="random_pos">ramdom position</option>
                              <option value="mouse_pointer">mouse pointer</option>
                            </select>
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'changeX')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            change x by <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'setX')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            set x to <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'changeY')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            change x by <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'setY')
                  return <Draggable index={ind} key={el.id} draggableId={el.id}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}  >
                            set y to <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'sayT')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            say <input className={inpStyle} type="text" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                            for <input className={inpStyle} type="number" value={el.sec} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].sec = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'say')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            say <input className={inpStyle} type="text" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>
                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'thinkT')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            think <input className={inpStyle} type="text" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                            for <input className={inpStyle} type="number" value={el.sec} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].sec = e.target.value; return arr; })} />
                          </div>
                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'think')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            think <input className={inpStyle} type="text" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'nextcostume')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            next costume </div>
                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'switchcostume')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            switch costume
                            <select value={el.value} className={selectStyle} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })}>
                              <option value={1}>costume 1</option>
                              <option value={2}>costume 2</option>
                            </select>
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'changeSize')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            change sizeby <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'setSize')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            set sizeto <input className={inpStyle} type="number" value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                            %  </div>
                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'change')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            change
                            <select value={el.prop} className={selectStyle} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].prop = e.target.value; return arr; })} >
                              <option value="color">color</option>
                              { /* <option value="fisheye">fisheye</option>
                           <option value="whirl">whirl</option>
                           <option value="pixelate">pixelate</option>
                           <option value="mosaic">mosaic</option>
                           <option value="brightness">brightness</option>
                           <option value="ghost">ghost</option>*/}
                            </select>effect by
                            <input type="number" className={inpStyle} value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'set')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            change
                            <select className={selectStyle} value={el.prop} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].prop = e.target.value; return arr; })} >
                              <option value="color">color</option>
                              {/* <option value="fisheye">fisheye</option>
                           <option value="whirl">whirl</option>
                           <option value="pixelate">pixelate</option>
                           <option value="mosaic">mosaic</option>
                           <option value="brightness">brightness</option>
                           <option value="ghost">ghost</option>*/}
                            </select>effect to
                            <input type="number" className={inpStyle} value={el.value} onChange={(e) => setMove(prev => { let arr = [...prev]; arr[ind].value = e.target.value; return arr; })} />
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'clear')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${LookdivStyle}`}>
                            clear effect
                          </div>

                        </>
                      )
                    }
                  </Draggable>
                else if (el.type === 'bounce')
                  return <Draggable draggableId={el.id} key={el.id} index={ind}>
                    {
                      (provided, snapshot) => (
                        <>
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                            className={`${divStyle}`}>
                            if on edge bounce
                          </div>

                        </>
                      )
                    }
                  </Draggable>
              })


            }
          </div>
          {provided.placeholder}
        </>
      )}
    </Droppable>

  </div>;
}
