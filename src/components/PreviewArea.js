import React from "react";
import CatSprite from "./CatSprite";
export default function PreviewArea({ spriteData, x, y }) {
  return (
    <div> {"Preview area"}
      <CatSprite spriteData={spriteData} x={x} y={y} />
    </div>
  );
}
