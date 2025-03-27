import ReactDOM from "react-dom/client";
import Router from "./router";

const App = () => <Router />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
