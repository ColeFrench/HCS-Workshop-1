import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="This Site"
        description="I made this site"
        link="/"
      />
      <Project
        title="This Site As Well"
        description="I made this site as well"
        link="/"
      />
    </div>
  );
}
