import { Link } from "react-router-dom";

export default function SideBar({isOpen}) {

  return (
    <aside
      className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-52 border-r border-gray-300 bg-white transform transition-transform duration-300 z-10 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:block`}
    >
      <div className="flex h-full flex-col px-3 py-4">
        <div className="flex grow flex-col justify-between">
          <ul className="flex flex-col space-y-2 text-sm font-sans text-[0.94rem] font-semibold text-gray-700">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 h-[48px] rounded-md bg-gray-50 px-3 py-2 transition-all duration-200 hover:bg-sky-100 hover:text-blue-600"
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                to="/my-info"
                className="flex items-center gap-2 h-[48px] rounded-md bg-gray-50 px-3 py-2 transition-all duration-200 hover:bg-sky-100 hover:text-blue-600"
              >
                Mi Información
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <footer className="mt-6 border-t border-gray-200 pt-4 text-[0.85rem] text-gray-500 text-center">
            © 2025
          </footer>
        </div>
      </div>
    </aside>
  );
}