const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://tinyurl.com/ykxwd25q";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `β¦β β‘β‘π§α³ππ ππππΈπ§β β‘β‘β¦


πππ₯π₯π¨π π ππ¦ π ~JADBot~ .
             *α³ππ πππ πΈ*

π§β‘β β‘β β‘πβ‘β β‘β β‘β β‘β β‘πβ‘β π§
β *πππππ πΎπ€π’π’ππ£ππ¨* β

π§πΎπ€π’π’ππ£πβ -song <text>
πππ¨πβ Downloads song for you.
β οΈ.song  baby love

π§πΎπ€π’π’ππ£πβ -video <yt link>
πππ¨πβ Downloads video from YouTube link.

π§πΎπ€π’π’ππ£πβ  -insta <link>
πππ¨πβ   Downloads content from instagram.

π§πΎπ€π’π’ππ£πβ  -yt<text>
πππ¨πβ   Gives you YT links.

π§πΎπ€π’π’ππ£πβ  -show <show name>
πππ¨πβ   Get info related to tv series and shows.

π§πΎπ€π’π’ππ£πβ -gif 
πππ¨πβ Converts video to gif.

π§πΎπ€π’π’ππ£πβ -tomp3 
πππ¨πβ Converts video into audio.

π§πΎπ€π’π’ππ£πβ -say <text>
πππ¨πβ Converts text into voice.

π§πΎπ€π’π’ππ£πβ -img <text>
πππ¨πβ It sends image from google.

π§πΎπ€π’π’ππ£πβ -trt <language code>
πππ¨πβ Translate the text you tag.

π§πΎπ€π’π’ππ£πβ -wiki <text>
πππ¨πβ It sends Wikipedia result.

π§πΎπ€π’π’ππ£πβ -lyric <text>
πππ¨πβ Finds the lyrics of the song.

π§πΎπ€π’π’ππ£πβ -covid <country code>
πππ¨πβ Send the covid stats of your country.

π§πΎπ€π’π’ππ£πβ -weather <city>
πππ¨πβ Tells you about the weather of your place.

π§πΎπ€π’π’ππ£πβ -removebg 
πππ¨πβ Removes the background of tge image.

π§πΎπ€π’π’ππ£πβ -ocr
πππ¨πβ Finds the text written on the image.

π§πΎπ€π’π’ππ£πβ -wallpaper
πππ¨πβ It sends you random wallpaper.

β β‘β β‘β β‘β β¨β β‘α³ππ ππππΈβ β¨β β‘β β‘β β‘β β‘
β *ππͺπ£ πΎπ€π’π’ππ£ππ¨* β

β‘πΎπ€π’π’ππ£πβ -joke 
πππ¨πβ It sends a random joke.
 
β‘πΎπ€π’π’ππ£πβ -meme <text>
πππ¨πβ Cations the image into a meme.

β‘πΎπ€π’π’ππ£πβ -quote 
πππ¨πβ It sends a random quote.

β‘πΎπ€π’π’ππ£πβ -ss <website link>
πππ¨πβ It sends the screenshot of the website.

β‘πΎπ€π’π’ππ£πβ -changesay <text>
πππ¨πβ Converts text into changesay meme image.

β‘πΎπ€π’π’ππ£πβ -trumpsay
πππ¨πβ Convert text into Trump's tweet.

β‘πΎπ€π’π’ππ£πβ -compliment 
πππ¨πβ Gives you a compliment.

β‘πΎπ€π’π’ππ£πβ  -bitly <link>
πππ¨πβ   Shorten your link.

β‘πΎπ€π’π’ππ£πβ  -dict 
πππ¨πβ   Dictionary [-dict en;anime]

β‘πΎπ€π’π’ππ£πβ  -zodiac <leo> 
πππ¨πβ   Tells you about your horoscope.

β‘πΎπ€π’π’ππ£πβ  -qr <text>
πππ¨πβ   Converts text into qr code.

β‘πΎπ€π’π’ππ£πβ  -movie 
πππ¨πβ  Gives you info about movie.
β οΈmovie master

β‘πΎπ€π’π’ππ£πβ  -anime <text>
πππ¨πβ  Gives you info about anime.
β οΈanime pikachu
β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘
β *ππ©πππ ππ§ πΎπ€π’π’ππ£ππ¨* β

β€οΈπΎπ€π’π’ππ£πβ -sticker 
πππ¨πβ Converts img/gif into a sticker.

β€οΈπΎπ€π’π’ππ£πβ -photo 
πππ¨πβ Converts sticker into image.

β€οΈπΎπ€π’π’ππ£πβ -attp <text>
πππ¨πβ Converts text into glowing sticker.
β οΈex  attp pikachu
β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘
ββββββ‘α³ππ πππ πΈβ‘βββββ
β£β£β£πβ£β£β£β£β£JADUBotβ£β£β£β£β£β£β£πβ£β£β£

`}) 

}));
