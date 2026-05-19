import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';

function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),transparent_28%)]">
      <Navbar />
      <ScrollProgress />
      <main className="pt-24 px-4 sm:px-6 lg:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
