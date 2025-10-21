import { UserCircleIcon, Bars3Icon, EnvelopeIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SideBar from './SideBar';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-12 bg-gray-100 flex items-center justify-between px-4 border-b z-10 font-sans text-[0.94rem]">
      
      <div className="flex items-center gap-2">
        <Bars3Icon
          className="w-6 h-6 text-gray-700 block lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <p className="font-semibold text-gray-800 hidden lg:block">Dashboard</p>
      </div>

      <div className="flex items-center gap-5">
        <UserPlusIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" title="Agregar usuario" />
        <EnvelopeIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" title="Mensajes" />
        <UserCircleIcon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
        {/* <p className="font-semibold text-gray-800">Carlos Diaz</p> */}
      </div>

      <SideBar isOpen={isOpen} />
    </div>
  );
}
