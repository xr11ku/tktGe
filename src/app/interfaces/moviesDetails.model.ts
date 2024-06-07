export interface IRootMovieDetails {
    Ok:        boolean;
    Success:   boolean;
    Errors:    any[];
    ErrorCode: number;
    Data:      Data;
}

export interface Data {
    ShowId:      number;
    Name:        string;
    Status:      number;
    Posters:     Poster[];
    VenueIds:    number[];
    MovieRating: string;
    Urls:        Urls;
    Events:      Event[];
    Description: string;
    IsGroupShow: boolean;
}

export interface Event {
    IsImax:                       boolean;
    Is3D:                         boolean;
    Is2D:                         boolean;
    IsForChildren:                boolean;
    IsEng:                        boolean;
    IsGeo:                        boolean;
    IsSub:                        boolean;
    IsScreenX:                    boolean;
    Name:                         string;
    Description:                  string;
    CategoryType:                 string;
    Date:                         Date;
    DoorsOpen:                    null;
    EventEndDate:                 null;
    MinAllowedTicket:             number;
    MaxAllowedTicket:             number;
    Venue:                        Venue;
    Currency:                     string;
    StatusNote:                   null;
    AdditionalDescription:        null;
    AdditionalInfo:               null;
    OfficialWebsiteUrl:           null;
    ArtistVideosUrl:              string;
    FacebookEventUrl:             null;
    IsSoldOut:                    boolean;
    PendingStatusType:            null;
    Status:                       string;
    QueueEventId:                 null;
    EventId:                      number;
    ProtectByQueue:               boolean;
    HasAdditionalFields:          boolean;
    SellUponRequest:              boolean;
    CanRequestTicketsOnlyFbUsers: boolean;
    MinPrice:                     Price;
    MaxPrice:                     Price;
    QueueRedirectionUrl:          null;
    TicketTypes:                  TicketType[];
    IsSoldByMap:                  boolean;
    MapId:                        number;
    MovieInfo:                    string;
    Poster:                       null;
    AllowFriends:                 boolean;
    Friends:                      null;
    IsTermsAndConditionsEnabled:  boolean;
    TermsAndConditions:           null;
    IsPrivateEvent:               null;
    IsLiveStream:                 null;
    LiveStreamUrl:                null;
    IsSelfServiceEvent:           null;
    HideBuyButton:                boolean;
    EventUserStatus:              number;
    EventUserMessage:             null;
    IntegrationHost:              number;
}

export interface Price {
    Amount:   number;
    Currency: string;
}

export interface TicketType {
    TicketTypeId:        number;
    Name:                string;
    Price:               Price;
    ResellingPrice:      null;
    ShowDisabled:        boolean;
    IsStudentTicketType: boolean;
    MaxAllowed:          null;
}

export interface Venue {
    VenueId:    number;
    Name:       string;
    Coorinates: Coorinates;
    Address:    string;
    VenueType:  number;
    Index:      null;
    Image:      null;
    VenueTours: any[];
}

export interface Coorinates {
    Latitude:  number;
    Longitude: number;
}

export interface Poster {
    PosterType: string;
    FileName:   string;
}

export interface Urls {
    MainUrl:   string;
    ShortUrls: any[];
}
