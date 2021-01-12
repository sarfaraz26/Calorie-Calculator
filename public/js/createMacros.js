let btn = document.querySelector('.btn');
let title = document.querySelector('.title');
let spans = document.getElementsByTagName('span');
let hide = document.querySelector('#hidden');

function generateMacros(genderFactor,proteinFactor)
{
    let name = document.getElementsByClassName('form-control')[0].value;
        let weight = document.getElementsByClassName('form-control')[2].value;
        let bmr = Math.round(weight * 2.2 * genderFactor);
        let protein = Math.round(weight * 2.2 * proteinFactor);
        let fats = Math.round(weight * 2.2 * 0.35);
        let totalCalories;
        let carbs;

        if (title.innerText === "Build-Muscle") {
            spans[1].innerHTML = "Muscle Building";
            totalCalories = bmr + 200;
            spans[2].innerHTML = totalCalories;
            carbs = Math.round((totalCalories - ((protein * 4) + (fats * 9))) / 4);
            spans[4].innerHTML = carbs;
        }
        else if (title.innerText === "Loose-Fat") {
            spans[1].innerHTML = "Fat Loss";
            totalCalories = bmr - 200;
            spans[2].innerHTML = totalCalories;
            carbs = Math.round((totalCalories - ((protein * 4) + (fats * 9))) / 4);
            spans[4].innerHTML = carbs;
        }
        spans[3].innerHTML = protein;
        spans[5].innerHTML = fats;
    
}

btn.addEventListener('click', function () {
    if (hide.value === "male") 
    {   
        generateMacros(15,1);
    }
    else
    {
        generateMacros(12,0.8)
    }
})


