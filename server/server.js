const express = require('express');
const mongoose =  require('mongoose');
const app = express();

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
        required: true
    },
    product_img: {
        type: String,
        required: true
    },
    product_properties: {
        type: Array,
        required: true
    },
    product_uses: {
        type: Array,
        required: true
    }
});

const Result = new mongoose.model('Result',resultSchema);

app.get('/result/:chem_a/:chem_b/:chem_c/:chem_d', async (req, res) => {
    const a = Math.round(req.params['chem_a']/10)*10;
    const b = Math.round(req.params['chem_b']/10)*10;
    const c = Math.round(req.params['chem_c']/10)*10;
    const d = Math.round(req.params['chem_d']/10)*10;
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
    const result_data = await Result.find({conc_a: a, conc_b: b, conc_c: c, conc_d: d, reaction_id: sum});
    res.json(result_data);
});

app.listen(5000, () => {
    console.log("Connected to server");
});