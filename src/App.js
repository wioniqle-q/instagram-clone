import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Story from "./Components/Story/Story";

function App() {
  return (
    <div className="bg-gray-100" >
      <div className="bg-white">
        <Header />
      </div>
      <div className="h-screen">
        <div className="max-w-6xl mx-auto px-1">
          <div className="flex  justify-between mt-10">
            <div className="w-full sm:w-3/4">
              <Story />
              <Feed />
            </div>
            <div className="hidden sm:block sm:w-1/4">
              <SideBar />
            </div>
          </div>
        </div>
      </div>

      {/*Feed*/}
      {/*SideBar*/}

    </div>
  );
}

export default App;
