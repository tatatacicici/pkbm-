import { api } from "../../config/apiConfig";
import { TAddFacultyPayload, TAddMajorPayload, TAddSubjectPayload, TFacultyDetailResponse, TFacultyResponse, TMajorDetailResponse, TMajorResponse,TSubjectDetailResponse, TSubjectResponse, TUpdateFacultyPayload, TUpdateMajorPayload, TUpdateSubjectPayload } from "../../types/rencatastudi";


export const getFacultyPaginationRequest = async (page:number,limit:number, search:string ): Promise<TFacultyResponse> => {
  const { data } = await api.get(`v1/faculties?page=${page}&limit=${limit}&search=${search}`);
  // console.log(data);
  
  return data;
};

export const getFacultyRequest = async (): Promise<TFacultyResponse> => {
  const { data } = await api.get(`v1/faculty`);
  // console.log(data);
  
  return data;
};


export const postFacultyRequest = async (
  payload: TAddFacultyPayload
): Promise<TFacultyDetailResponse> => {
  const { data } = await api({
    method: "post",
    url: "v1/faculty",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: payload,
  })
  return data;
};

export const putFacultyRequest = async (
  id: string,
  payload: TUpdateFacultyPayload
): Promise<TFacultyDetailResponse> => {
  const { data } = await api({
    method: "put",
    url: `v1/faculty/${id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: payload,
  })
  // console.log(data);
  
  return data;
};

export const deleteFacultyRequest = async (
  faculty_id: string
): Promise<TFacultyResponse> => {
  const { data } = await api({
    method: "delete",
    url: `v1/faculty/${faculty_id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return data;
};

//  export const postFacultyRequest = async (payload: TAddFacultyPayload): Promise<TFacultyResponse> => {
//     const {data} 
//  }

export const getMajorRequest = async (id: string): Promise<TMajorResponse> => {
    const { data } = await api.get(`v1/major/${id}`);
    return data;
  };

  export const getAllMajorRequest = async (): Promise<TMajorResponse> => {
    const { data } = await api.get(`v1/major`);
    return data;
  };

  export const getMajorPaginationRequest = async (page:number,limit:number, search:string): Promise<TMajorResponse> => {
    const { data } = await api.get(`v1/majors?page=${page}&limit=${limit}&search=${search}`);
    return data;
  };

  export const postMajorRequest = async (
    payload: TAddMajorPayload
  ): Promise<TMajorDetailResponse> => {
    const { data } = await api({
      method: "post",
      url: "v1/major",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payload,
    })
    return data;
  };

  export const putMajorRequest = async (
    major_id: string,
    payload: TUpdateMajorPayload
  ): Promise<TMajorDetailResponse> => {
    const { data } = await api({
      method: "put",
      url: `v1/major/${major_id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payload,
    })
    // console.log(data);
    
    return data;
  };

  export const deleteMajorRequest = async (
    major_id: string
  ): Promise<TMajorResponse> => {
    const { data } = await api({
      method: "delete",
      url: `v1/major/${major_id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return data;
  };

  export const getSubjectRequest = async (): Promise<TSubjectResponse> => {
    const { data } = await api.get(`v1/subject`);
    return data;
  };

  export const getSubjectWithPaginationRequest = async (
    page: number,
    limit: number,
    search: string
  ): Promise<TSubjectResponse> => {
    const { data } = await api.get(`v1/subjects?page=${page}&limit=${limit}&search=${search}`);
    return data;
  };

  export const postSubjectRequest = async (
    payload: TAddSubjectPayload
  ): Promise<TSubjectDetailResponse> => {
    const { data } = await api({
      method: "post",
      url: "v1/subject",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payload,
    })
    return data;
  };

  export const deleteSubjectRequest = async (
    subject_id: string
  ): Promise<TMajorResponse> => {
    const { data } = await api({
      method: "delete",
      url: `v1/subject/${subject_id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return data;
  };

  export const putSubjectRequest = async (
    major_id: string,
    payload: TUpdateSubjectPayload
  ): Promise<TSubjectDetailResponse> => {
    const { data } = await api({
      method: "put",
      url: `v1/subject/${major_id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payload,
    })
    return data;
  };
