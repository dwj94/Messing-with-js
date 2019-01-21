let restaurant = {
    name: 'a&b',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        if (partySize < this.guestCapacity - this.guestCount){
            return true
        } else {
            return false
        }
    },
    seatParty: function (number) {
        this.guestCount += number
    },
    removeParty: function (number) {
        this.guestCount -= number
    }
}


restaurant.seatParty(89, restaurant)
console.log(restaurant.checkAvailability(12))
restaurant.removeParty(35, restaurant)
console.log(restaurant.checkAvailability(12))
