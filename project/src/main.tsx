import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./context/SidebarContext.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <SidebarContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SidebarContextProvider>
    </BrowserRouter>
  </>
);
