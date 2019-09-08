const products = ['some item']
const product = products[0]

// truthy - values that resolve to true in a boolean context, everything apart from the below - even empty arrays/objects
// falsy - values that resolve to false: false, empty string, undefined, null, 0
if (product !== undefined) {
    console.log('product found')
} else {
    console.log('product not found')
}


