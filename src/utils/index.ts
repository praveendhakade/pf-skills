import { ICON_SIZE } from "../constants";
import { SkillIconSize } from "../types/skill";

export const getSize = (size: SkillIconSize) => {
  switch (size) {
    case "small":
      return ICON_SIZE.SMALL;
    case "medium":
      return ICON_SIZE.MEDIUM;
    case "large":
      return ICON_SIZE.LARGE;
    default:
      return ICON_SIZE.SMALL;
  }
};

export const getWidthOrHeight = (value: number | string) => {
  if (typeof value === "number") return `${value}px`;
  return value;
};
