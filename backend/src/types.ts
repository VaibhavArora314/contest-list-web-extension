export enum PLATFORM {
    CODECHEF = "Codechef",
    CODEFORCES = "Codeforces",
    LEETCODE = "Leetcode",
    GEEKSFORGEEKS = "GeeksForGeeks"
}

export interface CONTEST_INTERFACE {
    site: PLATFORM,
    title: string,
    startTime: number,
    endTime: number,
    duration: number,
    url: string
}