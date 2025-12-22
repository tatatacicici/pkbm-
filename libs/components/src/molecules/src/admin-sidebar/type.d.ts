import { ReactNode } from "react";

export type TSidebarProp = {
  children: ReactNode;
  contentStyle?: string;
  dataSidebar?: Array;
  hasAvatar: boolean;
};
