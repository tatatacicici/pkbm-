import { atom } from 'recoil';

export const CardStudyPlanState = atom({
    key: 'card-study-plan',
    default: "none"
});

export const EmptyStudyPlanState = atom({
    key: 'empty-study-plan',
    default: false
});