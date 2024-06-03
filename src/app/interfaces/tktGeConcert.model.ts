export interface IRootConcerts {
    ok:      boolean;
    success: boolean;
    errors:  any[];
    data:    IData;
}

export interface IData {
    shows: IShow[];
}

export interface IShow {
    showId:          number;
    name:            string;
    mobileImage:     string;
    desktopImage:    string;
    venueName:       string;
    fromDate:        Date | null;
    toDate:          Date | null;
    minPrice:        number;
    maxPrice:        number;
    venueId:         number;
    isSoldOut:       boolean;
    category:        number;
    integrationHost: number;
}