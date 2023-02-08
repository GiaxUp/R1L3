import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import fantasyList from "./data/fantasy.json";

function App() {
  console.log(fantasyList);
  return <div className="wrap">{<BookList />}</div>;
}

export default App;
