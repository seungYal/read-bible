const today = new Date();

const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);
const realDay = today.getDay(); //요일, 0: 일요일, 1: 월요일, ...

const todayStr = `${year}-${month}-${day}`; // 오늘 날짜 yyyy-mm-dd 형식 string

const firstDate = new Date(year, 0, 1); // 올해 첫 날
const dayDiff = Math.floor((today - firstDate) / (24 * 60 * 60 * 1000)); // 첫날 기준 날짜 차이
const firstDay = (firstDate.getDay() + 6) % 7; // 첫 날의 요일 (월요일 기준)
const week = Math.ceil((dayDiff + firstDay + 1) / 7); // 올해 몇 주차인지 계산

// JSON 파일에서 데이터 로드
fetch('bibleSchedule.json')
  .then(response => response.json())
  .then(bibleSchedule => {
    // 오늘 날짜에 해당하는 성경 구절
    const findVerseByDate = (targetDate) =>
      bibleSchedule.find(schedule => schedule.date === targetDate)?.verse || "없음";

    // 주간 성경 구절 가져오기
    const getWeeklySchedule = (schedule, weekIndex) => 
      schedule.slice((weekIndex - 1) * 6, weekIndex * 6);

    // HTML 업데이트
    // document.getElementById("todayWord").innerHTML = findVerseByDate(todayStr);

    const weekSchedule = getWeeklySchedule(bibleSchedule, week - 2);
    weekSchedule.forEach((entry, index) => {
      const element = document.getElementById(`weekWord${index + 1}`);
      if (element) element.innerHTML += entry.verse;
    });
  })
  .catch(error => console.error('Error loading schedule:', error));

  if (realDay > 0 && realDay < 7) { // 일요일(0) 제외
    const targetId = `weekWord${realDay}`;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.classList.add("onWeek");
    }
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
      // JSON 파일 가져오기
      const response = await fetch("verses.json");
      const data = await response.json();

      // 현재 주차 구하기 (예: 1월 1일 기준 주차 계산)
      const startDate = new Date(2025, 0, 1); // 기준 날짜 (2024년 1월 1일)
      const today = new Date(); // 오늘 날짜
      const weekNumber = Math.ceil((today - startDate) / (7 * 24 * 60 * 60 * 1000)); // 주차 계산

      // 현재 주차에 해당하는 성경 구절 찾기
      const verseData = data.verses.find(v => v.weeks === weekNumber);

      if (verseData) {
          document.getElementById("chap").textContent = verseData.verse; // 장 표시
          document.getElementById("verse").textContent = verseData.text; // 구절 표시
      } else {
          document.getElementById("chap").textContent = "해당 주차의 데이터가 없습니다.";
          document.getElementById("verse").textContent = "";
      }
  } catch (error) {
      console.error("JSON 데이터를 불러오는 중 오류 발생:", error);
  }
});