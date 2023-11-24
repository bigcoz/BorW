// 위치 데이터
var locationsData = [
  {
    name: "000 - 정문",
    x: 14369578.9196311,
    y: 4195399.9643932,
    description: "부산대 정문",
  },
  {
    name: "102 - 제1 부속공장",
    x: 14369369.333935594,
    y: 4195393.465639521,
    description: "부산대 제1 부속공장",
  },
  {
    name: "103 - 제12 공학관",
    x: 14369497.745056184,
    y: 4195292.814760069,
    description: "부산대 제12 공학관",
  },
  {
    name: "105 - 제3 공학관(융합기계관)",
    x: 14369511.747827504,
    y: 4195333.969471135,
    description: "부산대 제3 공학관(융합기계관)",
  },
  {
    name: "106 - 효원문화회관",
    x: 14369576.265638918,
    y: 4195510.690158368,
    description: "부산대 효원문화회관",
  },
  {
    name: "107 - 제8 공학관(항공관)",
    x: 14369540.563201835,
    y: 4195586.666891533,
    description: "부산대 제8 공학관(항공관)",
  },
  {
    name: "108 - 제9 공학관(기전관)",
    x: 14369591.513420254,
    y: 4195611.383519616,
    description: "부산대 제9 공학관(기전관)",
  },
  {
    name: "109 - 공과대학 공동실험관",
    x: 14369586.2354339,
    y: 4195563.597178447,
    description: "부산대 공과대학 공동실험관",
  },
  {
    name: "110 - 에너지분야 실험실",
    x: 14369596.882913629,
    y: 4195634.29799224,
    description: "부산대 에너지분야 실험실",
  },
  {
    name: "111 - 실험폐기물처리장",
    x: 14369596.882913629,
    y: 4195634.29799224,
    description: "부산대 실험폐기물처리장",
  },
  {
    name: "201 - 제6 공학관(컴퓨터공학관)",
    x: 14369363.74535726,
    y: 4195301.4724532515,
    description: "부산대 제6 공학관(컴퓨터공학관)",
  },
  {
    name: "202 - 운죽정",
    x: 14369310.4141064,
    y: 4195352.949920987,
    description: "부산대 운죽정",
  },
  {
    name: "203 - 넉넉한터",
    x: 14369358.736657085,
    y: 4195442.200665918,
    description: "부산대 넉넉한터",
  },
  {
    name: "204 - 넉넉한터 지하주차장",
    x: 14369515.145462207,
    y: 4195408.814709093,
    description: "부산대 넉넉한터 지하주차장",
  },
  {
    name: "205 - 대학본부",
    x: 14369443.51549572,
    y: 4195550.026159399,
    description: "부산대 대학본부",
  },
  {
    name: "206 - 제11 공학관(조선해양공학관)",
    x: 14369380.308614034,
    y: 4195538.462619143,
    description: "부산대 제11 공학관(조선해양공학관)",
  },
  {
    name: "207 - 제10 공학관(특성화공학관)",
    x: 14369442.349156456,
    y: 4195625.888711635,
    description: "부산대 제10 공학관(특성화공학관)",
  },
  {
    name: "208 - 기계기술연구동",
    x: 14369461.351808503,
    y: 4195686.8954450395,
    description: "부산대 기계기술연구동",
  },
  {
    name: "209 - 상남국제관",
    x: 14369591.045391068,
    y: 4195983.828253401,
    description: "부산대 상남국제관",
  },
  {
    name: "210 - 언어교육원",
    x: 14369508.162143802,
    y: 4195981.584526129,
    description: "부산대 언어교육원",
  },
  {
    name: "211 - 보육종합센터",
    x: 14369357.295944566,
    y: 4196105.122404888,
    description: "부산대 보육종합센터",
  },
  {
    name: "301 - 구조실험동",
    x: 14369241.837530155,
    y: 4195201.182962367,
    description: "부산대 구조실험동",
  },
  {
    name: "302 - 토조실험동",
    x: 14369264.295010477,
    y: 4195266.722900441,
    description: "부산대 토조실험동",
  },
  {
    name: "303 - 기계관",
    x: 14369208.377438242,
    y: 4195252.855561963,
    description: "부산대 기계관",
  },
  {
    name: "306 - 인문관",
    x: 14369263.121054871,
    y: 4195488.73500562,
    description: "부산대 인문관",
  },
  {
    name: "307 - 인문대교수연구동",
    x: 14369245.52565159,
    y: 4195568.320951676,
    description: "부산대 인문대교수연구동",
  },
  {
    name: "308 - 제1 물리관",
    x: 14369296.634444261,
    y: 4195688.52394,
    description: "부산대 제1 물리관",
  },
  {
    name: "309 - 제2 물리관",
    x: 14369261.513598671,
    y: 4195704.615461575,
    description: "부산대 제2 물리관",
  },
  {
    name: "310 - 문창회관",
    x: 14369322.253512671,
    y: 4195729.7412332855,
    description: "부산대 문창회관",
  },
  {
    name: "311 - 공동연구기기동",
    x: 14369425.90662825,
    y: 4195789.8855891265,
    description: "부산대 공동연구기기동",
  },
  {
    name: "312 - 공동실험실습관",
    x: 14369368.287632084,
    y: 4195782.502752525,
    description: "부산대 공동실험실습관",
  },
  {
    name: "313 - 자연대 연구실험동",
    x: 14369419.661560519,
    y: 4195871.381809837,
    description: "부산대 자연대 연구실험동",
  },
  {
    name: "314 - 정보화교육관",
    x: 14369358.74521606,
    y: 4195911.044972166,
    description: "부산대 정보화교육관",
  },
  {
    name: "315 - 자유관 A동",
    x: 14369362.593008418,
    y: 4195978.204839511,
    description: "부산대 자유관 A동",
  },
  {
    name: "316 - 자유관 B동",
    x: 14369362.593008418,
    y: 4195978.204839511,
    description: "부산대 자유관 B동",
  },
  {
    name: "317 - 직장어린이집",
    x: 14369430.219181538,
    y: 4196113.410861395,
    description: "부산대 직장어린이집",
  },
  {
    name: "318 - 자유주차장",
    x: 14369362.593008418,
    y: 4195978.204839511,
    description: "부산대 자유주차장",
  },
  {
    name: "401 - 건설관",
    x: 14369106.967765773,
    y: 4195329.293070644,
    description: "부산대 건설관",
  },
  {
    name: "402 - 정학관",
    x: 14368990.69824275,
    y: 4195382.0933934115,
    description: "부산대 정학관",
  },
  {
    name: "405 - 제2 공학관(재료관)",
    x: 14369136.635107324,
    y: 4195491.398046571,
    description: "부산대 제2 공학관(재료관)",
  },
  {
    name: "406 - 제7 공학관(화공관)",
    x: 14369086.695940197,
    y: 4195500.432017927,
    description: "부산대 제7 공학관(화공관)",
  },
  {
    name: "407 - 선박예인수조연구동",
    x: 14369072.619684258,
    y: 4195528.975589716,
    description: "부산대 선박예인수조연구동",
  },
  {
    name: "408 - 제5 공학관(유기소재관)",
    x: 14369032.773720851,
    y: 4195523.673246332,
    description: "부산대 제5 공학관(유기소재관)",
  },
  {
    name: "409 - 교수회관",
    x: 14369142.04448725,
    y: 4195589.535869817,
    description: "부산대 교수회관",
  },
  {
    name: "410 - 선박충격ㆍ피로ㆍ도장ㆍ시험연구동",
    x: 14369094.995428627,
    y: 4195605.263856382,
    description: "부산대 선박충격ㆍ피로ㆍ도장ㆍ시험연구동",
  },
  {
    name: "411 - 자연과학관",
    x: 14369211.864447547,
    y: 4195698.292089638,
    description: "부산대 자연과학관",
  },
  {
    name: "412 - 박물관 A",
    x: 14369158.593836183,
    y: 4195694.193982007,
    description: "부산대 박물관 A",
  },
  {
    name: "413 - 박물관 B",
    x: 14369158.593836183,
    y: 4195694.193982007,
    description: "부산대 박물관 B",
  },
  {
    name: "414 - 지구관",
    x: 14369081.10039233,
    y: 4195715.782370322,
    description: "부산대 지구관",
  },
  {
    name: "415 - 샛벌회관",
    x: 14369087.596716471,
    y: 4195748.805601617,
    description: "부산대 샛벌회관",
  },
  {
    name: "416 - 생물관",
    x: 14369242.37873393,
    y: 4195842.263685568,
    description: "부산대 생물관",
  },
  {
    name: "417 - 제1 사범관",
    x: 14369139.652602062,
    y: 4195811.880612046,
    description: "부산대 제1 사범관",
  },
  {
    name: "418 - 제2 교수연구동",
    x: 14369153.688622473,
    y: 4195869.308000504,
    description: "부산대 제2 교수연구동",
  },
  {
    name: "419 - 금정회관",
    x: 14369147.220225036,
    y: 4195910.894074985,
    description: "부산대 금정회관",
  },
  {
    name: "420 - 새벽벌도서관",
    x: 14369270.554575214,
    y: 4195962.02854213,
    description: "부산대 새벽벌도서관",
  },
  {
    name: "421 - 사회관",
    x: 14369174.709181596,
    y: 4196041.726953767,
    description: "부산대 사회관",
  },
  {
    name: "422 - 성학관",
    x: 14369264.741476253,
    y: 4196093.562499683,
    description: "부산대 성학관",
  },
  {
    name: "501 - 첨단과학관",
    x: 14368950.039788812,
    y: 4195455.102176482,
    description: "부산대 첨단과학관",
  },
  {
    name: "503 - 약학관",
    x: 14368952.141574267,
    y: 4195467.95351224,
    description: "부산대 약학관",
  },
  {
    name: "506 - 효원산학협동관",
    x: 14368971.920184607,
    y: 4195551.665554865,
    description: "부산대 효원산학협동관",
  },
  {
    name: "507 - 인덕관",
    x: 14368980.612320961,
    y: 4195587.406007587,
    description: "부산대 인덕관",
  },
  {
    name: "508 - 산학협동관",
    x: 14368907.616021087,
    y: 4195575.4315782,
    description: "부산대 산학협동관",
  },
  {
    name: "509 - 박물관 별관",
    x: 14369004.436829798,
    y: 4195645.241797737,
    description: "부산대 박물관 별관",
  },
  {
    name: "510 - 중앙도서관",
    x: 14368964.964216316,
    y: 4195804.502956257,
    description: "부산대 중앙도서관",
  },
  {
    name: "511 - 간이체육관",
    x: 14368973.48212572,
    y: 4195875.863300514,
    description: "부산대 간이체육관",
  },
  {
    name: "512 - 테니스장",
    x: 14369042.81740014,
    y: 4195917.389774586,
    description: "부산대 테니스장",
  },
  {
    name: "513 - 철골주차장",
    x: 14369002.64057564,
    y: 4195984.24788275,
    description: "부산대 철골주차장",
  },
  {
    name: "514 - 경영관",
    x: 14369072.466541434,
    y: 4196078.574083535,
    description: "부산대 경영관",
  },
  {
    name: "515 - 중앙도서관 및 정보화본부",
    x: 14368964.964216316,
    y: 4195804.502956257,
    description: "부산대 중앙도서관 및 정보화본부",
  },
  {
    name: "516 - 경제통상관",
    x: 14369055.227716511,
    y: 4195955.508201448,
    description: "부산대 경제통상관",
  },
  {
    name: "601 - 예술관",
    x: 14368784.341280513,
    y: 4195556.223454951,
    description: "부산대 예술관",
  },
  {
    name: "602 - 생활과학관 강의동",
    x: 14368839.92709433,
    y: 4195686.159756683,
    description: "부산대 생활과학관 강의동",
  },
  {
    name: "603 - 생활과학관 연구동",
    x: 14368839.92709433,
    y: 4195686.159756683,
    description: "부산대 생활과학관 연구동",
  },
  {
    name: "605 - 학군단",
    x: 14368874.286960248,
    y: 4195824.217943034,
    description: "부산대 학군단",
  },
  {
    name: "606 - 화학관",
    x: 14368864.362170072,
    y: 4195876.0087519,
    description: "부산대 화학관",
  },
  {
    name: "607 - 공동연구소동",
    x: 14368915.956503117,
    y: 4195975.631876216,
    description: "부산대 공동연구소동",
  },
  {
    name: "608 - 제2 법학관",
    x: 14368940.438989135,
    y: 4196050.340939693,
    description: "부산대 제2 법학관",
  },
  {
    name: "609 - 법학관",
    x: 14368966.137583455,
    y: 4196124.717319759,
    description: "부산대 법학관",
  },
  {
    name: "701 - 제2 사범관",
    x: 14368568.30929196,
    y: 4195456.676046031,
    description: "부산대 제2 사범관",
  },
  {
    name: "702 - 조소실",
    x: 14368693.276581623,
    y: 4195645.335364797,
    description: "부산대 조소실",
  },
  {
    name: "703 - 미술관",
    x: 14368636.967992168,
    y: 4195612.744120104,
    description: "부산대 미술관",
  },
  {
    name: "704 - 조형관",
    x: 14368659.09321636,
    y: 4195530.300579288,
    description: "부산대 조형관",
  },
  {
    name: "705 - 경암체육관 교수연구동",
    x: 14368535.381054854,
    y: 4195622.2461721515,
    description: "부산대 경암체육관 교수연구동",
  },
  {
    name: "706 - 경암체육관",
    x: 14368535.381054854,
    y: 4195622.2461721515,
    description: "부산대 경암체육관",
  },
  {
    name: "707 - 음악관",
    x: 14368668.875624646,
    y: 4195765.2852484975,
    description: "부산대 음악관",
  },
  {
    name: "708 - 학생회관",
    x: 14368722.201095697,
    y: 4195889.435909128,
    description: "부산대 학생회관",
  },
  {
    name: "709 - 과학기술연구동",
    x: 14368765.569043761,
    y: 4195975.7230001,
    description: "부산대 과학기술연구동",
  },
  {
    name: "710 - 대운동장",
    x: 14368566.006469384,
    y: 4195845.43300064,
    description: "부산대 대운동장",
  },
  {
    name: "711 - 효원재",
    x: 14368704.213569624,
    y: 4196053.157321882,
    description: "부산대 효원재",
  },
  {
    name: "712 - 웅비관 A동",
    x: 14368793.838456828,
    y: 4196056.186521005,
    description: "부산대 웅비관 A동",
  },
  {
    name: "713 - 웅비관 B동",
    x: 14368785.21733673,
    y: 4196170.585308137,
    description: "부산대 웅비관 B동",
  },
  {
    name: "714 - 진리관 관리동",
    x: 14368869.91903679,
    y: 4196201.3506194735,
    description: "부산대 진리관 관리동",
  },
  {
    name: "715 - 진리관 가동",
    x: 14368877.998354414,
    y: 4196281.010219494,
    description: "부산대 진리관 가동",
  },
  {
    name: "716 - 진리관 나동",
    x: 14368785.53998522,
    y: 4196279.844746384,
    description: "부산대 진리관 나동",
  },
  {
    name: "717 - 진리관 다동",
    x: 14368785.53998522,
    y: 4196288.787577482,
    description: "부산대 진리관 다동",
  },
  {
    name: "K05 - 변전실",
    x: 14369472.673175402,
    y: 4195204.609744074,
    description: "부산대 변전실",
  },
  {
    name: "K08 - 공대제2별관",
    x: 14369243.294651506,
    y: 4195197.774877052,
    description: "부산대 공대제2별관",
  },
];

function getCurrentAndNextLocationWithDefaultUpdate() {
  var now = new Date();
  var day = now.getDay(); // 요일 (0=일요일, 1=월요일, ...)
  var hour = now.getHours(); // 시간 (분은 무시)

  var currentLocation = "000 - 정문";
  var nextLocation = "No data available";

  var table = document.getElementById("locationTable");
  var rows = table.getElementsByTagName("tr");

  var timeString = hour >= 12 ? "오후 " : "오전 ";
  hour = hour % 12;
  hour = hour ? hour : 12; // 시간이 0이면 12로 변경
  timeString += hour + ":00";

  // 현재 시간과 일치하는 행을 찾기
  var foundCurrent = false;
  for (var i = 0; i < rows.length; i++) {
    var firstCell = rows[i].cells[0];
    if (firstCell && firstCell.textContent.trim() === timeString) {
      var currentCell = rows[i].cells[day];
      if (currentCell && currentCell.textContent.trim()) {
        currentLocation = currentCell.textContent.trim();
        foundCurrent = true;
      }
      break;
    }
  }

  // 현재 위치를 찾지 못했으면, 위쪽 방향으로 가장 가까운 데이터 찾기
  if (!foundCurrent) {
    for (var j = i - 1; j > 0; j--) {
      var cellAbove = rows[j].cells[day];
      if (cellAbove && cellAbove.textContent.trim()) {
        currentLocation = cellAbove.textContent.trim();
        break;
      }
    }
  }

  // 다음 위치 찾기
  var foundNext = false;
  for (var k = i + 1; k < rows.length; k++) {
    var cellBelow = rows[k].cells[day];
    if (cellBelow && cellBelow.textContent.trim()) {
      nextLocation = cellBelow.textContent.trim();
      foundNext = true;
      break;
    }
  }

  if (!foundNext) {
    nextLocation = "000 - 정문";
  }

  return { currentLocation, nextLocation };
}

// 네이버 지도 URL 생성
function generateNaverMapURL(currentLocation, nextLocation) {
  var currentLocationData = locationsData.find(
    (item) => item.name === currentLocation
  );
  var nextLocationData = locationsData.find(
    (item) => item.name === nextLocation
  );

  var currentX = currentLocationData ? currentLocationData.x : "";
  var currentY = currentLocationData ? currentLocationData.y : "";
  var currentDescription = currentLocationData
    ? currentLocationData.description
    : "";
  var nextX = nextLocationData ? nextLocationData.x : "";
  var nextY = nextLocationData ? nextLocationData.y : "";
  var nextDescription = nextLocationData ? nextLocationData.description : "";

  var transitUrl = `https://map.naver.com/p/directions/${currentX},${currentY},${currentDescription},,/${nextX},${nextY},${nextDescription},,/-/transit?c=16.00,0,0,0,dh`;
  var walkUrl = `https://map.naver.com/p/directions/${currentX},${currentY},${currentDescription},,/${nextX},${nextY},${nextDescription},,/-/walk?c=17.00,0,0,0,dh`;
  return { transitUrl, walkUrl };
}

function generateMainUrl() {
  // 현재 위치 및 다음 위치 정보 가져오기
  var locations = getCurrentAndNextLocationWithDefaultUpdate();

  // 네이버 지도 URL 생성
  var naverMapURLs = generateNaverMapURL(
    locations.currentLocation,
    locations.nextLocation
  );

  return naverMapURLs;
}

console.log(generateMainUrl());

var urls = generateMainUrl();

function openWindowTransit() {
  window.open(generateMainUrl().transitUrl, "_blank");
}
function openWindowWalk() {
  window.open(generateMainUrl().walkUrl, "_blank");
}

window.onload = function () {
  // 페이지 로드 완료 후 실행할 코드
  urls = generateMainUrl();
  console.log(urls);

  // 필요에 따라 urls.transitUrl 및 urls.walkUrl을 사용하실 수 있습니다.
  // 예: document.getElementById("someElement").href = urls.transitUrl;
};
