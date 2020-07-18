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

const HackathonCalendar: { [key: string]: DateCalendar } = {
    "day1":  new DateCalendar("Day 1", [
        new DateEvent("13:00", "대회 시작", "해커톤을 시작~합니다!"),
        new DateEvent("14:00", "나랑 같이 콜라 마시기", "콜라는 맛있어요 :D")
    ]),
    "day2":  new DateCalendar("Day 2", [
        new DateEvent("01:00", "피자와 콜라 먹기 그리고 파이어볼", "피자도 맛있지요"),
        new DateEvent("03:00", "콜라에 취하기", "취한다..!")
    ])
};
export default HackathonCalendar;
