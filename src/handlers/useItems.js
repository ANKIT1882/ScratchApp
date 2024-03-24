import {v4 as uuid} from 'uuid'
import React, { useState } from "react";
export default function useItems(){
    const [move,setMove]=useState({
        move:{id:uuid(),value:10,index:0},
        turnR:{id:uuid(),value:15,index:1},
        turnL:{id:uuid(),value:15,index:2},
        goto:{id:uuid(),value:"random_pos",index:3},
        gotoxy:{id:uuid(),x:0,y:0,index:4},
        glide:{id:uuid(),sec:1,value:"random_pos",index:5},
        glidexy:{id:uuid(),sec:1,x:0,y:0,index:6},
        pointDirec:{id:uuid(),value:90,index:7},
        pointTo:{id:uuid(),value:"random_pos",index:8},
        changeX:{id:uuid(),value:10,index:9},
        changeY:{id:uuid(),value:10,index:10},
        setX:{id:uuid(),value:10,index:11},
        setY:{id:uuid(),value:10,index:12},
        say:{id:uuid(),value:'hello',index:13},
        sayT:{id:uuid(),value:'hello',sec:1,index:14},
        think:{id:uuid(),value:'Hmm',index:15},
        thinkT:{id:uuid(),value:'Hmm',sec:1,index:16},
        nextcostume:{id:uuid(),index:17},
        switchcostume:{id:uuid(),value:1,index:18},
        changeSize:{id:uuid(),value:10,index:19},
        setSize:{id:uuid(),value:100,index:20},
        change:{id:uuid(),prop:'color',value:25,index:21},
        set:{id:uuid(),prop:'color',value:0,index:22},
        clear:{id:uuid(),index:23},
        bounce:{id:uuid(),index:24},
        coordinate:{x:false,y:false}
    })
    /* const [look,setLook]=useState({
        say:{id:uuid(),value:'hello',index:13},
        sayT:{id:uuid(),value:'hello',sec:1,index:14},
        think:{id:uuid(),value:'Hmm',index:15},
        thinkT:{id:uuid(),value:'Hmm',sec:1,index:16},
        nextcostume:{id:uuid(),index:17},
        switchcostume:{id:uuid(),value:1,index:18},
        changeSize:{id:uuid(),value:10,index:19},
        setSize:{id:uuid(),value:100,index:20},
        change:{id:uuid(),prop:'color',value:25,index:21},
        set:{id:uuid(),prop:'color',value:0,index:22}
     })*/
      const [dest_items,setDestItem]=useState([])
      const handleDrag=(drag)=>{
        console.log(dest_items)
        /*
    combine: null
    destination: {droppableId: 'right', index: 1}
    draggableId: "5skjns"
    mode: "FLUID"
    reason: "DROP"
    source: {index: 0, droppableId: 'left'}
        */
    function insertElement(array, element, position,type) {
      let newArray=[...array]
     
      newArray.splice(position, 0, {...element,type});
     newArray[position].id=uuid()
    
      return newArray;
    }
    function removeItemAtPosition(array, position) {
      let newArray=[...array]
      // Remove the item at the specified position
      newArray.splice(position, 1);
    
      return newArray;
    }
    //0 1 2 3 4 5
    function pickAndInsert(array, fromPosition, toPosition) {
      let newArray=[...array]
      let el=array[fromPosition]
      if(fromPosition>toPosition)
     {
      for(let i=fromPosition;i>toPosition;i--)
      newArray[i]=newArray[i-1];
     newArray[toPosition]=el;
     }
     else{
      for(let i=fromPosition;i<toPosition;i++)
      newArray[i]=newArray[i+1];
     newArray[toPosition]=el;
     }
      return newArray;
    }
    
       if(drag.source.droppableId==='left'){
        //drag from left
        if(drag.destination && drag.destination.droppableId==='right')
         setDestItem(prev=>insertElement(prev,move[Object.keys(move)[drag.source.index]],drag.destination.index,Object.keys(move)[drag.source.index]));
        
       }
       else{
        //drag from right
        if(!drag.destination || drag.destination.droppableId==='left')
        setDestItem(prev=>removeItemAtPosition(prev,drag.source.index))
        if(drag.destination && drag.destination.droppableId==='right')
          setDestItem(prev=>pickAndInsert(prev,drag.source.index,drag.destination.index))
       }
    
      }

      return {move,dest_items,setMove,setDestItem,handleDrag};
}