import { ReactNode } from 'react';

export type ExpandableProps = {
  children: ReactNode;
  height?: number;
  opened?: boolean;
};
