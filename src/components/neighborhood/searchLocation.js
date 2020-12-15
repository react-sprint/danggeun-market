import axios from 'axios';

const REST_API_KEY = '426da5935a3ec606b4b03c997e271a85';

const getApiResponse = async (keyword) => {
  let response;
  try {
    response = await axios({
      method: 'get',
      url: `https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}`,
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

const searchLocation = (keyword) => {
  return getApiResponse(keyword);
};

export default searchLocation;
