export type WithChildren<T = object> = T & {
  children?: React.ReactNode | React.ReactNode[];
};
