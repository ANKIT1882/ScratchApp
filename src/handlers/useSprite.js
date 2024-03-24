import React, { useState, useEffect } from "react";

export default function useSprite(parentRef) {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Initial position
  const [direction, setDirection] = useState(0); // Initial direction
  const [cursor_pos, setCursorPos] = useState({ x: 0, y: 0 });
  //sayFlag,thinkFlag,costume,size,color,fisheye,whirl,pixelate,mosaic,brightness,ghost
  const [sayFlag, setsayFlag] = useState(false);
  const [thinkFlag, setThinkFlag] = useState(false);
  const [costume, setCostume] = useState(1);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState(0); // Initial color effect
  const [fisheye, setFisheye] = useState(0); // Initial fisheye effect
  const [whirl, setWhirl] = useState(0); // Initial whirl effect
  const [pixelate, setPixelate] = useState(0); // Initial pixelate effect
  const [mosaic, setMosaic] = useState(0); // Initial mosaic effect
  const [brightness, setBrightness] = useState(0); // Initial brightness effect
  const [ghost, setGhost] = useState(0); // Initial ghost effect
  const [thinkWord, setThinkWord] = useState('Hmm')
  const [sayWord, setsayWord] = useState('Hello')
  const [corner, setCorner] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    const updateCursorPosition = (event) => {
      const parentRect = parentRef.current.getBoundingClientRect();
      const mouseX = event.clientX - parentRect.left; // Adjust X coordinate
      const mouseY = event.clientY - parentRect.top; // Adjust Y coordinate
      setCursorPos({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [parentRef]);


  const moveStepForward = (step) => {
    setPosition(position => {
      const x = position.x + step * Math.cos((direction * Math.PI) / 180);
      const y = position.y + step * Math.sin((direction * Math.PI) / 180);
      const parentRect = parentRef.current.getBoundingClientRect();
      const newx = Math.max(0, Math.min(x, parentRect.width));
      const newy = Math.max(0, Math.min(y, parentRect.height));
      return { x: newx, y: newy }
    })


  };

  const turnClockwise = (deg) => {
    setDirection((prevDirection) => (prevDirection + deg) % 360);
  };

  const turnAntiClockwise = (deg) => {
    setDirection((prevDirection) => (prevDirection - deg + 360) % 360);
  };

  const gotoRandomPosition = () => {

    const parentRect = parentRef.current.getBoundingClientRect();
    const newX = Math.random() * parentRect.width;
    const newY = Math.random() * parentRect.height;
    setPosition({ x: newX, y: newY });
    //console.log(newX,newY)
  };

  const gotoPosition = (x, y) => {
    updatePosition(x, y);
  };
  const pointToRandomPosition = () => {
    const parentRect = parentRef.current.getBoundingClientRect();
    const randomX = Math.random() * parentRect.width;
    const randomY = Math.random() * parentRect.height;

    // Calculate angle between current position and random position
    const dx = randomX - position.x;
    const dy = randomY - position.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Update direction to point towards the random position
    setDirection(angle);
  };
  /*
  const glideToPosition = (x, y, t) => {
   
    const dx = x - position.x;
    const dy = y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = distance / (t * 1000); // pixels per millisecond
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < t * 1000) {
       setPosition(position=>{
        const ratio = elapsedTime / (t * 1000);
        const x = position.x + dx * ratio;
        const y = position.y + dy * ratio;
        const parentRect = parentRef.current.getBoundingClientRect();
        const newX = Math.max(0, Math.min(x, parentRect.width));
        const newY = Math.max(0, Math.min(y, parentRect.height));
        return {x:newX,y:newY}
       })

        requestAnimationFrame(animate);
      } else {
        //setPosition({ x, y });
         console.log('end')
      }
    };

    requestAnimationFrame(animate);
    
  };

*/

  const glideToPosition = async (x, y, t) => {
    // console.log(position,x,y,t)
    return new Promise(resolve => {

      //  const distance = Math.sqrt(dx * dx + dy * dy);
      // const speed = distance / (t * 1000); // pixels per millisecond
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < t * 1000) {
          setPosition(position => {
            const dx = x - position.x;
            const dy = y - position.y;
            const ratio = elapsedTime / (t * 1000);
            const _x = position.x + dx * ratio;
            const _y = position.y + dy * ratio;
            const parentRect = parentRef.current.getBoundingClientRect();
            const newX = Math.max(0, Math.min(_x, parentRect.width));
            const newY = Math.max(0, Math.min(_y, parentRect.height));
            return { x: newX, y: newY }
          })
          //setPosition(nextX,nextY)

          requestAnimationFrame(animate);

        } else {
          setPosition({ x, y });
          console.log('end');
          resolve();

        }
      };

      requestAnimationFrame(animate);
    });
  };
  const pointInDirection = (deg) => {
    setDirection(deg % 360);
  };

  const pointTowards = (x, y) => {
    const dx = x - position.x;
    const dy = y - position.y;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    setDirection(angle);
  };

  const changeXBy = (x) => {
    setPosition(position => {
      const _x = position.x + x;
      const parentRect = parentRef.current.getBoundingClientRect();
      const newX = Math.max(0, Math.min(_x, parentRect.width));
      return { x: newX, y: position.y }
    })
    //updatePosition(newX, position.y);
  };
  const pointToMousePointer = () => {
    // Get the current position of the mouse pointer
    const mouseX = cursor_pos.x;
    const mouseY = cursor_pos.y;

    // Calculate angle between current position and mouse pointer position
    const dx = mouseX - position.x;
    const dy = mouseY - position.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // console.log(angle, mouseX, mouseY);
    // Update direction to point towards the mouse pointer position
    setDirection(angle);
  };
  const changeYBy = (y) => {

    setPosition(position => {
      const _y = position.y + y;
      const parentRect = parentRef.current.getBoundingClientRect();
      const newY = Math.max(0, Math.min(_y, parentRect.height));
      return { x: position.x, y: newY }
    })
  };

  const setX = (x) => {
    setPosition(position => {
      const _x = position.x + x;
      const parentRect = parentRef.current.getBoundingClientRect();
      const newx = Math.max(0, Math.min(_x, parentRect.width));
      return { x: newx, y: position.y };
    })

  };

  const setY = (y) => {
    setPosition(position => {
      const _y = position.y + y;
      const parentRect = parentRef.current.getBoundingClientRect();
      const newy = Math.max(0, Math.min(_y, parentRect.height));
      return { x: position.x, y: newy }
    })

  };

  const updatePosition = (x, y) => {

    const parentRect = parentRef.current.getBoundingClientRect();
    const newX = Math.max(0, Math.min(x, parentRect.width));
    const newY = Math.max(0, Math.min(y, parentRect.height));
    //  console.log({x,y,newX,newY})
    setPosition({ x: newX, y: newY });

  };
  const glideToRandomPosition = async (t) => {
    const parentRect = parentRef.current.getBoundingClientRect();
    const newX = Math.random() * parentRect.width;
    const newY = Math.random() * parentRect.height;
    await glideToPosition(newX, newY, t);
  };

  const setSay = (value, t) => {
    setsayWord(value)
    setsayFlag(true);
    setTimeout(() => {
      setsayFlag(false);
    }, t * 1000);
  };
  const setThink = (value, t) => {

    setThinkWord(value)
    setThinkFlag(true);
    setTimeout(() => {
      setThinkFlag(false);
    }, t * 1000);
  };
  const nextCostume = () => {
    setCostume((prev) => (prev % 2) + 1);
  };
  const switchCostume = (ind) => {
    setCostume(ind);
  };
  const increaseSize = (x) => {
    setSize((prev) => prev + x);
  };
  const setSizeAs = (x) => {
    setSize(x);
  };
  const changeProperty = (prop, x) => {
    if (prop === "color") setColor((prev) => prev + x);
    else if (prop === "fisheye") setFisheye((prev) => prev + x);
    else if (prop === "whirl") setWhirl((prev) => prev + x);
    else if (prop === "pixelate") setPixelate((prev) => prev + x);
    else if (prop === "mosaic") setMosaic((prev) => prev + x);
    else if (prop === "brightness") setBrightness((prev) => prev + x);
    else if (prop === "ghost") setGhost((prev) => prev + x);
  };
  const checkBounce = () => {
    const parentRect = parentRef.current.getBoundingClientRect();
    const width = parentRect.width;
    const height = parentRect.height;
    if (position.x === width || position.y === height || position.x === 0 || position.y === 0) {
      setCorner(true)
      setTimeout(() => {
        setCorner(false);
      }, 1000);
    }
  }
  const clearEffect = () => {
    /*
    const [sayFlag, setsayFlag] = useState(false);
    const [thinkFlag, setThinkFlag] = useState(false);
    const [costume, setCostume] = useState(1);
    const [size, setSize] = useState(100);
    const [color, setColor] = useState(0); // Initial color effect
    const [fisheye, setFisheye] = useState(0); // Initial fisheye effect
    const [whirl, setWhirl] = useState(0); // Initial whirl effect
    const [pixelate, setPixelate] = useState(0); // Initial pixelate effect
    const [mosaic, setMosaic] = useState(0); // Initial mosaic effect
    const [brightness, setBrightness] = useState(100); // Initial brightness effect
    const [ghost, setGhost] = useState(0); // Initial ghost effect
    const [thinkWord,setThinkWord]=useState('Hmm')
    const [sayWord,setsayWord]=useState('Hello')
    */
    setsayFlag(false)
    setThinkFlag(false)
    setCostume(1)
    setSize(100)
    setColor(0)
    setFisheye(0)
    setWhirl(0)
    setPixelate(0)
    setMosaic(0)
    setBrightness(0)
    setGhost(0)
    setThinkWord('Hmm')
    setsayWord('hello')
  }
  const setProperty = (prop, x) => {
    console.log(prop, x)
    if (prop === "color") setColor(x);
    else if (prop === "fisheye") setFisheye(x);
    else if (prop === "whirl") setWhirl(x);
    else if (prop === "pixelate") setPixelate(x);
    else if (prop === "mosaic") setMosaic(x);
    else if (prop === "brightness") setBrightness(x);
    else if (prop === "ghost") setGhost(x);
  };
  const play = async (item) => {
    setIsRunning(true)
    for (let i = 0; i < item.length; i++) {
      let el = item[i];
      console.log(el.type)
      if (el.type === "move") moveStepForward(parseInt(el.value))
      else if (el.type === "turnR") turnClockwise(parseInt(el.value));
      else if (el.type === "turnL") turnAntiClockwise(parseInt(el.value));
      else if (el.type === "goto") {
        if (el.value === "random_pos") gotoRandomPosition();
        else gotoPosition(parseInt(cursor_pos.x), parseInt(cursor_pos.y));
      } else if (el.type === "gotoxy")
        gotoPosition(parseInt(el.x), parseInt(el.y));
      else if (el.type === "glide") {

        if (el.value === "random_pos") await glideToRandomPosition(parseInt(el.sec));
        else
          await glideToPosition(
            parseInt(cursor_pos.x),
            parseInt(cursor_pos.y),
            parseInt(el.sec)
          );
      } else if (el.type === "glidexy")
        await glideToPosition(parseInt(el.x), parseInt(el.y), parseInt(el.sec));
      else if (el.type === "pointDirec") pointInDirection(parseInt(el.value));
      else if (el.type === "pointTo") {
        if (el.value === "random_pos") pointToRandomPosition();
        else pointToMousePointer();
      } else if (el.type === "changeX") changeXBy(parseInt(el.value));
      else if (el.type === "changeY") changeYBy(parseInt(el.value));
      else if (el.type === "setX") setX(parseInt(el.value));
      else if (el.type === "setY") setY(parseInt(el.value));
      else if (el.type === "say") setSay(el.value, 1);
      else if (el.type === "sayT") setSay(el.value, parseInt(el.sec));
      else if (el.type === "think") setThink(el.value, 1);
      else if (el.type === "thinkT") setThink(el.value, parseInt(el.sec));
      else if (el.type === "nextcostume") nextCostume();
      else if (el.type === "switchcostume") switchCostume(el.value);
      else if (el.type === "changeSize") increaseSize(parseInt(el.value));
      else if (el.type === "setSize") setSizeAs(parseInt(el.value));
      else if (el.type === "change") changeProperty(el.prop, parseInt(el.value));
      else if (el.type === "set") setProperty(el.prop, parseInt(el.value));
      else if (el.type === 'clear') clearEffect()
      else if (el.type === 'bounce') checkBounce();
    }
    setIsRunning(false)
  };
  return {
    position,
    cursor_pos,
    direction,
    sayFlag,
    thinkFlag,
    costume,
    size,
    color,
    fisheye,
    whirl,
    pixelate,
    mosaic,
    brightness,
    ghost,
    sayWord,
    thinkWord,
    corner,
    moveStepForward,
    turnAntiClockwise,
    turnClockwise,
    gotoRandomPosition,
    gotoPosition,
    glideToRandomPosition,
    glideToPosition,
    pointInDirection,
    pointToRandomPosition,
    pointToMousePointer,
    checkBounce,
    changeXBy,
    changeYBy,
    setX,
    setY,
    setSay,
    setThink,
    nextCostume,
    switchCostume,
    increaseSize,
    changeProperty,
    setProperty,
    setSizeAs,
    clearEffect,
    play,
    isRunning,
    setIsRunning
  };
}
