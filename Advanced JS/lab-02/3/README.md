# Food class:

When `new Food('feta', 5)` is called, the following steps occur:
`Product.call(this, 'feta', 5)` is executed, which invokes the constructor of `Product`.
This sets `this.name = 'feta'` and `this.price = 5` on the new `Food` object, inheriting the name and price properties
from `Product`.
The statement `this.category = 'food'` then adds a `category` property specific to `Food`.

# Toy class:

When `new Toy('robot', 40)` is called, the following steps occur:
`Product.call(this, 'robot', 40)` is executed, invoking the constructor of `Product`.
This sets `this.name = 'robot'` and `this.price = 40` on the new `Toy` object, inheriting the name and price properties from
`Product`.
The statement `this.category = 'toy'` then adds a `category` property specific to `Toy`.