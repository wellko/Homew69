export interface responseApiItem {
    score: number;
    show: {
        ended: string;
        genres: string[];
        image:{
            medium: string;
        };
        id: number;
        name: string;
    }
}

export interface responseMovie {
    id : string;
    name: string;
    genres: [];
    language: string;
    summary: string;
    image?:{medium:string};
}