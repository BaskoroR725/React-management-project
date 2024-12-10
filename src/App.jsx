import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import SideBarProject from './component/SideBar';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBarProject/>
      <NoProjectSelected />
    </main>
  );
}

export default App;
