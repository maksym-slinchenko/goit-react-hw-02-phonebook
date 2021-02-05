import React from 'react';

export default function Filtre({ value, onChangeFiter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={e => onChangeFiter(e.target.value)}
        />
      </label>
    </>
  );
}
