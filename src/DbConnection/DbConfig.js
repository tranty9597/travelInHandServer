export const Entities = {
    user: {
        name: "USER",
        cls: {
            username: "USERNAME",
            password: "PASSWORD",
            phone: "PHONE",
            fullName: "FULL_NAME",
            email: "EMAIL"
        }
    },
    city: {
        name: "CITY",
        cls: {
            id: "ID",
            nationID: "NATION_ID",
            cityNm: "CITY_NM"
        }
    },
    travel: {
        name: "TRAVEL",
        cls: {
            id: "ID",
            username: "USERNAME",
            dateCreated: "DATE_CREATED",
            travelNm: "TRAVEL_NM",
            travelDes: "TRAVEL_DES",
            status: "STATUS"
        }
    },
    travelStep: {
        name: "TRAVEL_STEP",
        cls: {
            id: "ID",
            travelID: "TRAVEL_ID",
            fromCityID: "FROM_CITY_ID",
            toCityID: "TO_CITY_ID",
            tranpostationID: "TRANPOSTATION_ID",
            hotelID: "HOTEL_ID",
            restaurantBookingID: "RESTAURANT_BOOKING_ID",
            startDate: "START_DATE",
            endDate: "END_DATE"
        }
    },
    restaurantBooking: {
        name: "RESTAURANT_BOOKING",
        cls: {
            id: "ID",
            travelStepID: "TRAVEL_STEP_ID",
            restaurantID: "RESTAURANT_ID",
            bookingTime: "BOOKING_TIME"
        }
    },
    nation: {
        name: "NATION",
        cls: {
            id: "ID",
            nationNm: "NATION_NM"
        }
    },
    travelLocation: {
        name: "TRAVEL_LOCATION",
        cls: {
            id: "ID",
            travelLocationNm: "TRAVEL_LOCATION_NM",
            travelLocationDes: "TRAVEL_LOCATION_DES",
            cityID: "CITY_ID"

        }
    },
    transpotation: {
        name: "TRANSPOTATION",
        cls:{
            id: "ID",
            fromCityID: "FROM_CITY_ID",
            toCityID: "TO_CITY_ID",
            toTravelLocationID: "TO_TRAVEL_LOCATION_ID",
            transpotationNm: "TRANSPOTATION_NM",
            phone: "PHONE",
            openTime: "OPEN_TIME",
            timeDistance: "TIME_DISTANCE",

        }
    },
    restaurant: {
        name: "RESTAURANT",
        cls:{
            id: "ID",
            cityID: "CITY_ID",
            phone: "PHONE",
            restaurantNm: "RESTAURANT_NM",
            travelLocationID: "TRAVEL_LOCATION_ID"
        }
    },
    hotel: {
        name: "HOTEL",
        cls:{
            id: "ID",
            hotelNm: "HOTEL_NM",
            cityID: "CITY_ID",
            phone: "PHONE",
            travelLocationID: "TRAVEL_LOCATION_ID"
        }
    },
    image: {
        name: "IMAGE",
        cls:{
            id: "ID",
            ownerID: "OWNER_ID",
            data: "DATA"
        }
    }

}

export const Configs = {
    host: "localhost",
    user: "root",
    password: "root@12345",
    database: "TravelInHand"
}