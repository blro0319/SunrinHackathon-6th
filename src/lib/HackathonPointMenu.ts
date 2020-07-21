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
    "banana"         : new PointItem("멍청한 바나나"       , 24000)
};

const HackathonMenu: { [key: string]: PointItem } = {
    "bluerose"       : new PointItem("파란 장미"           , 20319),
    "monster_rainbow": new PointItem("무지개 몬스터"       , 700),
    "minecraft"      : new PointItem("마인크래프트"        , 30000),
    "coke"           : new PointItem("콜라 (특히 코카콜라)", 300),
    "sunrin"         : new PointItem("선린인터넷고등학교"  , 120),
    "banana"         : new PointItem("멍청한 바나나"       , 24000)
};
export default HackathonMenu;
