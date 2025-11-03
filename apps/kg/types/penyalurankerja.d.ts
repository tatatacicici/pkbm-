export type TPenyaluranKerjaData = {
  id?: string;
  position?: string;
  company?: string;
  company_logo?: StaticImageData;
  location?: string;
  min_salary?: number;
  max_salary?: number;
  workhour_start?: string;
  workhour_end?: string;
  workday?: string[];
  experience?: string;
  description?: string[];
  type?: string;
  tag?: string;
  closing_date?: string;
};

export type TPenyaluranKerjaDataById = {
  data: {
    id?: string;
    position?: string;
    company?: string;
    company_logo?: StaticImageData | undefined;
    location?: string;
    min_salary?: number;
    max_salary?: number;
    workhour_start?: string;
    workhour_end?: string;
    workday?: string[];
    experience?: string;
    description?: string[];
    type?: string;
    tag?: string;
    closing_date?: string;
  };
};

export type TPenyaluranKerjaResponse = {
  meta: {
    page?: number;
    per_page?: number;
    page_size?: number;
    total_data?: number;
  };
  data: Array<TPenyaluranKerjaData>;
} & TMetaItem;

type TMetaItem = {
  code: number;
  status: string;
  message: string;
};

export interface CardJobListProps {
  slug?: string;
  title?: string;
  desc?: string;
  image?: StaticImageData;
  location?: string;
  min_salary?: number;
  max_salary?: number;
  type?: string;
  time?: string;
  bottomText?: string;
  bottomIcon?: ReactNode;
}

// export interface StaticImageData {
//   src: string;
//   height: number;
//   width: number;
//   blurDataURL?: string;
//   blurWidth?: number;
//   blurHeight?: number;
// }

export type TJobConstanstResponse = {
  data?: Data;
} & TMetaItem;

export interface Data {
  type?: Type;
  experience?: Experience;
  tag?: Tag;
  location?: Location;
}

export interface Type {
  keys?: string[];
  values?: string[];
}

export interface Experience {
  keys?: string[];
  values?: string[];
}

export interface Tag {
  keys?: string[];
  values?: string[];
}

export interface Location {
  keys?: string[];
  values?: string[];
}
