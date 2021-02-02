import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { IProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args}>Botão</Button>;

export const Inicial = Template.bind({});
Inicial.args = {
  color: 'white',
  background: 'navy',
};

export const Carregando = Template.bind({});
Carregando.args = {
  color: 'white',
  background: 'navy',
  loading: true,
};

export const IconStart = Template.bind({});
IconStart.args = {
  color: 'white',
  background: 'navy',
  iconStart: <FiUser />,
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  color: 'white',
  background: 'navy',
  iconEnd: <FiUser />,
};
