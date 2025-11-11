import { DataPenugasan, SubjectPenugasan } from '../types/study-plan';

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export function convertDataToSubjects(data: DataPenugasan): SubjectPenugasan[] {
  const categories = ['pending', 'ongoing', 'rejected'];
  let result: SubjectPenugasan[] = [];

  for (const category of categories) {
    const filteredCat = () => {
      switch (category) {
        case 'pending':
          return 'Diproses';
        case 'ongoing':
          return 'Disetujui';
        case 'rejected':
          return 'Ditolak';
        default:
          return category;
      }
    };
    const subjects = (data as any)[category].subjects.map((subject: any) => ({
      ...subject,
      status: filteredCat(),
    }));
    result = result.concat(subjects);
  }

  return result;
}
