export type WorkType =
  | "ASSIGNMENT"
  | "SHORT_ANSWER_QUESTION"
  | "MULTIPLE_CHOICE_QUESTION";

export type SubmissionState = "NEW" | "CREATED" | "TURNED_IN" | "RETURNED";

export type Priority = "none" | "low" | "medium" | "high";

export type AssignmentBucket =
  | "overdue"
  | "dueToday"
  | "upcoming"
  | "noDate"
  | "completed";

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  workType: WorkType;
  maxPoints: number;
  dueDate: string | null;
  creationTime: string;
  alternateLink: string;

  submissionState: SubmissionState;
  assignedGrade: number | null;
  late: boolean;

  priority: Priority;
  tags: string[];
  notes: string;
  completed: boolean;
}