**Phone Number**

125-500-8512
1255008512
125 500 8512
+90 125-500-8512
(123) 500 8512

// /(?<areaCode>\+\d{2,3})?[ ]?\(?(?<operator>\d{3})\)?[ -]?(?<mainNumber>\d{3})[ -]?(?<Number>\d{4})/gm

**History**

14/02/2018
14-02-2018
14.02.2018
14.02.18

// /(?<dayNumber>\d{1,2})[ \.\/\-](?<monthNumber>\d{1,2})[ \.\/\-](?<yearNumber>\d{1,4})/gm

2018/02/14
2018-02-14
2018.02.14
18.02.14

// /(?<yearNumber>\d{1,4})[ \.\/\-](?<monthNumber>\d{1,2})[ \.\/\-](?<dayNumber>\d{1,2})/gm


**Link Inside a**

[https://www.videosinif.com~videosinif]
/(?<=\[)(?<url>.*)(?=~)~(?<=~)(?<titel>.*)(?=\])/gm

[https://www.kablosuzkedi.com, kablosuzkedi]
[https://www.youtube.com/kablosuzkedi|kablosuzkedi youtube kanalı] 

// (?<=\[)(?<url>.*)(?=[~, \|])[~, \|](?<=[~, \|])(?<titel>.*)(?=\])/gm

** Tools : **
// <a href="$url">$titel</a>\n
// <a href="https://www.kablosuzkedi.com">kablosuzkedi</a>
// <a href="https://www.youtube.com/kablosuzkedi">kablosuzkedi youtube kanalı</a>
// <a href="https://www.videosinif.com">videosinif</a>


**E-mail**

gokhan@kandemir.com

// /\w+@\w+\.[a-zA-Z]{2,}/gmu


**Link In Text**

youtube.com
https://www.google.com
http://www.google.com
www.google.com

// /(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)(\.[a-zA-Z]{2,})/gm


**Hesteg(#)**

#Regex
#tag
#360Day
#Derdimianlatabilmişimdir

// /#[a-zA-Z0-9]/gmu


**Usage in lines of code**

const email_regex = /\w+@\w+\.[a-zA-Z]{2,}/gmu;
if (email_regex.test("gokhan@gkandemir")) {
    alert("Başarılı");
}else {
    alert("Başarısız")
}

const regex = /#[a-zA-Z0-9]/gmu;
//const regex = /#[a-zA-Z0-9iöüşğç]/gm;

const str = "#Regex #tag #360Day #Derdimianlatabilmişimdir"

str.match(regex).forEach(h => console.log(h))
