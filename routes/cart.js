const express = require("express");
const router = express.Router();
const cart_schema = require("../schemas/cart");
const Cookies = require('universal-cookie')


// Get product collection
router.post("/add", async (req, res) => {

    const {cart_id, slug} = req.body

    const find_cart = await cart_schema.findOne({
        cart_id
    })

    if(find_cart){

        const new_cart = find_cart.cart_items

        new_cart.push(slug)        

        const update_cart = await cart_schema.findOneAndUpdate({
            cart_id: cart_id
        },{
            cart_items: new_cart
        },{
            new: true,
        });

        console.log(update_cart)

        res.send({
            cart: update_cart.cart_items ? update_cart.cart_items : [],
            cart_id: cart_id,
            new_cart: false
        })
        
    }else{

        const cart = await cart_schema.create({
            cart_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            cart_items: [slug]
        })

        res.send({
            cart,
            new_cart: true
        })
        
    }

});




module.exports = router;