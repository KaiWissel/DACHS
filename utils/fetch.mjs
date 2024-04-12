export const fetchData = async (url) => {
  try {
    console.log("Try to fetch data from " + url);
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error fetching data");
    console.log(error);
  }
};
