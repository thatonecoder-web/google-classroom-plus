import type { Assignment } from "../types/assignment";
import type { ClassItem } from "../types/class";
import { formatDueLabel } from "../lib/assignmentUtils";

interface AssignmentCardProps {
  assignment: Assignment;
  course?: ClassItem;
  onToggleComplete: (id: string) => void;
}

const priorityColor: Record<Assignment["priority"], string> = {
  high: "#E0736F",
  medium: "#E0C56F",
  low: "#6FB5E0",
  none: "#D4D4D4",
};

export function AssignmentCard({ assignment, course, onToggleComplete }: AssignmentCardProps) {
  const dueLabel = formatDueLabel(assignment.dueDate);
  const isOverdue = !assignment.completed && dueLabel.endsWith("overdue");

  return (
    <div className="flex items-start gap-3 rounded-md border border-neutral-200 bg-white p-3">
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={() => onToggleComplete(assignment.id)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-neutral-900"
      />

      <div
        className="mt-0.5 h-4 w-1 shrink-0 rounded-full"
        style={{ backgroundColor: priorityColor[assignment.priority] }}
      />

      <div className="min-w-0 flex-1">
        <p
          className={
            assignment.completed
              ? "truncate text-sm text-neutral-400 line-through"
              : "truncate text-sm font-medium text-neutral-900"
          }
        >
          {assignment.title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
          {course && (
            <span className="flex items-center gap-1">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: course.color }}
              />
              {course.name}
            </span>
          )}
          <span className={isOverdue ? "font-medium text-red-600" : ""}>
            {dueLabel}
          </span>
          {assignment.assignedGrade != null && (
            <span>
              {assignment.assignedGrade}/{assignment.maxPoints}
            </span>
          )}
        </div>

        {assignment.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {assignment.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}