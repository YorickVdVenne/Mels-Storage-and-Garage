import { ReactNode } from 'react';

export interface BaseObject {
  id: string;
  title: string;
}

export interface ParentClass {
  children: ReactNode;
}
