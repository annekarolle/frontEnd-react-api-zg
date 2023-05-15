import "./App.css";
import ChatComponent from "./components/chatComponents/chatComponents";
import Footermain from "./components/footer";
import Header from "./components/header/header";
import { OperatorComponent } from "./components/operatorComponents/operatorComponents";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header />
      <div className="App-main-container">
        <OperatorComponent />
        <ChatComponent />
      </div>
      <Footermain />
    </div>
    </AuthProvider>
  );
}

export default App;
