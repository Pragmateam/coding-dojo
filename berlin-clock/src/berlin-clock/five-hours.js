import React from 'react';

export default ({date}) => {
  const howManyOn = Math.trunc((new Date().getHours() / 5));
  const fiveHoursRow = ['O', 'O', 'O', 'O'];

  for (let i = 0; i < howManyOn; i++) {
    fiveHoursRow[i] = 'R';
  };

  const foo = fiveHoursRow.map((bar, index) => {
    return <li key={index}>{bar}</li>
  });

  return (
    <ul>
      {foo}
    </ul>
  );
};
