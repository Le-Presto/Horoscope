//created by Aiden Le 11/11/17


var horoscope = [
    ", energy entering your house from Neptune today will make it hard for you to focus <br>and you'll find your mind wanders more than you'd like. Your natural tendency today <br>will be to let things unfold as they will, rather than seeking to steer things in any particular direction. <br>There won't be much you can do about this, so go with the flow and know that focus will return.",
    ", an unexpected opportunity will arrive today, but your immediate reaction will be <br>that you are not up to this challenge or capable of succeeding. Before you turn this chance down, <br>stop and think, opportunities don't come along all that often and this could be a chance you wont get again. <br>If you're unsure, ask for help from someone you trust, what do you have to lose?",
    ", you'll be pulled between needing to focus professionally today, and feeling your sense of adventure tug at you. <br>Its a busy time for you at work and you need to knuckle down, but all you want to do is go out and have fun. <br>Set yourself some clear boundaries and allow yourself some adventure once you have completed work. <br>Balance is the answer to having it both ways.",
    ", the Moon enters Cancer today, giving you strong instincts for your money <br>and any financial issues or worries you have. This wont be the first time you've had money niggles, <br>but this time you can use your intuition to sniff out the solution quickly. <br>You'll be much more aware of whats going on and how you can sort it out fast.",
    ", you'll find dealing with electrical appliances and technology challenging today <br>and you'll feel that tech just isn't on your side. This is going to be frustrating, <br>but find a way to channel your annoyance that doesn't direct it at the appliances or technology! <br>If you get angry and allow yourself to blow up, you could end up breaking something you need later.",
    ", you should take a good hard look at your work life today and ask yourself some delving questions. <br>Are you happy in your day to day work? Is this the career you'd hoped for? <br>Does your work future look how you want it to? If the answer to any <br>of these questions is no, now is the time to think about making a change. <br>Decide what you want and go for it.",
    ", it may come as a surprise today when someone tells you how they feel about you. <br>This isn't necessarily romantic feelings, though it could be, it could also be negative feelings <br>or admiration from a work colleague. Whatever it is, you wont be expecting it and you could struggle for a response. <br>Be prepared for this today and try to be diplomatic while honest.",
    ", Venus enters Scorpio today, bringing new opportunities in your financial life. <br>You could be your own worst enemy in this area, as past money problems have grown doubts within you <br>and you could approach this with too much negativity if you're not careful. <br>Be confident in your money sense now and be positive about what you can do.",
    ", others around you will be bogged down in small details today <br>and although this could be annoying for you, it isn't your place <br>to try and open up their vision. You may have no problem seeing the bigger picture, but allow others <br>to wallow in details if that's how their energy guides them right now. <br>Concentrate on the wider lens your own energy gives you.",
    ", you can follow where your heart leads today and do whatever you want. <br>This refers mostly to your free time and its a good day to learn something new <br>or practise something you've recently taken up. Creative and intellectual endeavours<br> are favoured and you can begin a new hobby or do something <br>you've always wanted to try. Energy is with you for this.",
    ", your romantic and creative areas are hungry right now and you need to feed them to keep them alive, <br>so pay attention to these areas today and give them your time. You have passion in these areas of your life <br>and your soul will be much fuller if you indulge these passions. All work and no time for what you love wont do you any good, <br>so take some time and feed your passions.",
    ", you have the right energy today to bring your money and your work together into line, <br>but you'll have to trust yourself to make a success of this. This is where things often get tricky for you <br>as your self-doubt starts to rise and take over. Reassure yourself that the planets are backing you and you are capable <br>of making this work. Push forward and boost your income."
];

var zodiac = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];


function getSign(month, day)
{
    var sign;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;

    if(day == ""){
        return sign;
    }
    if(month == "1"){
        if(day >= 20 && day < 32)
        {
            sign = 10;
        }
        else if(day < 32)
        {
            sign = 9;
        }
    }
    if(month == "2"){
        if(day >= 19 && day < 30)
        {
            sign = 11;
        }
        else if(day < 30)
        {
            sign = 10;
        }
    }
    if(month == "3"){
        if(day >= 21 && day < 32)
        {
            sign = 0;
        }
        else if(day < 31)
        {
            sign = 11;
        }
    }
    if(month == "4"){
        if(day >= 20 && day < 31)
        {
            sign = 1;
        }
        else if(day < 31)
        {
            sign = 0;
        }
    }
    if(month == "5"){
        if(day >= 21 && day < 32)
        {
            sign = 2;
        }
        else if(day < 32)
        {
            sign = 1;
        }
    }
    if(month == "6"){
        if(day >= 21 && day < 31)
        {
            sign = 3;
        }
        else if(day < 31)
        {
            sign = 2;
        }
    }
    if(month == "7"){
        if(day >= 23 && day < 32)
        {
            sign = 4;
        }
        else if(day < 32)
        {
            sign = 3;
        }
    }
    if(month == "8"){
        if(day >= 23 && day < 32)
        {
            sign = 5;
        }
        else if(day < 32)
        {
            sign = 4;
        }
    }
    if(month == "9"){
        if(day >= 23 && day < 31)
        {
            sign = 6;
        }
        else if(day < 31)
        {
            sign = 5;
        }
    }
    if(month == "10"){
        if(day >= 23 && day < 32)
        {
            sign = 7;
        }
        else if(day < 32)
        {
            sign = 6;
        }
    }
    if(month == "11"){
        if(day >= 22 && day < 31)
        {
            sign = 8;
        }
        else if(day < 31)
        {
            sign = 7;
        }
    }
    if(month == "12"){
        if(day >= 22 && day < 32)
        {
            sign = 9;
        }
        else if(day < 32)
        {
            sign = 8;
        }
    }
    return sign;
}

function getImage(x, y)
{
    x = getSign();
    return zodiac[x];
}

function getHoroscope(x)
{
    var name = document.getElementById("name").value;
    if(!name) name = "Whatever your name is";
    x = getSign();
    return "<br>" + name + horoscope[x];
}


function onSubmit()
{
    console.log(zodiac[getSign()]);
    document.getElementById("zodiac").innerHTML = zodiac[getSign()];
    document.getElementById("output").innerHTML = getHoroscope();
    document.getElementById("image").innerHTML = "<img src = 'pho/" + getImage() + ".png'>";
}