const axiosRequest = require("axios");
async function getActivity() {
  try {
    let response = await axiosRequest.get(
      "https://www.boredapi.com/api/activity"
    );
    console.log(response.data.activity);
  } catch (error) {
    console.log(error);
  }
}