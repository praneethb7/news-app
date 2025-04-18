import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 md:px-8 max-w-6xl mx-auto">
        <SearchBar />
        <NewsList />
      </main>
    </div>
  );
}

export default App;
