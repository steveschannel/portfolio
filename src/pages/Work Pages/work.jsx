import React, { useState } from "react";
import { Projects, Ids } from "../Logic/projects";
import { SelectProjects, GenerateTags } from "../Logic/selectors";
import { ProjectCell } from "./project-cell";
import _ from "lodash";

export const Work = () => {
  const [tags] = useState(() => GenerateTags(SelectProjects(Ids, Projects)));
  const [activeTags, setActiveTags] = useState(new Set());

  const clickTag = (tag) =>
    activeTags.has(tag)
      ? setActiveTags(new Set([...activeTags].filter((t) => t !== tag)))
      : setActiveTags(
          new Set(activeTags.size !== 0 ? activeTags : []).add(tag)
        );

  const filteredIds = [...activeTags].reduce(
    (acc, curr) => _.intersection(acc, [...tags[curr]]),
    Ids
  );

  return (
    <div className="mt-5 mx-5">
      <h1 className="mb-2 font-bold text-center">Filter projects by tag</h1>
      {Object.keys(tags).map((tag) => (
        <button
          key={tag}
          style={{ outline: "none" }}
          className={`p-1 mr-2 mb-2 hover:bg-blue-500 hover:text-white rounded-sm inline-block ${
            activeTags.has(tag) ? "bg-blue-100" : "bg-gray-100"
          }`}
          onClick={() => clickTag(tag)}
        >
          {tag}
        </button>
      ))}
      <div className="flex flex-wrap justify-center">
        {SelectProjects(filteredIds, Projects).map((project) => (
          <ProjectCell {...project} key={project.id} activeTags={activeTags} />
        ))}
      </div>
    </div>
  );
};
export default Work;
