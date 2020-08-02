import { Vue, Component } from "vue-property-decorator";
import HackathonEvents from '@/lib/HackathonEvents';
import HackathonTeams from "@/lib/HackathonTeams";
// Components //
import HackathonTimer from "@/components/HackathonTimer.vue";
import HackathonCalendarTable from "@/components/HackathonCalendarTable.vue";
import HackathonTitle from "@/components/HackathonTitle.vue";
import HackathonPointMenu from "@/components/HackathonPointMenu.vue";

@Component({
    components: {
        "hackathon-title": HackathonTitle,
        "hackathon-timer": HackathonTimer,
        "hackathon-calendar-table": HackathonCalendarTable,
        "hackathon-point-menu": HackathonPointMenu
    }
})
export default class AppHome extends Vue {
	showApply: boolean = false;
	endApply: boolean = false;
	showCalendar: boolean = false;
	showPointMenu: boolean = false;
	showTeams: boolean = false;

	passedTeams: { "life": string[], "game": string[] } = HackathonTeams;

	timeGap: number = 0;

	created() {
		let current: Date;
		this.getJson("http://worldtimeapi.org/api/timezone/Asia/Seoul", (status, response) => {
			if (status === null) {
				current = new Date(response.datetime);
				this.timeGap = Date.now() - current.getTime();
			} else return;
		});

		setInterval(() => {
			let now: number = Date.now() - this.timeGap;
			this.showApply = now >= HackathonEvents["apply-start"].date.getTime();
			this.endApply = now >= HackathonEvents["apply-end"].date.getTime();
			this.showCalendar = now >= HackathonEvents["orientation"].date.getTime();
			this.showPointMenu = now >= HackathonEvents["hackathon-start"].date.getTime();
			this.showTeams = now >= HackathonEvents["open-teams"].date.getTime();
		}, 10);
	}

	getJson(url: string, callback: (status: number | null, response: any) => void) {
		let httpRequest = new XMLHttpRequest();
		httpRequest.open("GET", url, true);
		httpRequest.responseType = 'json';
		httpRequest.onload = function() {
			let status = httpRequest.status;
			if (status === 200) {
				callback(null, httpRequest.response);
			} else {
				callback(status, httpRequest.response);
			}
		};
		httpRequest.send();
	}
}
