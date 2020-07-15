<template>
    <div class="hackathon-timer">
        <span class="title">{{ currentEvent.name }}</span>
        <div class="timer">
            <div class="days digits">
                <span class="value">
                    {{ displayTime.date.toString().padStart(2, "0") }}
                </span>
                <span class="name">일</span>
            </div>
            <hr class="division">
            <div class="hours digits">
                <span class="value">
                    {{ displayTime.hour.toString().padStart(2, "0") }}
                </span>
                <span class="name">시간</span>
            </div>
            <hr class="division">
            <div class="minutes digits">
                <span class="value">
                    {{ displayTime.minute.toString().padStart(2, "0") }}
                </span>
                <span class="name">분</span>
            </div>
            <hr class="division">
            <div class="seconds digits">
                <span class="value">
                    {{ displayTime.seconds.toString().padStart(2, "0") }}
                </span>
                <span class="name">초</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HackathonTimer from "@/scripts/components/HackathonTimer";
export default HackathonTimer;
</script>

<style lang="scss" scoped>
@import "@/styles/components/HackathonTimer";
</style>
