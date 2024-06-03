export interface IRootTktToday {
    ok:      boolean;
    success: boolean;
    errors:  any[];
    data:    IDatum[];
}

export interface IDatum {
    eventId:     number;
    eventDate:   Date;
    eventName:   string;
    venueName:   string;
    minPrice:    number;
    maxPrice:    number;
    imageName:   string;
    v3ImageName: string;
    isSoldOut:   boolean;
}