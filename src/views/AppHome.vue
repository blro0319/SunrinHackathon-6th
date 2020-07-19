<template>
    <div class="home">
        <div id="hackathonBanner">
            <hackathon-title class="title" />
            <hackathon-timer class="timer" />
        </div>

        <div id="hackathonNotice">
            <h2>유의사항</h2>
            <h3>온라인 진행</h3>
            <div class="use-discord">
                <img
                    src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
                    class="discord-brand"
                >
                <p class="desc">
                    COVID-19의 유행으로 부득이하게 온라인으로 진행하게 되었습니다.<br>
                    그에 따라 대회도 Discord 앱을 통해 진행됩니다!<br>
                    신청자 분들은 미리 Discord 아이디를 만들어 준비하세요 :)
                </p>
            </div>
        </div>

        <div id="hackathonCalendar">
            <h2>대회 일정</h2>
            <hackathon-calendar-table v-if="showCalendar" class="table" />
            <div v-else class="hidden">
                <div class="info">
                    <span class="desc">참가자 OT 때 공개됩니다</span>
                </div>
                <hackathon-calendar-table isdummy class="table" />
            </div>
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
