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