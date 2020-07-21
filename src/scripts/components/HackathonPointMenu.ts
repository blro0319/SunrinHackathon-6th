import { Vue, Component, Prop } from "vue-property-decorator";
import HackathonMenu, { PointItem, HackathonMenuDummy } from '@/lib/HackathonPointMenu';

@Component
export default class HackathonPointMenu extends Vue {
    @Prop({
        type: Boolean,
        default: false
    }) private isdummy!: boolean;

    menu!: { [key: string]: PointItem };
    menuKeys!: Array<string>;

    created() {
        if (!this.isdummy) {
            this.menu = HackathonMenu;
        } else {
            this.menu = HackathonMenuDummy;
        }
        this.menuKeys = Object.keys(this.menu);
    }

    getMenuItem(name: string): PointItem {
        if (!this.menuKeys.includes(name)) {
            console.log(`${name} are not on menu list`);
            return new PointItem("", 0);
        }
        return this.menu[name];
    }

    numberFormat(num: number) {
        if (num.toString() == "Infinity") {
            return "∞";
        }
        return num.toString().replace(/\d(?=(\d{3})+$)/g, "$&,");
    }
}
