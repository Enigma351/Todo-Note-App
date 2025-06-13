import React from 'react';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_2px_10px_rgba(0,0,0,0.3)] ">
            NoteSpace
          </h1>
          <div className="flex items-center gap-4">
            <Link to={'/create'} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Notes</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
