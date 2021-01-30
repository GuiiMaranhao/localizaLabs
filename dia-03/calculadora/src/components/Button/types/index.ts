import React, { ButtonHTMLAttributes } from 'react';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    backgroundColor: string;
    color: string;
    icon?: string;
}