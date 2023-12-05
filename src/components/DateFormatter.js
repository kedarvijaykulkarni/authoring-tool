import React from 'react';
import { format } from 'date-fns';

const DateFormatter = (date, formatText) => {
  return <React.Fragment>{format(date, formatText)}</React.Fragment>; // format = 'MMMM d, yyyy'
};

export default DateFormatter;
