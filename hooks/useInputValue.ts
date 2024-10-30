import { useState } from 'react';

interface Props {
  type?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'password';
}

const useInputValue = ({ type = 'default' }: Props) => {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const validate = () => {
    if (type === 'email-address') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (type === 'numeric') {
      return /^[0-9]+$/.test(value);
    }

    if (type === 'phone-pad') {
      return /^[0-9]{10}$/.test(value);
    }

    if (type === 'password') {
      return value.length >= 6;
    }

    return true;
  };

  return {
    value,
    onChangeText,
    validate,
  };
};

export default useInputValue;
