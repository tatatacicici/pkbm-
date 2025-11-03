export type TableProps = {
  columns: TableColumn[];
  className?: string;
  children: ReactNode;
  classHead: string;
  classBody: string;
  MainTableSort?: (header: string) => void;
};
