export class Timestamp {
	name: string;
	date: Date;

	constructor(_name: string, _date: Date) {
		this.name = _name;
		this.date = _date;
	}
}

const HackathonEvents: { [key: string]: Timestamp } = {
	"apply-start"    : new Timestamp("신청 시작"   , new Date("2020-07-26T18:00:00")),
	"apply-end"      : new Timestamp("신청 마감"   , new Date("2020-08-02T00:00:00")),
	"open-teams"     : new Timestamp("참가 팀 발표", new Date("2020-08-02T18:00:00")),
	"orientation"    : new Timestamp("참가자 OT"   , new Date("2020-08-05T14:30:00")),
	"hackathon-start": new Timestamp("대회 시작"   , new Date("2020-08-07T14:00:00")),
	"hackathon-end"  : new Timestamp("대회 종료"   , new Date("2020-08-08T10:00:00"))
};
export default HackathonEvents;
