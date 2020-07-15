import { Vue, Component } from "vue-property-decorator";
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
    currentEvent = { } as Timestamp;
    interval = { } as number;
    displayTime: Time = new Time(0, 0, 0, 0);

    created() {
        for (let i = 0; i < HackathonEvents.length; i++) {
            if (Date.now() < HackathonEvents[i].date.getTime()) {
                this.currentEvent = HackathonEvents[i];
                break;
            }
        }
    }
    mounted() {
        this.interval = setInterval(() => {
            let timer = this.currentEvent.date.getTime() - Date.now();
            this.displayTime = this.milisecToTimeString(timer);
        });
    }

    milisecToTimeString(value: number): Time {
        let sec = Math.floor(value / 1000);
        let min = Math.floor(sec / 60);
        let hou = Math.floor(min / 60);
        let date = Math.floor(hou / 24);

        let result = new Time(date, hou % 24, min % 60, sec % 60);

        return result;
    } 
}
