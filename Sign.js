
document.querySelector(".Expand").addEventListener("click", function() {
    document.getElementById("ul").style.fontSize='35px';
});

document.querySelector(".translate").addEventListener("click", function() {
    document.getElementById("ul").style.direction = 'rtl';
    document.getElementById("li-1").style.direction = 'rtl';
    document.getElementById("li-1").innerHTML = 
    "الاسم: مارد وشوشني ";

    document.getElementById("li-2").style.direction = 'rtl';
    document.getElementById("li-2").innerHTML = 
    " الاسم: شلبي سولوفان";
});
