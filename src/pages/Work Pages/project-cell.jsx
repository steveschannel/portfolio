import React from "react";

export const ProjectCell = ({
  id,
  title,
  byline,
  role,
  stack,
  body,
  links,
  activeTags,
}) => {
  return (
    <div className="rounded shadow-xl p-10 m-5" key={id}>
      <h1
        className="text-2xl font-black uppercase"
        style={{ color: "#235789" }}
      >
        {title}
      </h1>
      <div className="max-w-md">
        <h2 className="font-light">{byline}</h2>
        <p className="mt-2">{body}</p>
        <p className="mt-2 mb-2 font-bold">Stack</p>
        <StackDisplay stack={stack} activeTags={activeTags} />
        <p className="mt-2 font-bold">Role</p>
        <p>{role}</p>
        <LinksDisplay links={links} />
      </div>
    </div>
  );
};

export const StackDisplay = ({ stack, activeTags }) => {
  return stack.map((tag) => (
    <div
      key={tag}
      className={`p-1 mr-2 mb-2  rounded-sm inline-block ${
        activeTags.has(tag) ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      {tag}
    </div>
  ));
};

export const LinksDisplay = ({ links }) => {
  return links.length !== 0 ? (
    <>
      <p className="mt-2 mb-2 font-bold">Links</p>
      {links.map((link) => (
        <button key={link[0]}>
          <a href={link[1]} className="p-1 mr-2 mb-2 inline-block border">
            {link[0]}
          </a>
        </button>
      ))}
    </>
  ) : null;
};
