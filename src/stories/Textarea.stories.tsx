import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Textarea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = ({ ...args }) => {
  return (
    <Field>
      <Field.Label>Textarea</Field.Label>
      <Field.Textarea placeholder="Custom TextArea" {...args} />
    </Field>
  );
};

export const Default = Template.bind({});

Default.args = {
  isResizable: true,
};
