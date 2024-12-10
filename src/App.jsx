import NewProject from './component/NewProject';
import SideBarProject from './component/SideBar';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBarProject/>
      <NewProject />
    </main>
  );
}

export default App;
