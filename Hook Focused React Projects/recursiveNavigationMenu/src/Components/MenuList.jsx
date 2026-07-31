import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    // Render all menu items at the current level
    <ul className="space-y-3">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
}