import React from "react";
import { Icon } from "@iconify/react";

export default function ProjectTemp({
  name,
  skillsUsed,
  discription,
  demoLink,
}) {
  return (
    <main className="projectBody1">
      <a href={demoLink} target="_blank" className="w-full h-full">
        <div className="projectBody2">
          <section className="flex items-center">
            <span>
              <Icon icon="mdi:github" width="20" />
            </span>
            <span className="font-semibold ml-2">{name}</span>
          </section>
          <section className="flex flex-wrap gap-1">
            {skillsUsed.map((tool) => (
              <div
                key={tool}
                className="badge badge-neutral bg-[#e1e3e7] border-[#e1e3e7] text-gray-400"
              >
                #{tool}
              </div>
            ))}
          </section>
          <section>{discription}</section>
          {/* <section className="flex justify-center">
            <Icon icon="akar-icons:link-out" />
          </section> */}
        </div>
      </a>
    </main>
  );
}
