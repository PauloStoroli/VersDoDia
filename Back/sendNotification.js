const fetch = require('node-fetch');

const ONESIGNAL_APP_ID = '2f5874be-5397-4b9a-8597-b77eb31f38c6';
const ONESIGNAL_API_KEY = 'os_v2_app_f5mhjpsts5fzvbmxw57lghzyy2nl4sc6fhluzxm7uzbwxamky63jciwfma4xpgccjns6n4cqigm5i2lpy3dwkuegvvqneizn6aptvoq';

const sendNotification = async () => {
    const notification = {
        app_id: ONESIGNAL_APP_ID,
        included_segments: ["All"],
        headings: { "en": "Versículo do Dia" },
        contents: { "en": "Veja o versículo do dia e permita que a palavra de Deus transforme o seu coração!" },
        url: "https://vers-do-dia.vercel.app"
    };

    const response = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Basic ${ONESIGNAL_API_KEY}`
        },
        body: JSON.stringify(notification)
    });

    const data = await response.json();
    console.log(data);
};

sendNotification();
