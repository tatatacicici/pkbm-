export type TCrumbItem = {
  link: string;
  name: string;
};

export type TBreadCrumbProps = {
  textColor?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  items: CrumbItem[];
  className?: string;
};
