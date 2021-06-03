import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext); // returns undefined if not wrapped by a `Field`

  return <StyledLabel ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';