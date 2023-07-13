const express = require('express');
const mongoose =  require('mongoose');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

mongoose.connect("mongodb+srv://alchemy:alchemy4toycathon@alchemy.jcvapqk.mongodb.net/?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => {
    console.log("Second Stage Clear");
}).catch((e) => {
    console.log(e);
});

const resultSchema = new mongoose.Schema({
    reaction_id: {
        type: Number,
        required: true
    },
    conc_a: {
        type: Number,
        required: true
    },
    conc_b: {
        type: Number,
        required: true
    },
    conc_c: {
        type: Number,
        required: true
    },
    conc_d: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    solid: {
        type: Boolean,
        required: true
    },
    solid_color: {
        type: String,
        required: true
    },
    gas: {
        type: Boolean,
        required: true
    },
    gas_color: {
        type: String,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
    },
    product_info: {
        type: String,
    },
    product_properties: {
        type: Array,
    },
    product_uses: {
        type: Array,
    }
});

const Result = new mongoose.model('Result',resultSchema);


app.get('/result/:chem_a/:chem_b/:chem_c/:chem_d', async (req, res) => {
    let chem_a = req.params['chem_a'];
    let chem_b = req.params['chem_b'];
    let chem_c = req.params['chem_c'];
    let chem_d = req.params['chem_d'];
    const add = Number(chem_a)+ Number(chem_b) + Number(chem_c) + Number(chem_d);
    if(add < 100){
        chem_a = (chem_a/add)*100;
        chem_b = (chem_b/add)*100;
        chem_c = (chem_c/add)*100;
        chem_d = (chem_d/add)*100;
    }
    var a = Math.round(chem_a/10)*10;
    var b = Math.round(chem_b/10)*10;
    var c = Math.round(chem_c/10)*10;
    var d = Math.round(chem_d/10)*10;

    var final_add = a + b + c + d;
    if(final_add < 100){
        console.log(final_add);
        var number_to_be_increamented = Math.max(a,b,c,d);
        if(a == number_to_be_increamented){
            a += 10;
        }
        else if(b == number_to_be_increamented){
            b += 10;
        }
        else if(c == number_to_be_increamented){
            c += 10;
        }
        else{
            d += 10;
        }
    }

    if(final_add > 100){
        var for_min_a = a;
        var for_min_b = b;
        var for_min_c = c;
        var for_min_d = d;
        if(for_min_a === 0){
            for_min_a = 1000;
        }
        if(for_min_b === 0){
            for_min_b = 1000;
        }
        if(for_min_c === 0){
            for_min_c = 1000;
        }
        if(for_min_d === 0){
            for_min_d = 1000;
        }
        var number_to_be_decreamented = Math.min(for_min_a,for_min_b,for_min_c,for_min_d);
        if(a == number_to_be_decreamented){
            a -= 10;
        }
        else if(b == number_to_be_decreamented){
            b -= 10;
        }
        else if(c == number_to_be_decreamented){
            c -= 10;
        }
        else{
            d -= 10;
        }
    }
    let sum = 0;
    if(a!=0){
        sum+=1;
    }
    if(b!=0){
        sum+=10;
    }
    if(c!=0){
        sum+=100;
    }
    if(d!=0){
        sum+=1000;
    }
    console.log(a,b,c,d, sum);
    const result_data = await Result.findOne({conc_a: a, conc_b: b, conc_c: c, conc_d: d, reaction_id: sum});
    const data = [];
    data.push(result_data);
    res.json(data);
});




app.listen(5000, () => {
    console.log("Connected to server");
});