const picks = [
    {
        pick : "아이스 꼬북칩",
        flavor : "밀크 초콜릿, 꼬북칩 아이스크림과 시나몬향 초콜릿 아이스크림 속에 초코 코팅 꼬북칩과 시나몬 초콜릿칩이 어우러진 아이스크림",
        pic : "ic_img/아이스꼬북칩.png",
    },
    {
        pick : "피나 콜라다",
        flavor : "상큼한 파인애플&코코넛 샤베트에 파인애플이 쏙쏙",
        pic : "ic_img/피나콜라다.png",
    },
    {
        pick : "꿀.바.망",
        flavor : "허니망고 아이스크림과 바나나 아이스크림 속에 망고 다이스가 쏙쏙!",
        pic : "ic_img/꿀바망.png",
    },
    {
        pick : "아이스 허니버터 아몬드",
        flavor : "버터 스카치 아이스크림과 바닐라 아이스크림 속에 단짠단짠 허니버터 아몬드가 쏙쏙",
        pic : "ic_img/아이스허니버터아몬드.png",
    },
    {
        pick : "오레오 쿠키 앤 크림",
        flavor : "부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!",
        pic : "ic_img/오레오쿠키앤크림.png",
    },
    {
        pick : "월넛",
        flavor : "고소하고 향긋한 호두 아이스크림에 호두가 듬뿍 들어있는 제품",
        pic : "ic_img/월넛.png",
    },
    {
        pick : "레드 라즈베리 소르베",
        flavor : "상큼 시원한 라즈베리 소르베",
        pic : "ic_img/레드라즈베리소르베.png",
    },
    {
        pick : "트리플 치즈 러브",
        flavor : "뉴욕 치즈케이크, 카라멜 치즈케이크, 까망베르 치즈 세가지 치즈 아이스크림의 조화!",
        pic : "ic_img/트리플치즈러브.png",
    },
    {
        pick : "파핑파핑 바나나",
        flavor : "달콤상큼 세 가지 맛과 팝핑캔디의 특별한 경험",
        pic : "ic_img/파핑파핑바나나.png",
    },
    {
        pick : "북극곰 폴라베어",
        flavor : "폴라베어처럼 쿨~한 민트 아이스크림에 크런치가 쏙쏙!",
        pic : "ic_img/북극곰폴라베어.png",
    },
    {
        pick : "디노 젤리",
        flavor : "그린 애플 아이스크림에 알록달록 공룡젤리가 콩콩!",
        pic : "ic_img/디노젤리.png",
    },
    {
        pick : "엄마는 외계인",
        flavor : "밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림",
        pic : "ic_img/엄마는외계인.png",
    },
    {
        pick : "봉쥬르 마카롱",
        flavor : "부드러운 크림치즈 아이스크림과 마카롱, 초콜릿의 달콤함 만남!",
        pic : "ic_img/봉쥬르마카롱.png",
    },
    {
        pick : "아몬드 봉봉",
        flavor : "입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게!",
        pic : "ic_img/아몬드봉봉.png",
    },
    {
        pick : "우유에 빠진 딸기",
        flavor : "설(雪)목장 유기농 우유와 산청딸기의 싱그러운 만남!",
        pic : "ic_img/우유에빠진딸기.png",
    },
    {
        pick : "민트 초콜릿 칩",
        flavor : "상쾌한 민트향에 초코칩까지!",
        pic : "ic_img/민트 초콜릿 칩.png",
    },
    {
        pick : "슈팅스타",
        flavor : "톡톡 터지는 팝핑 캔디와 스프링클 캔디,상큼한 체리 시럽이 들어있는 제품",
        pic : "ic_img/슈팅스타.png",
    },
    {
        pick : "사랑에 빠진 딸기",
        flavor : "크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍 들어있는 아이스크림",
        pic : "ic_img/사랑에 빠진 딸기.png",
    },
    {
        pick : "애플 민트",
        flavor : "상큼한 사과와 시원한 민트향이 기분까지 상쾌하게",
        pic : "ic_img/애플 민트.png",
    },
    {
        pick : "뉴욕 치즈케이크",
        flavor : "부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림",
        pic : "ic_img/뉴욕 치즈케이크.png",
    },
    {
        pick : "피스타치오 아몬드",
        flavor : "피스타치오향과 아몬드가 만나 고소함이 두배!",
        pic : "ic_img/피스타치오 아몬드.png",
    },
    {
        pick : "베리베리 스트로베리",
        flavor : "새콤상큼 딸기 과육이 듬뿍!",
        pic : "ic_img/베리베리 스트로베리.png",
    },
    {
        pick : "바람과 함께 사라지다",
        flavor : "블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각",
        pic : "ic_img/바람과 함께 사라지다.png",
    },
    {
        pick : "자모카 아몬드 훠지",
        flavor : "깊고 풍부한 자모카 아이스크림에 고소한 아몬드와 초콜릿 훠지 시럽이 들어있는 제품",
        pic : "ic_img/자모카 아몬드 훠지.png",
    },
    {
        pick : "이상한 나라의 솜사탕",
        flavor : "부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행",
        pic : "ic_img/이상한 나라의 솜사탕.png",
    },
    {
        pick : "초콜릿",
        flavor : "진하고 부드러운 정통 초콜릿 아이스크림",
        pic : "ic_img/초콜릿.png",
    },
    {
        pick : "31요거트",
        flavor : "유산균이 살아 있는 오리지널 요거트 아이스크림",
        pic : "ic_img/31요거트.png",
    },
    {
        pick : "그린티",
        flavor : "엄선된 녹차를 사용한 싱그러운 그린티 아이스크림",
        pic : "ic_img/그린티.png",
    },
    {
        pick : "체리쥬빌레",
        flavor : "체리과육이 탱글탱글 씹히는 체리 아이스크림",
        pic : "ic_img/체리쥬빌레.png",
    },
    {
        pick : "바닐라",
        flavor : "부드럽고 깔끔한 바닐라 아이스크림",
        pic : "ic_img/바닐라.png",
    },
    {
        pick : "초콜릿 무스",
        flavor : "초콜릿 칩이 들어있는 진한 초콜릿 아이스크림",
        pic : "ic_img/초콜릿 무스.png",
    },
    

]

const pic = document.querySelector("#pick span:first-child")
const pick = document.querySelector("#pick span:nth-child(2)")
const flavor = document.querySelector("#pick span:last-child")
const todayPick = picks[Math.floor(Math.random()*picks.length)]
pick.innerText = `오늘의 아이스크림 : "${todayPick.pick}"`
flavor.innerText = "~ " + todayPick.flavor + " ~";
const insertImg = document.createElement("img");
insertImg.src = todayPick.pic;
pic.append(insertImg);