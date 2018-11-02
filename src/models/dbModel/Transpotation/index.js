export default class Transpotation {
    constructor(id, fromCityID, toCityID, travelLocationID, transpotationNm, phone, openTime, timeDistance) {
        this.ID = id;
        this.fromCityID = fromCityID;
        this.toCityID = toCityID;
        this.travelLocationID = travelLocationID;
        this.transpotationNm = transpotationNm;
        this.phone = phone;
        this.openTime = openTime;
        this.timeDistance = timeDistance;
    }
}