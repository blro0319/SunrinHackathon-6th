import { Vue, Component, Prop } from "vue-property-decorator";
import HackathonEvents, { Timestamp } from "@/lib/HackathonEvents";

class Time {
    date: number;
    hour: number;
    minute: number;
    seconds: number;

    constructor (_date: number, _hour: number, _minute: number, _seconds: number) {
        this.date = _date;
        this.hour = _hour;
        this.minute = _minute;
        this.seconds = _seconds;
    }

    toString(): string {
        return `${
            this.date.toString().padStart(2, "0")
        }일 ${
            this.hour.toString().padStart(2, "0")
        }시간 ${
            this.minute.toString().padStart(2, "0")
        }분 ${
            this.seconds.toString().padStart(2, "0")
        }`;
    }
}

@Component
export default class HackathonTimer extends Vue {
    @Prop({
        type: String,
        default: "",
        validator: (value: string): boolean => {
            return Object.keys(HackathonEvents).concat([""]).includes(value);
        }
    }) private eventname!: string;

    public currentEvent!: Timestamp;
    public displayTime: Time = new Time(0, 0, 0, 0);

    created() {
        if (this.eventname == "") {
            this.findTargetEvent();
        } else {
            this.currentEvent = HackathonEvents[this.eventname];
        }
    }
    mounted() {
        setInterval(() => {
            let timer: number = this.currentEvent.date.getTime() - Date.now();
            if (this.eventname == "" && timer <= 0) {
                this.findTargetEvent();
                timer = this.currentEvent.date.getTime() - Date.now();
            }

            this.displayTime = this.milisecToTimeString(timer);
        }, 10);
    }

    findTargetEvent() {
        let eventNames = Object.keys(HackathonEvents);
        for (let i = 0; i < eventNames.length; i++) {
            if (Date.now() < HackathonEvents[eventNames[i]].date.getTime()) {
                this.currentEvent = HackathonEvents[eventNames[i]];
                break;
            }
        }
    }
    milisecToTimeString(val: number): Time {
        val = Math.abs(val);
        let sec  = Math.floor(val / 1000);
        let min  = Math.floor(sec / 60);
        let hou  = Math.floor(min / 60);
        let date = Math.floor(hou / 24);

        let result = new Time(date, hou % 24, min % 60, sec % 60);

        return result;
    }
}
