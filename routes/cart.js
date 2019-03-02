const express = require("express");
const router = express.Router();
const cart_schema = require("../schemas/cart");
const Cookies = require('universal-cookie')


// Get product collection
router.post("/add", async (req, res) => {

    const cookies = new Cookies(req.headers.cookie);

    const {slug} = req.body

    const cart = await cart_schema.findOne({
        cart_id: cookies.get('cart_id')
    })

    if(cart){

        const new_cart = cart.cart_items ? cart.cart_items.join(slug) : [slug]

        const cart = await cart_schema.findOneAndUpdate({
            cart_id: cookies.get('cart_id')
        },{
            cart_items: new_cart
        },{
            new: true
        });

        res.send(cart)
        
    }else{

        const new_cart = await cart_schema.create({
            cart_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            cart_items: [slug]
        })

        res.send({
            new_cart
        })
        
    }

});




module.exports = router;