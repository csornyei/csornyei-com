export type Job = {
    type: "job" | "edu";
    position: string;
    employer: string;
    logo: string;
    startDate: string;
    endDate: string;
    duration?: string;
    duties?: string[];
    technologies?: string[];
    current?: string;
}