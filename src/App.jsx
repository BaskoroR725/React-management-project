import { useState } from 'react';
import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import SideBarProject from './component/SideBar';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectState(prevState => {
      const newproject = {
        ...projectData,
        id: Math.floor(Math.random() * 100 + 1)
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newproject]
      }
    })
  }


  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBarProject 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
