export class DateEvent {
	time: string;
	name: string;
	desc: string;

	constructor (_time: string, _name: string, _desc: string) {
		this.time = _time;
		this.name = _name;
		this.desc = _desc;
	}
}
export class DateCalendar {
	title: string;
	events: Array<DateEvent>;

	constructor (_title: string, _events: Array<DateEvent>) {
		this.title = _title;
		this.events = _events;
	}
}

export const HackathonCalendarDummy: { [key: string]: DateCalendar } = {
	"day1":  new DateCalendar("모험의 시간", [
		new DateEvent("13:00", "대회 시작", "해커톤을 시작~합니다!"),
		new DateEvent("14:00", "나랑 같이 콜라 마시기", "콜라는 맛있어요 :D"),
		new DateEvent("16:00", "개발과 디자인은 맛있다", "굉장히 철학적인 말이에요"),
		new DateEvent("20:00", "우리 함께 춤 춰요", "돼지와 함께 춤을 1등!"),
		new DateEvent("23:59", "이걸로 끝이야?", "엔드 관문에 진입하세요")
	]),
	"day2":  new DateCalendar("마지막 여정", [
		new DateEvent("01:00", "피자와 콜라 먹기 그리고 파이어볼", "피자도 맛있지요"),
		new DateEvent("03:00", "콜라에 취하기", "취한다..!"),
		new DateEvent("08:00", "펭귄 어때요?", "글쎄..펭귄은 과학적으로 귀여워요!"),
		new DateEvent("10:00", "늦기 전에 막판 스퍼트", "10대가 얼마 안 남았어!"),
		new DateEvent("12:00", "나는 해커톤..만물의 종결자", "내가 바로 마지막이다!")
	])
};

const HackathonCalendar: { [key: string]: DateCalendar } = {
    "day1":  new DateCalendar("DAY 1", [
        new DateEvent("14:00", "대회 시작", "주제 발표"),
        new DateEvent("15:00", "생존신고 1", "아직은 여유"),
        new DateEvent("17:00", "롤챔스 AF vs DYN", "인생역전 배팅 게임"),
        new DateEvent("18:00", "생존신고 2", "앉아서 동전먹기"),
		new DateEvent("20:00", "롤챔스 KT vs HLE", "두번째 기회"),
		new DateEvent("21:00", "생존신고 3", "신난닭! 오늘 저녁은 치킨이닭!"),
		new DateEvent("23:00", "HaxBall 대회", "⚽⚽⚽")
    ]),
    "day2":  new DateCalendar("마지막 여정", [
		new DateEvent("00:00", "생존신고 4", "그러던 어느날"),
		new DateEvent("03:00", "생존신고 5", "개발 시작"),
		new DateEvent("06:00", "생존신고 6", "마감 직전"),
		new DateEvent("07:00", "모닝콜", "불시 검사"),
		new DateEvent("08:00", "제출 시작", "누구보다 빠르게"),
		new DateEvent("09:00", "생존신고 7", "마지막"),
		new DateEvent("10:00", "제출 마감", "수고하셨습니다!")
    ])
};
export default HackathonCalendar;
