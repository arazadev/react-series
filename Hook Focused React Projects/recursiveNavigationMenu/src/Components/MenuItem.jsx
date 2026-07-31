import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  // Stores the expand/collapse state of the current menu item
  const [showCurrentChildren, setShowCurrentChildren] = useState({});

  // Toggle the visibility of the current item's children
  function handleToggleChildren(getCurrentlabel) {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getCurrentlabel]: !showCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <li className="transition-all duration-300">
      {/* Menu item container */}
      <div className="group flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md hover:bg-indigo-500/20 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
        <p className="font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors">
          {item.label}
        </p>

        {/* Show expand/collapse button only if children exist */}
        {item && item.children && item.children.length ? (
          <button
            onClick={() => handleToggleChildren(item.label)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-indigo-500 text-white transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {/* Change icon based on expanded/collapsed state */}
            {showCurrentChildren[item.label] ? (
              <FaMinus size={14} />
            ) : (
              <FaPlus size={14} />
            )}
          </button>
        ) : null}
      </div>

      {/* Recursively render child menu items when expanded */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      showCurrentChildren[item.label] ? (
        <div className="ml-5 mt-3 border-l-2 border-indigo-400/30 pl-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
