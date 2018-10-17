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
    province: {
        name: "PROVINCE",
        cls: {
            provinceID: "PROVINCE_ID",
            nationID: "NATION_ID",
            provinceNm: "PROVINCE_NM"
        }
    },
    travel:  {
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
    travelStep:  {
        name: "TRAVEL_STEP",
        cls: {
            id: "ID",
            travelID: "TRAVEL_ID",
            fromCityID:"FROM_CITY_ID",
            toCityID: "TO_CITY_ID",
            tranpostationID: "TRANPOSTATION_ID",
            hotelID: "HOTEL_ID",
            restaurantBookingID: "RESTAURANT_BOOKING_ID",
            startDate: "START_DATE",
            endDate:"END_DATE"
        }
    },
    restaurantBooking: {
        name: "RESTAURANT_BOOKING",
        cls:{
            id: "ID",
            travelStepID: "TRAVEL_STEP_ID",
            restaurantID: "RESTAURANT_ID",
            bookingTime: "BOOKING_TIME"
        }
    }
}

export const Configs = {
    host: "localhost",
    user: "root",
    password: "root@12345",
    database: "TravelInHand"
}