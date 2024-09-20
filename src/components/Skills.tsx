import { SKILLS } from "../constants";
import { SkillIconSize } from "../types/skill";
import SkillIcon from "./SkillIcon";
import "../assets/sass/style.scss";
interface ISkills {
  iconSize?: SkillIconSize;
  iconWidth?: number | string;
  iconHeight?: number | string;
}
const Skills: React.FC<ISkills> = ({ iconSize, iconHeight, iconWidth }) => {
  return (
    <div className="skill-group">
      {SKILLS.map((skill) => (
        <SkillIcon
          key={skill.name}
          name={skill}
          size={iconSize}
          width={iconWidth}
          height={iconHeight}
        />
      ))}
    </div>
  );
};

export default Skills;
