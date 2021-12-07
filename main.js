"use strict";
const nodemailer = require("nodemailer");
let spamTimes=0;
const SPAMMAX=201;
let victim="TARGET POTATO@gmail.com"; //replace these credentials obviously
const t=require("talk-like-a");
let attacker="NOT MY MAIL@gmail.com";
let a=[];
function talklikea(str){
    for(let f in t){
        if(typeof t[f] !='function')continue;
        a.push(t[f](str));
    }
}
talklikea(`So this is the small little coridoor leading to you. Its rather clear we are aware of our clumsy preferences. Need to make sure the universe and the other one by Einstien doesn't get any degree of finiteness. 
Humanity isnt simple. The human brain has a complex mixture of deadly glazing fire and foggy misleading smoke. We're on a trancedental journey to fight the evens and hence make 3 the number of prime importance. And in turn invent some third fun ingredient. It's your turn to contribute in interesting ways.
Are you enjoying? Won't let you do that. It has been thundering here for a while; won't you like that on your side too? Fight the thunder. Get charged. And face the consequences. (Why u running away from consequences?)\n\n\n
Beware: speedbreaker ahead. Drive slowly. We have been testing our tools for a while. And we have seen it work. (All spelling and grammar mistakes are extremely intentional and do not have anything to do with the slyness of the author.)\n
So, dear friend; please use a semi colon at the end of each statement; it could save you from a handful of bugs for free; specially the ones due to automatic semi colon insertion. Also, pleace do not use publically inaccessible passwords.
Regards
Yours exponentially
SP AM_B OT
PS: Any gullible reply will result in massively irreversible response with tremendous increase in entropy. Be fun.`);
function funnyTalk(seed){
   
        return a[seed%b.length]
}

function randLinGrad(){
    return `linear-gradient(${Math.random()*360}deg,rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255}),rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255}))`;

}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: attacker, 
      pass: "NOT MY PASSWORD AT ALL" 
    }
  });
async function main() {

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"I am a खतरनाक potato 😕 ${spamTimes}" <${attacker}>`, // sender address
    to: victim, // list of receivers
    subject: `We thinks itsa joke !!! 😁😆😑 :${spamTimes}`, // Subject line
    html: `<div style="background:${randLinGrad()};color:white !important;font-size:3em;">${funnyTalk(spamTimes).replace(/\n/g,"<br/><br/>")}😑🙄😅🪓🔨Whats your mission?<br/>😑 THUG LIFE 😑</div>` // html body
  });
  spamTimes++;
  console.log("Message sent: %s", info.messageId);
  console.log(spamTimes);

  if(spamTimes<SPAMMAX){
    main().catch(console.error);
  }else{
      console.log("MISSION SUCCESSFUL!!! 🤗🤩😎");
  }
}
main().catch(console.error);
