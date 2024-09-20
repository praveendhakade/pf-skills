import { useState } from "react";
import { ISkill, SkillIconSize } from "../types/skill";
import { getWidthOrHeight } from "../utils";
import "../assets/sass/style.scss";
interface ISkillIcon {
  name: ISkill;
  size?: SkillIconSize;
  width?: number | string;
  height?: number | string;
}

const SkillIcon: React.FC<ISkillIcon> = ({ name, size, width, height }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let iconWidth;
  let iconHeight;

  // if width and height are provided, they will take priority
  if (width) iconWidth = getWidthOrHeight(width);
  if (height) iconHeight = getWidthOrHeight(height);

  return (
    <div
      className="icon-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`icon ${name.name} ${size}`}
        style={{
          width: iconWidth,
          height: iconHeight,
        }}
      />
      {isHover && <div className="popup">{name.displayName}</div>}
    </div>
  );
};
export default SkillIcon;
