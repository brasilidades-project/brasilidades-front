import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Homepage from './pages/Homepage';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/homepage"
              element={
                <ProtectedRouteGuard>
                  <Homepage />
                </ProtectedRouteGuard>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}
