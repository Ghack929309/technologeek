import React from "react";

export default function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div
          className={`flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-md w-11 h-11`}
        >
          {React.cloneElement(props.icon, {
            className: `w-7 h-7 text-teal-50`,
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">{props.title}</h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
        </div>
      </div>
    </>
  );
}
