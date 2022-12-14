import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

interface IDashboardHomeReactSelect {
  register: any;
  control: any;
  labelTitle: string;
  value: string;
  placeholder: string;
}

const categoryOptions: { value: string; label: string; id: string }[] = [
  { value: 'Grocery', label: 'Grocery', id: 'fdskfdsklfsdlkfds' },
  { value: 'Pharmacy', label: 'Pharmacy', id: 'fkdspoeazpoeaz' },
  { value: 'Electronic', label: 'Electronic', id: 'fksdjkfjsdkfsdj' },
  { value: 'Food', label: 'Food', id: 'oindfsksdjkfsdj' },
];

export default function DashboardHomeReactSelect({
  register,
  control,
  labelTitle,
  value,
  placeholder,
}: IDashboardHomeReactSelect) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-900">
        {labelTitle}
      </label>
      <Controller
        name={value}
        control={control}
        render={({ field: { onChange, value, name, ref } }) => (
          <ReactSelect
            options={categoryOptions}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: '#f9fafb',
                border: '1px solid #d1d5db',
                marginTop: '-10px',
                fontSize: '0.875rem',
              }),
            }}
            placeholder={placeholder}
            value={categoryOptions.find((c) => c.value === value)}
            onChange={(selectedOption: any) => {
              onChange(selectedOption.id);
            }}
          />
        )}
      />
    </>
  );
}
