import type { ClassItem } from "../types/class";

interface ClassCardProps {
  classItem: ClassItem;
  assignmentCount?: number;
  onClick?: () => void;
}

export function ClassCard({ classItem, assignmentCount, onClick }: ClassCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-stretch overflow-hidden rounded-md border border-neutral-200 bg-white text-left transition-colors hover:border-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
    >
      <div
        className="w-1.5 shrink-0"
        style={{ backgroundColor: classItem.color }}
      />
      <div className="flex flex-1 items-center gap-3 px-4 py-3">
        <span className="text-xl leading-none">{classItem.icon}</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-neutral-900">
            {classItem.name}
          </p>
          <p className="truncate text-xs text-neutral-500">
            {[classItem.section, classItem.room].filter(Boolean).join(" · ")}
          </p>
        </div>
        {typeof assignmentCount === "number" && (
          <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
            {assignmentCount}
          </span>
        )}
      </div>
    </button>
  );
}