"use strict"
import { Template } from "./Szablony.js";
// import { ColorTextStrong, ColorTextStandard, ColorMagenta01, SmallRadius, Separator, ColorGray10, ColorGray11, SeparatorChrome} from "./variables";

let componentIdInput = document.querySelector(".idInput");
let errorInfo = document.querySelector(".error-info");
let submitTest = document.querySelector(".submit-test");
let areaResult = document.querySelector("#area-result");
let selectedValue;
const addNewTest = () => {
 let componentIdInputValue = componentIdInput.value;
    if(componentIdInputValue === "" && category.options[category.selectedIndex].value == 0) {
        errorInfo.style.display = "block";
        return
    } else {
        let test = Template.banner_2023_lista.replaceAll("%", "`");
        console.log(test)
        // areaResult.textContent = Template.banner_2023_lista;
    }
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].value;
}

submitTest.addEventListener("click", addNewTest);


