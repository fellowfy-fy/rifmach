import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TASK_CONTENT } from "@/constants/tasks";

export const Task = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[20px] text-white mb-10">
        {TASK_CONTENT.title}
      </h2>
      <div className="w-[415px] h-[404px] mb-[65px]">
        <ScrollArea className="h-full">
          <div className="text-[15px] text-white leading-normal pr-4">
            {TASK_CONTENT.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex gap-2">
        {TASK_CONTENT.tags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center gap-1 bg-white rounded-full px-3 py-1"
          >
            <span role="img" aria-label="emoji">
              {tag.emoji}
            </span>
            <span className="text-textsmain text-sm">
              #{tag.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

