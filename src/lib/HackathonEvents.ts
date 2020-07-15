export class Timestamp {
    name: string;
    date: Date;

    constructor(_name: string, _date: Date) {
        this.name = _name;
        this.date = _date;
    }
}

const HackathonEvents: Array<Timestamp> = [
    new Timestamp("신청 마감", new Date("2020-08-02T00:00:00")),
    new Timestamp("대회 시작", new Date("2020-08-07T13:00:00")),
    new Timestamp("대회 종료", new Date("2020-08-08T09:00:00"))
];
export default HackathonEvents;
