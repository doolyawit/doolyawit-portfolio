import { useEffect, useMemo, useState } from 'react';
import { Project, ProjectRepositoryAble } from '../../../services/datasources/interface/project';
import { ProjectService } from '../../../services/project';
import ProjectMockRepository from '../../../services/datasources/mock/project';

const useViewModel = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const projectRepo: ProjectRepositoryAble = useMemo(() => {
    return new ProjectService(new ProjectMockRepository());
  }, []);

  useEffect(() => {
    projectRepo.getProjects().subscribe({
      next: (res) => {
        setProjects(res);
        console.log('res: from project mock ', res);
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }, []);

  return {
    projects,
  };
};
export default useViewModel;
