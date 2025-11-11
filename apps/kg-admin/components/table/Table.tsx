'use client';

import React from 'react';
import { TTable } from '../../types';

const Table = ({ children }: TTable) => {
  return (
    <div className="rounded-lg">
      <table className="w-full table-auto">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
