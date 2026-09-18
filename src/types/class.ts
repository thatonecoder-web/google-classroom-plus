export interface ClassItem {
    id: string;
  name: string;
  section?: string;
  descriptionHeading?: string;
  room?: string;
  courseState: "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | "SUSPENDED";
  alternateLink: string;

  color: string;

  icon: string;

  archived: boolean;

  sortOrder: number;
}