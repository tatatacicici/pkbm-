export interface TUserByIdResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: any;
  gender: any;
  phone_number: any;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  role: string;
  role_id: string;
}
