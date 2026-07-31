import MenuList from "./MenuList";

export default function RecursiveNavMenu({ menus = [] }) {
  return (
    // Main wrapper for the recursive navigation menu
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6">
        {/* Render the first level of the menu */}
        <MenuList list={menus} />
      </div>
    </div>
  );
}