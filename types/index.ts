import { MouseEventHandler } from 'react';

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinder: number;
  displacemnt: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (manufacturer: T) => void;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number | string;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams?: FilterProps;
}


export interface OptionProps {
  title: string;
  value: string | number;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps [];
  setFilter: (selected: T) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}