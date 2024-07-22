import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./context/SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </BrowserRouter>
  </>
);
