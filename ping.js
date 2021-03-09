const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 80;
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post('/send-to-telegram', (req, res) => {
    const chatId = req.body.id;
    const sentMessage = req.body.text;
    let data = JSON.stringify({
        chat_id: chatId,
        text: `Meow meow #282904497 !!! Bạn nhận được 1 yêu cầu rút ${sentMessage} ${sentMessage} tiền từ tài khoản:${sentMessage}`
      });
    data = JSON.parse(data)
    const options = {
        url: 'https://api.telegram.org/bot1618211450:AAFYR4xCiWOSSSv6JoVKRJrR3XEYxyVZ8-w/sendMessage',
        method: 'POST',
        data: data,
        headers: {
          'Content-Type': 'application/json',
        }
    };

    axios(options)
    .then((response) => { 
        res.status(200).send(response);
    }).catch((error) => {
        console.log(error)
        res.send(error);
    });
});
// Listening
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});