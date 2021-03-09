import express from 'express';
let app = express();

function handle_telegram(req, res) {
    var msg = req.param('msg');
    console.log('Send to Telegram: ' + msg);
    import tg from ('telegram-node-bot')('telegram-token')
    var date = new Date();
    var currentTime = new Date().toString();
    tg.sendMessage(your_id, msg);
    res.end('ok');
}

app.get("/toTelegram", function(req, res) {
    handle_telegram(req, res);
});


app.listen(3000)