import { PropTypes } from 'prop-types'; // Si quieres usar PropTypes
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useAuth } from "../hooks/useAuth";

export function Layout({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}

// Si deseas validar los props, puedes usar PropTypes
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
