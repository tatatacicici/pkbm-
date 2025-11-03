export interface TGetRolesId {
  code: number;
  status: string;
  message: string;
  data: [
    {
      id: string;
      name: string;
    }
  ];
}
