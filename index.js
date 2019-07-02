class footWare {
    constructor(brand = 'Unknown Owner', type = 'Unknown Name') {
        this.brand = brand
        this.type = type
    }

    footBall() {
        console.log(
            `The ${this.type} shoes owned by ${this.brand} its used by CR7`
        )
    }
    play() {
        console.log(
            `at the field`
        )
    }

    getBrand() {
        return this.brand
    }

    getType() {
        return this.type
    }
}
const footWareBy = new footWare('Nike', 'Mercurial')

console.log(footWareBy)

footWareBy.footBall()


console.log(footWareBy.getBrand())

class footBallShoes extends footWare {
    constructor({
        brand,
        type,
        color,
        price,
        weight
    }) {
        super(brand, type)
        this.color = color
        this.price = price
        this.weight = weight
    }

    getColor() {
        return this.color
    }

    getPrice() {
        const formattedPrice = new Intl.NumberFormat('IDR', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(this.price)

        return formattedPrice
    }

    getEngine() {
        return this.engine
    }
}
const goodFootWare = new footBallShoes({
    brand: 'Nike',
    type: 'Mercurial Superfly',
    color: 'Black Gold',
    price: '3000000',
    weight:'198 grams'
})

console.log(goodFootWare)

goodFootWare.footBall()

console.log(goodFootWare.getColor())

console.log(goodFootWare.getPrice())
