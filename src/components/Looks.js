import { Draggable } from "react-beautiful-dnd"
import React from "react";
import { IoIosPlay } from "react-icons/io";

export default function Look({ look, setLook, spriteData }) {

  const divStyle = 'flex p-1 h-10 text-black text-sm font-serif border-b-2 border-gray-400 bg-red-400 rounded-tl-lg rounded-br-lg'
  const inpStyle = 'w-12 ml-2 mr-2 rounded-xl text-center p-1'
  const selectStyle = 'w-fit rounded-md p-1 bg-gray-500 ml-1 mr-1'
  const run = 'cursor-pointer ml-2'
  return (
    <div className="space-y-1">
      <h3 className=" font-bold">
        Looks
      </h3>
      <Draggable draggableId={look.sayT.id} index={look.sayT.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                say <input className={inpStyle} type="text" value={look.sayT.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.sayT.value = e.target.value; return obj; })} />
                for <input className={inpStyle} type="number" value={look.sayT.sec} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.sayT.sec = e.target.value; return obj; })} />
                sec
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setSay(look.sayT.value, parseInt(look.sayT.sec))} />
              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  say <input className={inpStyle} type="text" value={look.sayT.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.sayT.value = e.target.value; return obj; })} />
                  for <input className={inpStyle} type="number" value={look.sayT.sec} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.sayT.sec = e.target.value; return obj; })} />
                  sec
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.say.id} index={look.say.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                say <input className={inpStyle} type="text" value={look.say.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.say.value = e.target.value; return obj; })} />
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setSay(look.say.value, 1)} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  say <input className={inpStyle} type="text" value={look.say.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.say.value = e.target.value; return obj; })} />
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.thinkT.id} index={look.thinkT.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                think <input className={inpStyle} type="text" value={look.thinkT.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.thinkT.value = e.target.value; return obj; })} />
                for <input className={inpStyle} type="number" value={look.thinkT.sec} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.thinkT.sec = e.target.value; return obj; })} />
                sec
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setThink(look.thinkT.value, parseInt(look.thinkT.sec))} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  think <input className={inpStyle} type="text" value={look.thinkT.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.thinkT.value = e.target.value; return obj; })} />
                  for <input className={inpStyle} type="number" value={look.thinkT.sec} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.thinkT.sec = e.target.value; return obj; })} />
                  sec
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.think.id} index={look.think.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                think <input className={inpStyle} type="text" value={look.think.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.think.value = e.target.value; return obj; })} />
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setSay(look.think.value, 1)} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  think <input className={inpStyle} type="text" value={look.think.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.think.value = e.target.value; return obj; })} />
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.nextcostume.id} index={look.nextcostume.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                next costume
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.nextCostume()} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  next costume
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.switchcostume.id} index={look.switchcostume.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                switch costume
                <select className={selectStyle} value={look.switchcostume.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.switchcostume.value = e.target.value; return obj; })}>
                  <option value={1}>costume 1</option>
                  <option value={2}>costume 2</option>
                </select>
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.switchCostume(look.switchcostume.value)} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  switch costume
                  <select className={selectStyle} value={look.switchcostume.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.switchcostume.value = e.target.value; return obj; })}>
                    <option value={1}>costume 1</option>
                    <option value={2}>costume 2</option>
                  </select>
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.changeSize.id} index={look.changeSize.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                change size by <input className={inpStyle} type="number" value={look.changeSize.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.changeSize.value = e.target.value; return obj; })} />
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.increaseSize(parseInt(look.changeSize.value))} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  change size by <input className={inpStyle} type="number" value={look.changeSize.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.changeSize.value = e.target.value; return obj; })} />
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.setSize.id} index={look.setSize.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                set size to <input className={inpStyle} type="number" value={look.setSize.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.setSize.value = e.target.value; return obj; })} />
                %
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setSizeAs(parseInt(look.setSize.value))} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  set size to <input className={inpStyle} type="number" value={look.setSize.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.setSize.value = e.target.value; return obj; })} />
                  % </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.change.id} index={look.change.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                change
                <select className={selectStyle} value={look.change.prop} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.change.prop = e.target.value; return obj; })} >
                  <option value="color">color</option>
                  { /* <option value="fisheye">fisheye</option>
                <option value="whirl">whirl</option>
                <option value="pixelate">pixelate</option>
                <option value="mosaic">mosaic</option>
                <option value="brightness">brightness</option>
                <option value="ghost">ghost</option>*/}
                </select>effect by
                <input type="number" value={look.change.value} className={inpStyle} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.change.value = e.target.value; return obj; })} />
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.changeProperty(look.change.prop, parseInt(look.change.value))} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  change
                  <select className={selectStyle} value={look.change.prop} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.change.prop = e.target.value; return obj; })} >
                    <option value="color">color</option>
                    {/* <option value="fisheye">fisheye</option>
                <option value="whirl">whirl</option>
                <option value="pixelate">pixelate</option>
                <option value="mosaic">mosaic</option>
                <option value="brightness">brightness</option>
               <option value="ghost">ghost</option>*/}
                  </select>effect by
                  <input type="number" className={inpStyle} value={look.change.value} />
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.set.id} index={look.set.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                change
                <select className={selectStyle} value={look.set.prop} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.set.prop = e.target.value; return obj; })} >
                  <option value="color">color</option>
                  { /* <option value="fisheye">fisheye</option>
                <option value="whirl">whirl</option>
                <option value="pixelate">pixelate</option>
                <option value="mosaic">mosaic</option>
                <option value="brightness">brightness</option>
                <option value="ghost">ghost</option>*/}
                </select>effect to
                <input className={inpStyle} type="number" value={look.set.value} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.set.value = e.target.value; return obj; })} />
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setProperty(look.set.prop, parseInt(look.set.value))} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  change
                  <select className={selectStyle} value={look.set.prop} onChange={(e) => setLook(prev => { let obj = { ...prev }; obj.set.prop = e.target.value; return obj; })} >
                    <option value="color">color</option>
                    {/*<option value="fisheye">fisheye</option>
                <option value="whirl">whirl</option>
                <option value="pixelate">pixelate</option>
                <option value="mosaic">mosaic</option>
                <option value="brightness">brightness</option>
                <option value="ghost">ghost</option>*/}
                  </select>effect to
                  <input type="number" className={inpStyle} value={look.set.value} />
                </div>


              }
            </>
          )
        }
      </Draggable>
      <Draggable draggableId={look.clear.id} index={look.clear.index}>
        {
          (provided, snapshot) => (
            <>
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                className={`${divStyle}`}>
                clear effect
                <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.clearEffect()} />

              </div>

              {
                snapshot.isDragging &&
                <div className={`${divStyle}  copy`}>
                  clear effect
                </div>


              }
            </>
          )
        }
      </Draggable>
    </div>
  )
}