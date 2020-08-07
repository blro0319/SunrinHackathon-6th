export class PointItem {
	readonly name: string;
	readonly price: number;

	constructor(_name: string, _price: number) {
		this.name = _name;
		this.price = _price;
	}
}

export const HackathonMenuDummy: { [key: string]: PointItem } = {
	"bluerose"       : new PointItem("파란 장미"           , 20319),
	"monster_rainbow": new PointItem("무지개 몬스터"       , 700),
	"minecraft"      : new PointItem("마인크래프트"        , 30000),
	"coke"           : new PointItem("콜라 (특히 코카콜라)", 300),
	"sunrin"         : new PointItem("선린인터넷고등학교"  , 120),
	"banana"         : new PointItem("멍청한 바나나"       , 24000),
	"cat"            : new PointItem("고양이"              , Infinity),
	"dr.strange"     : new PointItem("닥터 스트레인지"     , 14000605),
	"mario"          : new PointItem("슈퍼 마리오"         , 1985),
	"leader"         : new PointItem("안민혁"              , 1)
};
const HackathonMenu: { [key: string]: PointItem } = {
	"hot6": new PointItem("핫식스 (250ml)", 100),
	"bananamilk": new PointItem("바나나맛우유", 200),
	"jin-ramen": new PointItem("진라면", 200),
	"cider": new PointItem("칠성사이다", 300),
	"coke": new PointItem("코카콜라", 300),
	"americano": new PointItem("아카페라UP아메리카노", 300),
	"pocari": new PointItem("포카리스웨트 1.5L", 700),
	"icecream": new PointItem("BR 싱글레귤러", 1000),
	"crispy": new PointItem("크리스피 크림 도넛", 2000)
};
export default HackathonMenu;
