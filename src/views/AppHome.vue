<template>
    <div class="home">
        <div id="hackathonBanner">
            <hackathon-title class="title" />
            <hackathon-timer class="timer" />
        </div>

        <div id="hackathonCalendar">
            <h2>대회 일정</h2>
            <hackathon-calendar-table class="table" />
        </div>

        <div class="menu">
            <span class="title">선린 메뉴판</span>
            <div class="contents">
                <div class="left">
                    <div class="item">
                        <span class="name">코카콜라</span>
                        <span class="price">1,000P</span>
                    </div>
                    <div class="item">
                        <span class="name">몬스터</span>
                        <span class="price">2,000P</span>
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <span class="name">펩시</span>
                        <span class="price">10,000P</span>
                    </div>
                    <div class="item">
                        <span class="name">100P</span>
                        <span class="price">1,000P</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AppHome from "@/scripts/AppHome";
export default AppHome;
</script>

<style lang="scss" scoped>
@import "@/styles/AppHome";
</style>
