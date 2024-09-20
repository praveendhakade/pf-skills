declare module "pf-skills" {
  import React from "react";

  export type SkillIconSize = "small" | "medium" | "large";
  export interface ISkills {
    iconSize?: SkillIconSize;
    iconWidth?: number | string;
    iconHeight?: number | string;
  }
  export const Skills: React.FC<ISkills>;
  export type SkillNameOptions =
    | "react"
    | "nodejs"
    | "java"
    | "javascript"
    | "python"
    | "materialui"
    | "express"
    | "redux"
    | "sass"
    | "typescript"
    | "nextjs"
    | "mysql"
    | "css3"
    | "html5"
    | "mongodb"
    | "tailwind"
    | "csharp"
    | "reactnative"
    | "dotnet"
    | "reacthookform";

  export interface ISkillName {
    name: SkillNameOptions;
    displayName: string;
  }
  export interface ISkillIconProps {
    name: ISkillName;
    size?: SkillIconSize;
    width?: number | string;
    height?: number | string;
  }
  export const SkillIcon: React.FC<ISkillIconProps>;
}
