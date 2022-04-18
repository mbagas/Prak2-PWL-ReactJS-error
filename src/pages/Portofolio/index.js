import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, PageLayout, Card } from "../../components";
import _ from "lodash";

export const PortofolioIndex = () => {
  const [project, setProject] = useState({
    projects: "",
  });
  const styles = style();

  const fetchProjects = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/projects");
    setProject({
      projects: await response.json(),
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // console.log(project.projects.projects);
  _.map(project.projects.projects, (project) => {
    console.log(project.name);
  });
  // project?.projects?.projects?.map((project) => console.log(project?.name));

  return (
    <PageLayout>
      <div className={styles.landing}>
        asdasdasd
        <Button />
      </div>
      <div className={styles.project}>
        {_.map(project.projects.projects, (project) => {
          return <Card name={project.name} />;
        })}
      </div>
    </PageLayout>
  );
};

const style = createUseStyles({
  landing: {
    padding: "20px",
    flex: 1,
  },
  project: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default PortofolioIndex;
