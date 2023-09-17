import { GetScreenData, UpdateScreenData } from './requests';

function updateScreenInput(data) {
  const screenInput = document.getElementById("screenOutput");
  screenInput.textContent = data;
}

const equalsButton = document.getElementById("equalsButton")
equalsButton.addEventListener("click", async function(e) {
    const screenData = await GetScreenData()
    updateScreenInput(screenData);
}, false);

const nr1Button = document.getElementById("nr1Button");
nr1Button.addEventListener("click", async function(e){
    var screenData = await GetScreenData();
    screenData = screenData + "1";
    screenData = await UpdateScreenData(screenData);
    updateScreenInput(screenData);
});

const delButton = document.getElementById("delButton");
delButton.addEventListener("click", async function(e) {
    var screenData = await GetScreenData();
    screenData = screenData.slice(0, -1); ;
    screenData = await UpdateScreenData(screenData);
    updateScreenInput(screenData);
})
