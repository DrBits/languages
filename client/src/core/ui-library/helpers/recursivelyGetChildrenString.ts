import { ReactNode } from 'react';

const recursivelyGetChildrenString = (children: ReactNode): string => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return '';
  if (typeof children === 'object') {
    const childProps = (
      (children as unknown as Record<string, unknown>)?.props as Record<
        string,
        unknown
      >
    )?.children as ReactNode;
    if (childProps) return recursivelyGetChildrenString(childProps);
  }

  return '';
};

export default recursivelyGetChildrenString;
