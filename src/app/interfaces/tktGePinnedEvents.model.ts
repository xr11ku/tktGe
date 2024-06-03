export interface IRootTktPinned {
    ok:      boolean;
    success: boolean;
    errors:  any[];
    data:    IData;
}

export interface IData {
    banners: IBanner[];
    shuffle: boolean;
}

export interface IBanner {
    itemId:       number;
    name:         string;
    type:         number;
    mobileImage:  string;
    desktopImage: string;
    sortOrder:    number;
    eventDate:    null;
    status:       number;
}