import { THsvColor } from "../../../../Data/Types/THsvColor";

export type HueProps = {
  sliderRef: React.RefObject<HTMLDivElement>;
  thumbRef: React.RefObject<HTMLDivElement>;
  color: THsvColor;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Hue = (props: HueProps) => {
  const { sliderRef, thumbRef, color, handleMouseDown } = props;

  return (
    <div
      ref={sliderRef}
      className="relative h-4 rounded-lg cursor-pointer"
      style={{
        background: `linear-gradient(to right, 
              hsl(0, 100%, 50%),
              hsl(60, 100%, 50%),
              hsl(120, 100%, 50%),
              hsl(180, 100%, 50%),
              hsl(240, 100%, 50%),
              hsl(300, 100%, 50%),
              hsl(360, 100%, 50%))`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        ref={thumbRef}
        className="absolute top-0 size-4 -ml-2 border-2 border-white-l rounded-full shadow-lg cursor-grab active:cursor-grabbing"
        style={{
          left: `${(color.h / 360) * 100}%`,
          backgroundColor: `hsl(${color.h}, 100%, 50%)`,
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Hue;
