export type TMyStudyBreadCrumbsItems = {
  name: string;
  link: string;
};

export type TuseMyStudyBreadCrumbsItemsProps = {
  type?: 'modul' | 'kuis' | 'tugas' | 'diskusi' | undefined;
  params?: {
    sessionId?: string;
    subjectName?: string;
    subjectId?: string;
    quizId?: string;
  };
  competencyDetailsName?: string;
  edgeName?: string;
};
