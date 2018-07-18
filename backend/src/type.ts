import { ObjectID } from 'mongodb';

export interface Candidate {
    _id: ObjectID;
    name: string;
    grade: string;
    institute: string;
    major: string;
    score: "10%" | "25%" | "50%" | "100%";
    mail: string;
    phone: string;
    abandon?: boolean;
    time1: string;
    time2: string;
    group: string;
    sex: "Male" | "Female";
    step: string;
    intro: string;
    resume: string; // file path
    comments: object;
}

type group = "web" | "lab" | "ai" | "game" | "android" | "ios" | "design" | "pm";

interface Data {
    group: group;
    total: number;
    steps: number[];
}

export interface Recruitment {
    _id: ObjectID;
    title: string; // e.g. 2018A || 2018S (A: AUTUMN, S: SPRING, C: CAMP)
    begin: string;
    end: string;
    total: number;
    data: Data[];
}

export interface User {
    _id: ObjectID;
    name: string;
    joinTime: string; // e.g. 2018A || 2018S (A: AUTUMN, S: SPRING, C: CAMP)
    isCaptain: boolean;
    isAdmin: boolean;
    phone: string;
    mail: string;
    sex: "Male" | "Female";
    group: group;
}