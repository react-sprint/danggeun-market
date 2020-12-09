/* eslint-disable no-await-in-loop */
import axios from 'axios';

const REST_API_KEY = '426da5935a3ec606b4b03c997e271a85';

// 거리 상수
const DISTANCE = 0.007;

let currentCoords = []; // 현재 내 좌표 저장 배열
let localCoords = []; // 동네 좌표 저장 배열
let addressList = new Set(); // 좌표로 부터 받아온 주소 저장 배열

// 현재 내 좌표값 받아오는 함수
const getCurrentCoords = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// getMyLocation 에서 받아온 데이터 처리
const getMyLocation = async () => {
  const location = await getCurrentCoords();
  const currentX = location.coords.longitude;
  const currentY = location.coords.latitude;

  return [currentX, currentY];
};

// 현재 내 좌표 currentCoords 를 기준으로 DISTANCE 값 만큼 이동하여 동네 좌표 저장
const getLocalCoords = () => {
  localCoords = [
    [currentCoords[0], currentCoords[1]],
    [currentCoords[0] + DISTANCE, currentCoords[1]],
    [currentCoords[0] - DISTANCE, currentCoords[1]],
    [currentCoords[0], currentCoords[1] - DISTANCE],
    [currentCoords[0], currentCoords[1] + DISTANCE],
  ];
};

// api 데이터 호출 및 addressList 배열에 데이터 push
const getApiResponse = async (coords) => {
  let response;
  try {
    response = await axios({
      method: 'get',
      url: `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${coords[0]}&y=${coords[1]}`,
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    addressList.add(response.data.documents[0].address_name);
  }
};

// for loop 으로 돌릴 callback 함수 정의
const apiLoop = async (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    await callback(array[i]);
  }
};

// callback 함수 호출
const runApiLoop = async () => {
  await apiLoop(localCoords, (Coord) => getApiResponse(Coord));
};

const getLocation = async () => {
  currentCoords = await getMyLocation();
  getLocalCoords();
  await runApiLoop();
  return addressList;
};

export default getLocation;
