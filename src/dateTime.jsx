import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function DateTime() {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <DateTimePicker onChange={handleChange} value={value} />
    </div>
  );
}
