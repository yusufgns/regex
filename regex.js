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
