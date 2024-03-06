let suggestions = [
    "Forschungsdatenportal - Wie starte ich als Forscher?",
    "Forschen-fuer-Gesundheit.de",
    "tripletrax",
    "Checkliste für Datenspeicherung",
    "Künstliche Intelligenz in der medizinischen Forschung",
    "Mainzelliste.Client",
    "Datenschutz im DIZ",
    "Datenschutzkonzept für X",
    "Datenschutzkonzept für Y",
    "Datenschutz-Checkliste für Z",
    "Samply.MDR",
    "FAIRDOM-SEEK",
    "RAYLYTIC",
    "BioVariance GmbH",
];


const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");

input.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData.trim()){ 
        let searchWords = userData.toLocaleLowerCase().split(" ").filter(word => word.trim() !== "");
        emptyArray = suggestions.filter((data)=>{
            
            return searchWords.every((word) => data.toLocaleLowerCase().includes(word));
        });
        emptyArray = emptyArray.map((data)=>{
            
            searchWords.forEach((word) => {
                let regEx = new RegExp(word, "gi");
                data = data.replace(regEx, "<b>$&</b>");
            });
            return '<li>' + data + '</li>';
        });
        searchInput.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchInput.classList.remove("active"); 
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = input.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}