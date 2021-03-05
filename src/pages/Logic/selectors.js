import _ from "lodash";

export const SelectProjects = (ids, projects) =>
  Object.values(_.pick(projects, ids));

export const GenerateTags = (projects) => {
  const tags = {};

  for (const proj of projects) {
    for (const tech of proj.stack) {
      tags[tech] = new Set(tags[tech] || []).add(proj.id);
    }
  }
  return tags;
};
