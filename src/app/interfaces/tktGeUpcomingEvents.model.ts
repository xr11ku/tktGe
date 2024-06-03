export interface IRootUpComingEvent {
    ok:      boolean;
    success: boolean;
    errors:  any[];
    data:    IDatum[];
}

export interface IDatum {
    itemId:             number;
    itemType:           number;
    name:               string;
    eventDate:          Date;
    horizontalImageUrl: string;
    minPrice:           number;
    maxPrice:           number;
    venueName:          string;
    isSoldOut:          boolean;
}
