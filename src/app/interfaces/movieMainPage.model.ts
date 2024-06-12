export interface IRootMovieMainPageTwoPhoto {
    Ok:        boolean;
    Success:   boolean;
    Errors:    any[];
    ErrorCode: number;
    Data:      IData;
}

export interface IData {
    Movies: IMovie[];
}

export interface IMovie {
    ShowId:          number;
    Name:            string;
    Status:          number;
    StatusNote:      null;
    Posters:         IPoster[];
    VenueIds:        null;
    ArtistVideosUrl: null;
}

export interface IPoster {
    PosterType: string;
    FileName:   null | string;
}


// main page all movies 

export interface IRootCurrentMovieMainPage {
    Ok:        boolean;
    Success:   boolean;
    Errors:    any[];
    ErrorCode: number;
    Data:      Data;
}

export interface Data {
    Movies: Movie[];
}

export interface Movie {
    ShowId:          number;
    Name:            string;
    Status:          Status;
    StatusNote:      null;
    Posters:         Poster[];
    VenueIds:        number[];
    ArtistVideosUrl: null | string;
}

export interface Poster {
    PosterType: PosterType;
    FileName:   null | string;
}

export enum PosterType {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
}

export enum Status {
    Active = "Active",
}
