import Navbar from "../../components/Navbar";
import HomeScreen from "../../pages/HomeScreen";
import GlobalStyle from "../../theme/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
