//D25 inheritance example in js

class Product {
  constructor (props) {
    this.name = props.name;
    this.price = props.price;
    this.qty = undefined;
    this.productId = props.id;
  }

  getQty () {
    return this.qty || 0;
  }
}

class ProductsListing {
  constructor (mapping) {
    this.mapping = mapping;
  }
  getAvailableProducts () {
    const availableProducts = mapping.filter((item) => {
      //console.log(JSON.stringify(Object.values(item)[0])!=="{}");
      return JSON.stringify(Object.values(item)[0]) !== "{}";
    })
    //console.log(availableProducts);
    return availableProducts;
  }
}

class User {
  constructor (props) {
    this.fname = props.fname;
    this.lname = props.lname;
    this.address = props.address;
    // address will contain, bldngNo, street, city, state, pincode
    this.email = props.email;
    this.userId = props.id;
  }

  getUserName () {
    return this.fname + " " + this.lname;
  }

  getUserDetails () {
    return this;
  }

}

class Seller extends User {
  constructor (props) {
    super(props)
    this.products = products;//array products id
    this.companyName = props.companyName;
  }
}
class Serviceability extends Product {
  constructor (item, qty, buyer) {
    super(item);
    //product.stock = this.product.stock;
    this.stock = item.stock;
    this.orderQty = qty;
    this.buyer = buyer;
  }

  getProductDetails () {
    return this;
  }

  getServiceablity () {
    if (!this.productId) {
      return { error: "Product id is not defined" }
    }
    let sellersIds = Object.keys(this.stock);
    let sellersList = sellers.filter((s) => {
      let found = sellersIds.indexOf(s.sellerId.toLocaleLowerCase())!=-1;
      if(found){
        this.qty = (this.qty||0)+ this.stock[s.sellerId.toLocaleLowerCase()];
      }
      return found;
    });

    let sameCityServiceable = sellersList.filter((item) => {
      
      return item.address.pincode.toString().substr(0, 2) === this.buyer.address.pincode.toString().substr(0, 2);
    });

    if (sameCityServiceable.length > 0) {
      this.deliveryCharges = 50;
      this.sellers = sameCityServiceable;
    } else if (!sameCityServiceable.length && sellersList.length > 0) {
      this.deliveryCharges = 250;
      this.sellers =  sameCityServiceable
      
    } else {
      this.serviceable = false;
    }
    this.serviceable = true;
    return this;

  }

}

const productsList = [
  {
    name: "I Phone SE",
    price: 42000,
    productId: "prod011"
  },
  {
    name: "I Phone 6s",
    price: 32000,
    productId: "prod003"
  },
  {
    name: "I Phone 7",
    price: 35000,
    productId: "prod005"
  },
  {
    name: "I Phone X",
    price: 88000,
    productId: "prod013"
  },
  {
    name: "Macbook Air",
    price: 86000,
    productId: "mac003"
  },
  {
    name: "Macbook Pro",
    price: 86000,
    productId: "mac002"
  }
];
const mapping = //mapping contains product id mapping with seller id
  [
    {
      'prod011': { 's001': 21, 's002': 34, 's004': 54 },
    },
    {
      'prod003': { 's001': 20, 's006': 43 },
    },
    {
      'prod005': { 's001': 10, 's002': 4, 's003': 21 },
    },
    {
      'prod013': { 's001': 12, 's002': 32, 's006': 21 },
    },
    {
      'mac003': { 's002': 20, 's003': 14, 's004': 23, 's005': 20 },
    },
    {
      'mac002': {}
    }
  ]

const sellers = [
  {
    fname: "Kishan",
    lname: "Lal",
    companyName: "M/s Kishan Lal & Sons",
    address: {
      addressLine1: "1st Floor, shop no. 21",
      bldngNo: "34",
      street: "Nehru Place",
      city: "Delhi",
      state: "Delhi",
      pincode: 110019
    },
    sellerId: 'S001'
  },
  {
    fname: "Creative",
    lname: "Computers",
    companyName: "M/s Creative Computer Pvt Ltd.",
    address: {
      addressLine1: "1st Floor, shop no. 21",
      bldngNo: "34",
      street: "Janakpuri",
      city: "Delhi",
      state: "Delhi",
      pincode: 110058
    },
    sellerId: 'S002'
  },
  {
    fname: "Vijay",
    lname: "Sales",
    companyName: "M/s Creative Computer Pvt Ltd.",
    address: {
      addressLine1: "Plot no. 121",
      bldngNo: "B-1",
      street: "Janakpuri",
      city: "Delhi",
      state: "Delhi",
      pincode: 110058
    },
    sellerId: 'S003'
  },
  {
    fname: "Chroma",
    lname: "",
    companyName: "Croma Pvt Ltd.",
    address: {
      addressLine1: "1st Floor, shop no. 21",
      bldngNo: "34",
      street: "Janakpuri",
      city: "Delhi",
      state: "Delhi",
      pincode: 110058
    },
    sellerId: 'S004'
  },
  {
    fname: "SriVidya Electronics",
    lname: "",
    companyName: "SriVidya Electronics Pvt Ltd.",
    address: {
      addressLine1: "2nd Floor, shop no. 211",
      bldngNo: "224",
      street: "Parbatpura",
      city: "Chennai",
      state: "Tamilnadu",
      pincode: 110058
    },
    sellerId: 'S005'
  },
  {
    fname: "NEXT Electronics",
    lname: "",
    companyName: "NEXT Electronics Pvt Ltd.",
    address: {
      addressLine1: "Ground Floor, shop no. 111",
      bldngNo: "1224",
      street: "Sohna Road",
      city: "Gurugram",
      state: "Haryana",
      pincode: 110058
    },
    sellerId: 'S006'
  }
]

let buyer = new User({
  fname: "Vinay",
  lname: "Rajput",
  address: {
    addressLine1: "2nd Floor",
    bldngNo: "C-30",
    street: "Uttam Nagar",
    city: "Delhi",
    state: "Delhi",
    pincode: 110059
  },
  email: "vnayk@gmail.com",
  id: "vnaykrajput"
});

//console.log(buyer.getUserName());
//console.log(buyer.getUserDetails());

let productsListing = new ProductsListing(mapping);
let availableProducts = productsListing.getAvailableProducts();
let availableProductsDetails = [];

availableProducts.map((item) => {
  let productId = Object.keys(item)[0];
  let stock = Object.values(item)[0];
  let product = productsList.filter((item) => item.productId === productId)[0];
  product.id = productId;
  product.stock = stock;
  availableProductsDetails.push(product);
})

//console.log('availableProductsDetails',availableProductsDetails);
console.log('User opted to view product availability: I Phone 6s')
let selectedProduct = availableProductsDetails[1];

let serviceableProducts = new Serviceability(selectedProduct, 30, buyer);
console.log(serviceableProducts.getServiceablity());
//console.log('getProductDetails',serviceableProducts.getProductDetails());
/*
availableProducts.map((item) => {

});
*/



