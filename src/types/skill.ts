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

export type SkillIconSize = "small" | "medium" | "large";
export interface ISkill {
  name: SkillNameOptions;
  displayName: string;
}
