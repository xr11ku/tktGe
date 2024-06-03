export interface IRootMovies {
    ok:      boolean;
    success: boolean;
    errors:  any[];
    data:    IDatum[];
}

export interface IDatum {
    showId:       number;
    name:         string;
    mobileImage:  string;
    desktopImage: string;
}