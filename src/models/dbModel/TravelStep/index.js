export default class TravelStep {
    constructor(
        id,
        travelID,
        fromCityID,
        toCityID,
        tranpostationID,
        hotelID,
        restaurantBookingID,
        startDate,
        endDate,
        status) {

        this.ID = id;
        this.travelID = travelID;
        this.fromCityID = fromCityID;
        this.toCityID = toCityID;
        this.tranpostationID = tranpostationID;
        this.hotelID = hotelID;
        this.restaurantBookingID = restaurantBookingID;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status
    }
}