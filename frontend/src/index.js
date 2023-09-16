import { GetScreenData } from './requests';

function updateScreenInput(data){
  const screenInput = document.getElementById('screenOutput');
  screenInput.textContent = data;
}

const equalsButton = document.getElementById("equalsButton")
equalsButton.addEventListener("click", async function(e) {
    const screenData = await GetScreenData()
    console.log(screenData)
    updateScreenInput(screenData);
}, false);

