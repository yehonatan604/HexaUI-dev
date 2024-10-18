import { THsvColor } from "../../../../Data/Types/THsvColor";

export type SaturationProps = {
  color: THsvColor;
  canvasRef: React.RefObject<HTMLDivElement>;
  handleCanvasMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Saturation = (props: SaturationProps) => {
  const { color, canvasRef, handleCanvasMouseDown } = props;

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-48 rounded-lg cursor-crosshair"
      style={{
        background: `linear-gradient(to bottom, 
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,1) 100%),
              linear-gradient(to right,
              rgba(255,255,255,1) 0%,
              hsla(${color.h},100%,50%,1) 100%)`,
      }}
      onMouseDown={handleCanvasMouseDown}
    >
      {/* Crosshair cursor */}
      <div
        className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-none"
        style={{
          left: `${(color.s / 100) * 100}%`,
          top: `${((100 - color.v) / 100) * 100}%`,
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-white shadow-sm" />
      </div>
    </div>
  );
};

export default Saturation;
