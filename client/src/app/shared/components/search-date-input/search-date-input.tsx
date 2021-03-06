import React, { useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { BaseOptions } from 'flatpickr/dist/types/options';

import { FieldProps } from 'app/shared/models';
import { toShortDate } from 'app/shared/utils/helpers';

import 'flatpickr/dist/themes/light.css';
import './search-date-input.scss';

const options: Partial<BaseOptions> = {
  mode: 'range',
  dateFormat: 'm/d/y'
};

export function SearchDateInput(props: FieldProps<HTMLInputElement> & { separator: string }): JSX.Element {
  const { name, value, label, onChange, separator } = props;
  const formatedValue = value ?
    (value as string)
      .split(separator)
      .map((date: string): Date => new Date(date))
    : [];

  const [searchDateRange, setSearchDateRange] = useState<Date[]>(formatedValue);

  useEffect((): void => {
    if (searchDateRange.length < 2) {
      return;
    }

    onChange({
      target: {
        name,
        value: searchDateRange
          .map(toShortDate)
          .join(separator)
      }
    });
  }, [name, onChange, searchDateRange, separator]);

  return (
    <div className="search-select form-group">
      { label && <label htmlFor={name} className="search-select__label uppercase-label">{label}:</label> }
      <Flatpickr id={name} options={{ ...options, defaultDate: searchDateRange }} className="search-date-input form-control"
        name={name} onClose={(event): void => setSearchDateRange(event)} />
    </div>
  );
}
