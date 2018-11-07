export default class HistoryStepDetail {
    constructor(id, travelID, fromCityNm, toCityNm, tranpostationNm, hotelNm, restaurantNm, startDate, endDate) {
        this.ID = id;
        this.travelID = travelID;
        this.fromCityNm = fromCityNm;
        this.toCityNm = toCityNm;
        this.tranpostationNm = tranpostationNm;
        this.hotelNm = hotelNm;
        this.restaurantNm = restaurantNm;
        this.startDate = startDate;
        this.endDate = endDate
    }
}