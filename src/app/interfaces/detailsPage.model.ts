export interface IRootDetails {
    ok:        boolean;
    success:   boolean;
    errorCode: number;
    data:      Data;
}

export interface Data {
    showId:         number;
    name:           string;
    description:    string;
    categoryType:   string;
    posters:        Poster[];
    status:         string;
    isTrusted:      boolean;
    events:         Event[];
    relatedObjects: null;
    categories:     Category[];
    urls:           Urls;
    adScripts:      any[];
    isGroupShow:    boolean;
    permanentShow:  null;
    date:           null;
    otpRequired:    boolean;
    otpValidated:   boolean;
}

export interface Category {
    categoryId:           number;
    name:                 string;
    categoryGroupingType: null;
}

export interface Event {
    name:                         string;
    description:                  string;
    categoryType:                 string;
    date:                         Date;
    doorsOpen:                    Date;
    eventEndDate:                 null;
    minAllowedTicket:             number;
    maxAllowedTicket:             number;
    venue:                        Venue;
    currency:                     string;
    statusNote:                   null;
    additionalDescription:        null;
    additionalInfo:               null;
    officialWebsiteUrl:           null;
    artistVideosUrl:              null;
    facebookEventUrl:             null;
    isSoldOut:                    boolean;
    pendignStatusType:            null;
    status:                       string;
    queueEventId:                 null;
    eventId:                      number;
    protectByQueue:               boolean;
    hasAdditionalFields:          boolean;
    sellUponRequest:              boolean;
    canRequestTicketsOnlyFbUsers: boolean;
    minPrice:                     Price;
    maxPrice:                     Price;
    queueRedirectionUrl:          null;
    ticketTypes:                  TicketType[];
    isSoldByMap:                  boolean;
    mapId:                        number;
    movieInfo:                    null;
    poster:                       string;
    allowFriends:                 boolean;
    friends:                      null;
    isTermsAndConditionsEnabled:  boolean;
    termsAndConditions:           null;
    isPrivateEvent:               null;
    isLiveStream:                 null;
    liveStreamUrl:                null;
    isSelfServiceEvent:           null;
    hideBuyButton:                boolean;
    eventUserStatus:              number;
    eventUserMessage:             null;
    integrationHost:              number;
}

export interface Price {
    amount:   number;
    currency: string;
}

export interface TicketType {
    ticketTypeId:        number;
    name:                string;
    price:               Price;
    resellingPrice:      null;
    showDisabled:        boolean;
    isStudentTicketType: boolean;
    maxAllowed:          null;
}

export interface Venue {
    venueId:    number;
    name:       string;
    coorinates: Coorinates;
    address:    string;
    venueType:  number;
    index:      null;
    image:      null;
    venueTours: any[];
}

export interface Coorinates {
    latitude:  number;
    longitude: number;
}

export interface Poster {
    posterType: string;
    fileName:   string;
}

export interface Urls {
    mainUrl:   string;
    shortUrls: any[];
}
