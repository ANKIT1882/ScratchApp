import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { IoIosPlay } from "react-icons/io";
export default function Motion({ move, setMove, spriteData }) {
  const divStyle =
    " flex space-x-2 p-1 h-10 text-black text-sm font-serif border-b-2 border-gray-400 bg-blue-400 rounded-tl-lg rounded-br-lg";
  const inpStyle = "w-10 mr-2 rounded-xl text-center p-1 ml-1 ";
  const selectStyle = "w-fit rounded-md p-1 bg-gray-500 ml-1 mr-1";
  const run = 'cursor-pointer'
  return (
    <div className="space-y-1">
      <h3 className="font-bold">Motion</h3>
      <Draggable draggableId={move.move.id} index={move.move.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              move{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.move.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.move.value = e.target.value;
                    return obj;
                  })
                }
              />
              steps
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.moveStepForward(parseInt(move.move.value))} />
            </div>

            {snapshot.isDragging && (
              <div
                onClick={() => {
                  spriteData.moveStepForward(move.move.value);
                }}
                className={`${divStyle}  copy`}
              >
                move{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.move.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.move.value = e.target.value;
                      return obj;
                    })
                  }
                />
                steps
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.turnR.id} index={move.turnR.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              onClick={() => {
                spriteData.moveStepForward(move.move.value);
              }}
              className={`${divStyle}`}
            >
              turn &#8631;{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.turnR.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.turnR.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.turnClockwise(parseInt(move.turnR.value))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                turn &#8631;{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.turnR.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.turnR.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.turnL.id} index={move.turnL.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              turn &#8630;{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.turnL.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.turnL.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.turnAntiClockwise(parseInt(move.turnL.value))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                turn &#8630;{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.turnL.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.turnL.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.goto.id} index={move.goto.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              goto
              <select
                className={selectStyle}
                value={move.goto.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.goto.value = e.target.value;
                    return obj;
                  })
                }
              >
                <option value="random_pos">random position</option>
                <option value="mouse_pointer">mouse pointer</option>
              </select>
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => move.goto.value === 'random_pos' ? spriteData.gotoRandomPosition() : spriteData.gotoPosition(parseInt(spriteData.cursor_pos.x), parseInt(spriteData.cursor_pos.y))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                goto
                <select
                  className={selectStyle}
                  value={move.goto.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.goto.value = e.target.value;
                      return obj;
                    })
                  }
                >
                  <option value="random_pos">random position</option>
                  <option value="mouse_pointer">mouse pointer</option>
                </select>
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.gotoxy.id} index={move.gotoxy.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              goto x
              <input
                className={inpStyle}
                type="number"
                value={move.gotoxy.x}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.gotoxy.x = e.target.value;
                    return obj;
                  })
                }
              />
              y{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.gotoxy.y}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.gotoxy.y = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.gotoPosition(parseInt(move.gotoxy.x), parseInt(move.gotoxy.y))} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                goto x
                <input
                  className={inpStyle}
                  type="number"
                  value={move.gotoxy.x}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.gotoxy.x = e.target.value;
                      return obj;
                    })
                  }
                />
                y{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.gotoxy.y}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.gotoxy.y = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.glide.id} index={move.glide.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              glide
              <input
                className={inpStyle}
                type="number"
                value={move.glide.sec}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.glide.sec = e.target.value;
                    return obj;
                  })
                }
              />
              secs to
              <select
                className={selectStyle}
                value={move.glide.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.glide.value = e.target.value;
                    return obj;
                  })
                }
              >
                <option value="random_pos">random position</option>
                <option value="mouse_pointer">mouse pointer</option>
              </select>
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => move.glide.value === 'random_pos' ? spriteData.glideToRandomPosition(move.glide.sec) : spriteData.glideToPosition(
                parseInt(spriteData.cursor_pos.x),
                parseInt(spriteData.cursor_pos.y),
                parseInt(move.glide.sec)
              )} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                glide
                <input
                  className={inpStyle}
                  type="number"
                  value={move.glide.sec}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.glide.sec = e.target.value;
                      return obj;
                    })
                  }
                />
                secs to
                <select
                  className={selectStyle}
                  value={move.glide.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.glide.value = e.target.value;
                      return obj;
                    })
                  }
                >
                  <option value="random_pos">random position</option>
                  <option value="mouse_pointer">mouse pointer</option>
                </select>
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.glidexy.id} index={move.glidexy.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              glide
              <input
                className={inpStyle}
                type="number"
                value={move.glidexy.sec}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.glidexy.sec = e.target.value;
                    return obj;
                  })
                }
              />
              secs to x
              <input
                className={inpStyle}
                type="number"
                value={move.glidexy.x}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.glidexy.x = e.target.value;
                    return obj;
                  })
                }
              />
              &nbsp; y
              <input
                className={inpStyle}
                type="number"
                value={move.glidexy.y}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.glidexy.y = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.glideToPosition(
                parseInt(move.glidexy.x),
                parseInt(move.glidexy.y),
                parseInt(move.glidexy.sec)
              )} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                glide
                <input
                  className={inpStyle}
                  type="number"
                  value={move.glidexy.sec}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.glidexy.sec = e.target.value;
                      return obj;
                    })
                  }
                />
                secs to x
                <input
                  className={inpStyle}
                  type="number"
                  value={move.glidexy.x}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.glidexy.x = e.target.value;
                      return obj;
                    })
                  }
                />
                y{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.glidexy.y}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.glidexy.y = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.pointDirec.id} index={move.pointDirec.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              point in direction{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.pointDirec.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.pointDirec.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.pointInDirection(parseInt(move.pointDirec.value))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                point in direction{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.pointDirec.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.pointDirec.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.pointTo.id} index={move.pointTo.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              point towards
              <select
                className={selectStyle}
                value={move.pointTo.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.pointTo.value = e.target.value;
                    return obj;
                  })
                }
              >
                <option value="random_pos">random position</option>
                <option value="mouse_pointer">mouse pointer</option>
              </select>
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => move.pointTo.value === 'random_pos' ? spriteData.pointToRandomPosition() : spriteData.pointToMousePointer()} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                point towards
                <select
                  className={selectStyle}
                  value={move.pointTo.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.pointTo.value = e.target.value;
                      return obj;
                    })
                  }
                >
                  <option value="random_pos">random position</option>
                  <option value="mouse_pointer">mouse pointer</option>
                </select>
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.changeX.id} index={move.changeX.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              change x by{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.changeX.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.changeX.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.changeXBy(parseInt(move.changeX.value))} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                change x by{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.changeX.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.changeX.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.setX.id} index={move.setX.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              set x to{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.setX.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.setX.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setX(parseInt(move.setX.value))} />

            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                set x to{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.setX.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.setX.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.changeY.id} index={move.changeY.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              change y by{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.changeY.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.changeY.value = e.target.value;
                    return obj;
                  })
                }

              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.changeYBy(parseInt(move.changeY.value))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                change y by{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.changeY.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.changeY.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.setY.id} index={move.setY.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              set y to{" "}
              <input
                className={inpStyle}
                type="number"
                value={move.setY.value}
                onChange={(e) =>
                  setMove((prev) => {
                    let obj = { ...prev };
                    obj.setY.value = e.target.value;
                    return obj;
                  })
                }
              />
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.setY(parseInt(move.setY.value))} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                set y to{" "}
                <input
                  className={inpStyle}
                  type="number"
                  value={move.setY.value}
                  onChange={(e) =>
                    setMove((prev) => {
                      let obj = { ...prev };
                      obj.setY.value = e.target.value;
                      return obj;
                    })
                  }
                />
              </div>
            )}
          </>
        )}
      </Draggable>
      <Draggable draggableId={move.bounce.id} index={move.bounce.index}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`${divStyle}`}
            >
              if on edge bounce &nbsp;
              <IoIosPlay className={run} style={{ scale: '1.5' }} onClick={() => spriteData.checkBounce()} />
            </div>
            {snapshot.isDragging && (
              <div className={`${divStyle}  copy`}>
                if on edge bounce
              </div>
            )}
          </>
        )}
      </Draggable>
      <div className="flex-row space-y-1">
        <div className="flex w-fit space-x-1">
          <p className=" bg-blue-400 rounded-md p-1">show x</p>
          <input type="checkbox" className="w-4 mt-2 h-4" checked={move.coordinate.x} onChange={(e) => setMove(prev => { let obj = { ...prev }; obj.coordinate.x = e.target.checked; return obj; })} />
        </div>
        <div className="flex w-fit space-x-1">
          <p className=" bg-blue-400 rounded-md p-1">show y</p>
          <input type="checkbox" className="w-4 mt-2 h-4" checked={move.coordinate.y} onChange={(e) => setMove(prev => { let obj = { ...prev }; obj.coordinate.y = e.target.checked; return obj; })} />
        </div>
      </div>
    </div>
  );
}
