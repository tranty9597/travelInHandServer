export default class Transpotation {
    constructor(id, fromCityID, toCityID, travelLocationID, transpotationNm, phone, openTime, timeDistance, price, description) {
        this.ID = id;
        this.fromCityID = fromCityID;
        this.toCityID = toCityID;
        this.travelLocationID = travelLocationID;
        this.transpotationNm = transpotationNm;
        this.phone = phone;
        this.openTime = openTime;
        this.timeDistance = timeDistance;
        this.price = price;
        this.description = description;
    }
}