import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavBar } from "./components/navbar/NavBar";
import { routes } from './views/navigation/routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { store } from './store/createStore';

const router = createBrowserRouter(routes)

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <NavBar />
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
)

export default App;
