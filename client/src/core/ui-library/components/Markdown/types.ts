export type MarkDownContainerProps = Pick<
  MarkDownProps,
  'inline' | 'className'
>;

export type MarkDownProps = {
  source: string;
  linkTarget?: string;
  escapeHtml?: boolean;
  inline?: boolean;
  className?: string;
};
