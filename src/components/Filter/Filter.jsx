import React from 'react';

function Filter({ onChange }) {
  return (
    <>
      <input onChange={onChange} type="text" placeholder="search contact" />
    </>
  );
}

export default Filter;
