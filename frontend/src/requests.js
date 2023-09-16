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

export { GetScreenData };
