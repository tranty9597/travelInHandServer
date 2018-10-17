export default class Transpotation {
    constructor(id, fromCityID, toCityID, toTravelLocationID, transpotationNm, phone, openTime, timeDistance) {
        this.ID = id;
        this.fromCityID = fromCityID;
        this.toCityID = toCityID;
        this.toTravelLocationID = toTravelLocationID;
        this.transpotationNm = transpotationNm;
        this.phone = phone;
        this.openTime = openTime;
        this.timeDistance = timeDistance;
    }
}