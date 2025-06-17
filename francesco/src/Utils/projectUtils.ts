import { projectsData, Project } from "../Components/Data/ProjectsData";

// Estraggo tutti i progetti flat
export const getAllProjects = (): Project[] => {
  return projectsData.flatMap((year) => year.projects);
};

// Estraggo lo slug da un singolo progetto
export const getProjectSlug = (project: Project): string => {
  return project.link.split("/").pop() ?? "";
};

// Recupero un progetto dato uno slug
export const findProjectBySlug = (slug: string): Project | undefined => {
  return getAllProjects().find((project) => getProjectSlug(project) === slug);
};

// Recupero i progetti che hanno cient=""
export const getPlaygroundProjects = (): Project[] => {
  const allProjects: Project[] = projectsData.flatMap((yearBlock) => yearBlock.projects);
  return allProjects.filter((project) => project.client === "");
};