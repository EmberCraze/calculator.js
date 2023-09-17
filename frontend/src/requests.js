async function GetScreenData(){
  const url = new URL("http://localhost:3001/screen/")

  return fetch(url)
    .then((response) => response.json())
    .then((screenData) => {
      console.log(screenData)
      return screenData.data;
    })
    .catch((error) => {
      console.error("Error fetching screen data:", error);
      throw error
    });
};

async function UpdateScreenData(screenData){
  const url = new URL("http://localhost:3001/screen/")
  const data = {data: screenData}
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
  console.log(options)
  return fetch(url, options)
    .then((response) => response.json())
    .then((screenData) => {
      return screenData.data;
    })
    .catch((error) => {
      console.error("Error updating screen data:", error);
      throw error
    });

};

export { GetScreenData, UpdateScreenData };
