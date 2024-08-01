const oldDate = new Date(2024,1,5,4);
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
let dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

//오늘 날짜
// document.getElementById('printToday1').innerHTML = year + '년';
// document.getElementById('printToday2').innerHTML = month + '월 ' + date + '일';
// document.getElementById('printToday3').innerHTML = dayList[day];

//요일
document.querySelector('.day').innerHTML = dayList[day];


//일차 계산
let diff = Math.abs(today.getTime() - oldDate.getTime());
diff = Math.ceil(diff / (1000 * 60 * 60 * 24)); //2월 5일의 diff값은 0입니다.

// document.getElementById('printDiff').innerHTML = '오늘은 ' + Number(diff + 1) + '일차입니다. (2월 5일 기준)';

let table = {
  day121: {
    contents: '대상01-04',
  },
  day122: {
    contents: '대상05-09',
  },
  day123: {
    contents: '대상10-14',
  },
  day124: {
    contents: '대상15-19',
  },
  day125: {
    contents: '대상20-24',
  },
  day126: {
    contents: '시120-137편',
  },
  day127: {
    contents: '없음',
  },
  day128: {
    contents: '대상25-29',
  },
  day129: {
    contents: '대하01-04',
  },
  day130: {
    contents: '대하05-08',
  },
  day131: {
    contents: '대하09-12',
  },
  day132: {
    contents: '대하13-19',
  },
  day133: {
    contents: '시138-150편',
  },
  day134: {
    contents: '없음',
  },
  day135: {
    contents: '대하17-20',
  },
  day136: {
    contents: '대하21-24',
  },
  day137: {
    contents: '대하25-28',
  },
  day138: {
    contents: '대하29-32',
  },
  day139: {
    contents: '대하33-36',
  },
  day140: {
    contents: '잠언01-04',
  },
  day141: {
    contents: '없음',
  },
  day142: {
    contents: '에스라01-04',
  },
  day143: {
    contents: '에스라05-07',
  },
  day144: {
    contents: '에스라08-10',
  },
  day145: {
    contents: '느01-04',
  },
  day146: {
    contents: '느05-07',
  },
  day147: {
    contents: '잠언05-08',
  },
  day148: {
    contents: '없음',
  },
  day149: {
    contents: '느08-10',
  },
  day150: {
    contents: '느11-13',
  },
  day151: {
    contents: '에스더01-05',
  },
  day152: {
    contents: '에스더06-10',
  },
  day153: {
    contents: '욥01-05',
  },
  day154: {
    contents: '잠언09-13',
  },
  day155: {
    contents: '없음',
  },
  day156: {
    contents: '욥06-10',
  },
  day157: {
    contents: '욥11-15',
  },
  day158: {
    contents: '욥16-21',
  },
  day159: {
    contents: '욥22-28',
  },
  day160: {
    contents: '욥29-31',
  },
  day161: {
    contents: '잠언14-17',
  },
  day162: {
    contents: '없음',
  },
  day163: {
    contents: '욥32-37',
  },
  day164: {
    contents: '욥38-42',
  },
  day165: {
    contents: '전01-06',
  },
  day166: {
    contents: '전07-12',
  },
  day167: {
    contents: '아가서',
  },
  day168: {
    contents: '잠언18-22',
  },
  day169: {
    contents: '없음',
  },
  day170: {
    contents: '사01-05',
  },
  day171: {
    contents: '사06-10',
  },
  day172: {
    contents: '사11-16',
  },
  day173: {
    contents: '사17-22',
  },
  day174: {
    contents: '사23-27',
  },
  day175: {
    contents: '잠언23-26',
  },
  day176: {
    contents: '없음',
  },
  day177: {
    contents: '사28-30',
  },
  day178: {
    contents: '사31-35',
  },
  day179: {
    contents: '사36-39',
  },
  day180: {
    contents: '사40-42',
  },
  day181: {
    contents: '사43-45',
  },
  day182: {
    contents: '잠언27-31',
  },
  day183: {
    contents: '없음',
  },
  day184: {
    contents: '사46-49',
  },
  day185: {
    contents: '사50-53',
  },
  day186: {
    contents: '사54-58',
  },
  day187: {
    contents: '사59-62',
  },
  day188: {
    contents: '사63-66',
  },
  day189: {
    contents: '시01-10편',
  },
  day190: {
    contents: '없음',
  },
  day191: {
    contents: '렘01-03',
  },
  day192: {
    contents: '렘04-06',
  },
  day193: {
    contents: '렘07-09',
  },
  day194: {
    contents: '렘10-13',
  },
  day195: {
    contents: '렘14-17',
  },
  day196: {
    contents: '시11-20편',
  },
  day197: {
    contents: '없음',
  },
  day198: {
    contents: '렘18-20',
  },
  day199: {
    contents: '렘21-24',
  },
  day200: {
    contents: '렘25-28',
  },
  day201: {
    contents: '렘29-31',
  },
  day202: {
    contents: '렘32-34',
  },
  day203: {
    contents: '시21-30편',
  },
  day204: {
    contents: '없음',
  },
  day205: {
    contents: '렘35-38',
  },
  day206: {
    contents: '렘39-43',
  },
  day207: {
    contents: '렘44-47',
  },
  day208: {
    contents: '렘48-50',
  },
  day209: {
    contents: '렘51-52',
  },
  day210: {
    contents: '시31-36편',
  },
  day211: {
    contents: '없음',
  },
  day212: {
    contents: '예레미야애가',
  },
  day213: {
    contents: '겔01-06',
  },
  day214: {
    contents: '겔07-11',
  },
  day215: {
    contents: '겔12-16',
  },
  day216: {
    contents: '겔17-20',
  },
  day217: {
    contents: '시37-41편',
  },
  day218: {
    contents: '없음',
  },
  day219: {
    contents: '겔21-24',
  },
  day220: {
    contents: '겔25-28',
  },
  day221: {
    contents: '겔29-32',
  },
  day222: {
    contents: '갤33-36',
  },
  day223: {
    contents: '겔37-40',
  },
  day224: {
    contents: '시42-49편',
  },
  day225: {
    contents: '없음',
  },
  day226: {
    contents: '겔41-44',
  },
  day227: {
    contents: '겔45-48',
  },
  day228: {
    contents: '단01-04',
  },
  day229: {
    contents: '단05-08',
  },
  day230: {
    contents: '단09-12',
  },
  day231: {
    contents: '호01-06',
  },
  day232: {
    contents: '없음',
  },
  day233: {
    contents: '호07-14',
  },
  day234: {
    contents: '요엘',
  },
  day235: {
    contents: '아모스',
  },
  day236: {
    contents: '오바댜, 요나',
  },
  day237: {
    contents: '미가',
  },
  day238: {
    contents: '나훔, 하박국',
  },
  day239: {
    contents: '없음',
  },
  day240: {
    contents: '스바냐, 학개',
  },
  day241: {
    contents: '슥01-06',
  },
  day242: {
    contents: '슥07-10',
  },
  day243: {
    contents: '슥11-14',
  },
  day244: {
    contents: '말라기',
  },
  day245: {
    contents: '구약 총정리',
  },
  day246: {
    contents: '없음',
  },
  day247: {
    contents: '마01-04',
  },
  day248: {
    contents: '마05-07',
  },
  day249: {
    contents: '마08-10',
  },
  day250: {
    contents: '마11-14',
  },
  day251: {
    contents: '마15-18',
  },
  day252: {
    contents: '마19-22',
  },
  day253: {
    contents: '없음',
  },
  day254: {
    contents: '마23-25',
  },
  day255: {
    contents: '마26-28',
  },
  day256: {
    contents: '막01-04',
  },
  day257: {
    contents: '막05-07',
  },
  day258: {
    contents: '막08-10',
  },
  day259: {
    contents: '막11-13',
  },
  day260: {
    contents: '없음',
  },
  day261: {
    contents: '막14-16',
  },
  day262: {
    contents: '눅01-02',
  },
  day263: {
    contents: '눅03-05',
  },
  day264: {
    contents: '눅06-08',
  },
  day265: {
    contents: '눅09-11',
  },
  day266: {
    contents: '눅12-14',
  },
  day267: {
    contents: '없음',
  },
  day268: {
    contents: '눅15-18',
  },
  day269: {
    contents: '눅19-21',
  },
  day270: {
    contents: '눅22-24',
  },
  day271: {
    contents: '요01-04',
  },
  day272: {
    contents: '요05-07',
  },
  day273: {
    contents: '요08-10',
  },
  day274: {
    contents: '없음',
  },
  day275: {
    contents: '요11-13',
  },
  day276: {
    contents: '요14-17',
  },
  day277: {
    contents: '요18-21',
  },
  day278: {
    contents: '행01-04',
  },
  day279: {
    contents: '행05-08',
  },
  day280: {
    contents: '행09-11',
  },
  day281: {
    contents: '없음',
  },
  day282: {
    contents: '행12-14',
  },
  day283: {
    contents: '행15-17',
  },
  day284: {
    contents: '행18-20',
  },
  day285: {
    contents: '행21-24',
  },
  day286: {
    contents: '행25-28',
  },
  day287: {
    contents: '롬01-04',
  },
  day288: {
    contents: '없음',
  },
  day289: {
    contents: '롬05-08',
  },
  day290: {
    contents: '롬09-12',
  },
  day291: {
    contents: '롬13-16',
  },
  day292: {
    contents: '고전01-04',
  },
  day293: {
    contents: '고전05-08',
  },
  day294: {
    contents: '고전09-11',
  },
  day295: {
    contents: '없음',
  },
  day296: {
    contents: '고전12-14',
  },
  day297: {
    contents: '고전15-16',
  },
  day298: {
    contents: '고후01-04',
  },
  day299: {
    contents: '고후05-09',
  },
  day300: {
    contents: '고후10-13',
  },
  day301: {
    contents: '갈라디아서',
  },
  day302: {
    contents: '없음',
  },
  day303: {
    contents: '에베소서',
  },
  day304: {
    contents: '빌립보서',
  },
  day305: {
    contents: '골로새서',
  },
  day306: {
    contents: '살전',
  },
  day307: {
    contents: '살후',
  },
  day308: {
    contents: '딤전',
  },
  day309: {
    contents: '없음',
  },
  day310: {
    contents: '딤후',
  },
  day311: {
    contents: '디도서',
  },
  day312: {
    contents: '빌레몬',
  },
  day313: {
    contents: '히01-06',
  },
  day314: {
    contents: '히07-10',
  },
  day315: {
    contents: '히11-13',
  },
  day316: {
    contents: '없음',
  },
  day317: {
    contents: '야고보서',
  },
  day318: {
    contents: '벧전',
  },
  day319: {
    contents: '벧후',
  },
  day320: {
    contents: '요1',
  },
  day321: {
    contents: '요2,3서',
  },
  day322: {
    contents: '유다서',
  },
  day323: {
    contents: '없음',
  },
  day324: {
    contents: '계01-03',
  },
  day325: {
    contents: '계04-09',
  },
  day326: {
    contents: '계10-13',
  },
  day327: {
    contents: '계14-18',
  },
  day328: {
    contents: '계19-22',
  },
  day329: {
    contents: '1독감사소감문',
  },
};

let props = 'day' + Number(diff + 1);
let todayContents = table[props].contents;

// document.getElementById('printContents').innerHTML = todayContents;

document.querySelector('.contents').innerHTML = todayContents;