import { Provider } from "react-redux";
import "./shared/reset.css";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/config/configStore";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
