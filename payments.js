
const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const Ravepay = require('flutterwave-node-v3');
const rave = new Ravepay("FLWPUBK-df9a894a4de44dccbfe1898f62384e1c-X", "FLWSECK-d64dec53e789c84d460191a2731817b4-X");

const ug_money = async () => {
try {
            //const payload_response = request.body;
            const payload = {
                "tx_ref": "MC-" + Math.floor(Math.random() * 1000000000),
                "amount": 50000,
                "email": "gilbertmpanga.gm@gmail.com",
                "phone_number": '+256785442776',
                "currency": "UGX",
                "fullname": 'Gilbert Mpanga',
                "redirect_url": "https://app.filetax.live",
                "voucher": Math.floor(Math.random() * 1000000000),
                "network": 'MTN'
            };
            const response_flutterwave = await rave.MobileMoney.uganda(payload);
            //response.end();
            console.log(response_flutterwave);
        }
        catch (error) {
            console.log(error);
            //response.send({ message: "something went wrong", error: error });
        }
};

ug_money();
