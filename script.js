document.getElementById("calcul").addEventListener("click", function () {
    const numb = document.getElementById("nmbr").value;
    const price = document.getElementById("prod").value;
    const finalprice = numb * price;
    const correct = /^[1-9][0-9]*$/;
    
    if (correct.test(numb)) {
        document.getElementById("result").textContent = finalprice + " рублей";
    } else {
        document.getElementById("result").textContent = "Некорректные данные в количестве товара"; 
    }
});


