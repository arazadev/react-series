import { useState } from "react";
import data from "./data";

export default function Accordion() {
  // Tracks the currently open accordion item's id (single-select mode).
  // null means no item is open.
  const [selected, setSelected] = useState(null);

  // Toggles whether the accordion allows multiple items open at once.
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  // Tracks all currently open item ids when multi-selection mode is enabled.
  const [multiple, setMultiple] = useState([]);

  // Handles opening/closing an item in single-selection mode.
  // Clicking the already-open item closes it; clicking any other item opens it
  // (and implicitly closes the previous one, since only one id is stored).
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Handles opening/closing an item in multi-selection mode.
  // Maintains an array of open ids: adds the id if not present (opening it),
  // or removes it if already present (closing it).
  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center flex-col gap-5 px-4 py-10">
      {/* Toggle button: switches the accordion between single-select and multi-select behavior */}
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
      >
        Enable Multi Selection
      </button>

      <div className="w-full max-w-2xl">
        {/* Guard clause: only render the list if data exists and isn't empty */}
        {data && data.length > 0 ? (
          <div className="space-y-4">
            {data.map((dataItem) => (
              <div
                key={dataItem.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Question header — click handler depends on the current mode:
                    multi-selection uses handleMultipleSelection, otherwise
                    falls back to single-selection behavior */}
                <button
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-800">
                    {dataItem.question}
                  </h3>

                  {/* Icon shows "−" when the item is open (in either mode), "+" when closed */}
                  <span className="text-2xl font-bold text-blue-600">
                    {selected === dataItem.id || multiple.includes(dataItem.id)
                      ? "−"
                      : "+"}
                  </span>
                </button>

                {/* Answer panel: rendered only if the item is open,
                    either as the single `selected` item or included in the `multiple` array */}
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="px-6 pb-5 text-slate-600 leading-7 border-t border-slate-200">
                    <p className="pt-4">{dataItem.answer}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          // Fallback UI shown when the data array is missing or empty
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-slate-500">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
}
