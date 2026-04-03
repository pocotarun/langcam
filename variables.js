// "use strict"; // अब कोड सख्ती से चेक होगा

const myname = "Tarun";
let age = 19;

// x = 234; // यह लाइन अब एरर देगी, इसे 'let x = 234' लिखना होगा
let x = 234;
console.log(x);

// agex को पहले इस्तेमाल करना (Hoisting) var के साथ चलता है, 
// लेकिन professional coding में इसे इस्तेमाल से पहले declare करना चाहिए।
var agex = 45;
console.log("MY NAME :", myname);
console.log("My Age :", agex);

// Next year calculation
age = age + 1;
console.log("MY NEXT YEAR AGE : ", age);

// RAHUL KA DATA
let namea = "Rahul";
let city = "Shamli";
let address = `Shamli
Uttar Pradesh
India`;

// Backticks का सही इस्तेमाल (Interpolation)
// ध्यान दें: यहाँ \n (Backslash) यूज़ किया है
console.log(`Candidate Name : ${namea} \nCandidate City : ${city} \nCandidate Address : \n${address}`);

let num1 = 2;
let num2 = 3;
console.log("Multipication is : " + (num1 * num2));
if (num1 + 1 == num2) {
  console.log("working!");
} else {
  console.log("fail!");
}

let c1 = "dr"
let c2 = "dr"
console.log(c1 === c2);


let tarunid = {
  name: "tarun",
  profasion: "bca",
  age: 20,
}
console.log(tarunid);

///////////////////////////////////////////////
String(agex);
console.log(typeof agex);




// ////////////////////////////////////////////////////////
// data type
// 1. primitive types 🤞🥱
// string
// Number
// bullion
// null
// undefined
// Symbol
// BigInt








/*
📝 JavaScript Strings: नोट्स (Notes)JavaScript में किसी भी टेक्स्ट (Text) को String कहा जाता है। 
इसे लिखने के 3 मुख्य तरीके हैं:

//////////////////////////////////////////


1. सिंगल कोट्स (' ') - Single Quotes
इसका इस्तेमाल साधारण और छोटे टेक्स्ट के लिए किया जाता है।
कब इस्तेमाल करें: जब आपको एक ही लाइन में कोई सिंपल नाम या शब्द लिखना हो।
खास बात: अगर आपको टेक्स्ट के अंदर डबल कोट (") दिखाना है, तो बाहर सिंगल कोट लगाएं।
उदाहरण: let syntax = 'उसने कहा "नमस्ते"';

//////////////////////////////////////////////


2. डबल कोट्स (" ") - Double Quotesयह बिल्कुल सिंगल कोट्स की तरह ही काम करता है।
कब इस्तेमाल करें: यह भी साधारण टेक्स्ट के लिए है।
खास बात: अगर टेक्स्ट के अंदर सिंगल कोट (') जैसे (It's) दिखाना है, तो बाहर डबल कोट्स लगाएं।
उदाहरण: let city = "It's Shamli city";

//////////////////////////////////////////////


3. बैकविक्स (` `) - Backticks (Template Literals)यह सबसे आधुनिक और पावरफुल तरीका है। प्रोफेशनल कोडिंग में सबसे ज़्यादा इसी का इस्तेमाल होता है।
क्यों इस्तेमाल करें:Variables जोड़ने के लिए: इसमें + लगाने की ज़रूरत नहीं पड़ती। आप सीधे ${variable} लिख सकते हैं।

Multi-line टेक्स्ट: इसमें आप Enter दबाक र अगली लाइन में लिख सकते हैं, जो "" या '' में संभव नहीं है।
उदाहरण:JavaScriptlet name = "Rahul";
console.log(`Hello, ${name}!`); // Variables को आसानी से जोड़ना

////////////////////////////////////////////


 🚀 मुख्य अंतर (The Difference)फीचरसिंगल/डबल कोट्स (' ' / " ")बैकविक्स (` `)मल्टी-लाइन (New Line)एरर (Error) देता है।
 आसानी से Enter दबाकर लिख सकते हैं।वेरिएबल जोड़ना+ का उपयोग करना पड़ता है।${} का उपयोग करके सीधे जोड़ सकते हैं।नामइसे साधारण String कहते हैं।
 इसे 'Template Literals' कहते हैं।💡 परिभाषा (Definition)String: कंप्यूटर प्रोग्रामिंग में अक्षरों, नंबरों या चिन्हों के समूह को 'String' कहते हैं।
  जावास्क्रिप्ट में स्ट्रिंग को हमेशा 'कोटेशन मार्क्स' या 'बैकटिक्स' के अंदर लिखा जाता है ताकि कंप्यूटर समझ सके कि यह कोई कमांड नहीं बल्कि सिर्फ टेक्स्ट है।
  🛠️ कोड में कमेंट्स (Comments) कैसे जोड़ें:अपने जावास्क्रिप्ट कोड में जानकारी लिखने के लिए आप कमेंट्स का उपयोग कर सकते हैं
  
  :Single Line Comment: // के बाद अपनी बात लिखें।Multi-line Comment: /**\ से शुरू करें और  पर खत्म करें।
*/

