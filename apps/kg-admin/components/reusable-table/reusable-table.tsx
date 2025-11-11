import React from 'react';
import { TableProps } from './types';
import { FaSort } from 'react-icons/fa';

export const ReusableTable: React.FC<TableProps> = ({
  columns,
  children,
  classHead,
  classBody,
  className,
  MainTableSort,
}) => {
  const ChildreenMainTable = React.Children.toArray(children);
  return (
    <table className={`table-auto w-full text-[12px] ${className}`}>
      <thead className={`w-full ${classHead}`}>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              colSpan={column.colspan || 1}
              className={`px-4 py-4  ${column.className}`}
            >
              <div className="flex justify-center items-center gap-4">
                {column.header}
                {column.hasSorting && (
                  <button
                    onClick={() =>
                      column.sort_by &&
                      MainTableSort &&
                      MainTableSort(column.sort_by)
                    }
                  >
                    <FaSort />
                  </button>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={`${classBody}`}>{ChildreenMainTable}</tbody>
    </table>
  );
};
