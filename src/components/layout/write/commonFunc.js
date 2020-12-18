export const categoryList = () => {
  return [
    {
      id: 1,
      listName: '디지털/가전',
    },
    {
      id: 2,
      listName: '가구/인테리어',
    },
    {
      id: 3,
      listName: '생활/가공식품',
    },
    {
      id: 4,
      listName: '게임/취미',
    },
    {
      id: 5,
      listName: '뷰티/미용',
    },
    {
      id: 6,
      listName: '삽니다',
    },
  ];
};

export const returnTime = (time) => {
  const rightNow = Date.now();
  const gap = rightNow - time;
  const gapSecond = Math.floor(gap / 1000);
  const gapMinute = Math.floor(gapSecond / 60);
  const gapHour = Math.floor(gapMinute / 60);
  const gapDay = Math.floor(gapHour / 24);

  if (gapSecond < 60) return `${gapSecond}초`;
  if (gapMinute < 60) return `${gapMinute}분`;
  if (gapHour < 24) return `${gapHour}시간`;
  return `${gapDay}일`;
};
