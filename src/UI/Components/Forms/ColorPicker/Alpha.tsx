import { THsvColor } from "../../../../Data/Types/THsvColor";

export type AlphaProps = {
  color: THsvColor;
  alphaRef: React.RefObject<HTMLDivElement>;
  handleAlphaMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  hexColor: string;
};

const Alpha = (props: AlphaProps) => {
  const { color, alphaRef, handleAlphaMouseDown, hexColor } = props;

  return (
    <div
      ref={alphaRef}
      className="relative h-4 rounded-lg cursor-pointer"
      onMouseDown={handleAlphaMouseDown}
    >
      {/* Checkerboard background */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%) 50% / 8px 8px",
        }}
      />
      {/* Color gradient overlay */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(to right, transparent -100%, ${hexColor} 90%)`,
        }}
      />
      {/* Thumb */}
      <div
        className="absolute top-0 size-4 -ml-2 border-2 border-white-l rounded-full shadow-lg cursor-grab active:cursor-grabbing"
        style={{
          left: `${color.a}%`,
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};

export default Alpha;
