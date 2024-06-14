export interface IRootSearch {
    Ok:        boolean;
    Success:   boolean;
    Errors:    any[];
    ErrorCode: number;
    Data:      IDataSearch;
}

export interface IDataSearch {
    Items: IitemSearh[];
}

export interface IitemSearh {
    EntityId:        number;
    Category:        null;
    ShowName:        string;
    Poster:          string;
    EventDate:       null;
    SourceIsShow:    boolean;
    VenueName:       string;
    EventStatus:     null;
    ShowStatus:      null;
    EventDateString: string;
    SubCategoryId:   number;
    CategoryName:    string;
}
