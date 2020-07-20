<template>
    <main id="appHome">
        <section id="hackathonBanner">
            <hackathon-title class="title" />
            <hackathon-timer class="timer" />
        </section>

        <article id="hackathonNotice">
            <h2>대회 안내</h2>
            <section class="summary">
                <h3>해커톤이란?</h3>
                <div class="contents">
                    <p class="desc">
                        선린 해커톤은 제한 시간 안에 소프트웨어를 개발하는 대회입니다.<br>
                        정해진 주제에 맞춰 하루만에 게임이나 앱을 완성해보세요!
                    </p>
                </div>
            </section>
            <hr>
            <section class="use-discord">
                <h3>온라인 진행</h3>
                <div class="contents">
                    <p class="desc">
                        COVID-19로 인해 대회를 온라인으로 진행하게 되었습니다.<br>
                        대회 진행 및 운영은 Discord 앱에서 이뤄집니다!<br>
                        신청자 분들은 미리 Discord 아이디를 만들어 준비하세요 :)
                    </p>
                    <a
                        href="https://discord.com/new"
                        target="_blank"
                        class="discord-brand"
                    >
                        <img
                            src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
                            class="blue"
                        >
                        <img
                            src="@/assets/images/Discord-Logo-White.svg"
                            class="white"
                        >
                        <span class="info">Discord 홈페이지 바로가기</span>
                    </a>
                </div>
            </section>
            <hr>
            <section class="sunrinnyang-bot">
                <h3>선린냥 봇</h3>
                <div class="contents">
                    <div class="sunrinnyang-photos">
                        <img src="@/assets/images/sunrinnyang_0.png" alt="구르밍하는 선린냥이">
                        <img src="@/assets/images/sunrinnyang_1.png" alt="졸고 있는 선린냥이">
                        <img src="@/assets/images/sunrinnyang_2.png" alt="않아있는 선린냥이">
                        <img src="@/assets/images/sunrinnyang_3.png" alt="간식 먹는 선린냥이">
                    </div>
                    <p class="desc">
                        해커톤 Discord 서버를 관리해 줄 선린냥 봇을 소개합니다!<br>
                        여러 정보를 보여주고 미니 게임을 관리해주는 친구입니다.<br>
                        <br>
                        그리고 선린냥이의 프로필은 투표로 결정됩니다.<br>
                        신청할 때 가장 귀여운 프로필을 투표해주세요 :3
                    </p>
                </div>
            </section>
            <hr>
            <section class="apply">
                <h3>신청하기</h3>
                <div class="contents">
                    <p class="desc">
                        신청을 하기 위해서는 구글 계정이 필요합니다!<br>
                        또한 응답 횟수는 1번으로 제한됩니다.<br>
                        잘못 입력한 경우 아래 문의처로 연락해주세요 :D
                    </p>
                </div>
                <a href="" target="_blank" class="link-apply">신청하기</a>
            </section>
            <hr>
            <section class="help">
                <h3>도움</h3>
                <div class="contents">
                    <p class="desc">
                        담당자 전화번호: 010-4626-3105
                    </p>
                    <a
                        href="https://www.facebook.com/sunrinhackathon"
                        target="_blank"
                        class="facebook"
                    >
                        <img
                            src="@/assets/images/facebook_logo.svg"
                            alt="페이스북"
                            class="logo"
                        >
                        <span class="tag">@sunrinhackathon</span>
                    </a>
                </div>
            </section>
        </article>

        <article id="hackathonCalendar">
            <h2>대회 일정</h2>
            <hackathon-calendar-table v-if="showCalendar" class="table" />
            <section v-else class="hidden">
                <div class="info">
                    <span class="desc">참가자 OT 때 공개됩니다</span>
                </div>
                <hackathon-calendar-table isdummy class="table" />
            </section>
        </article>

        <article class="menu">
            <h2>포인트 교환소</h2>
            <section class="contents">
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
            </section>
        </article>
    </main>
</template>

<script lang="ts">
import AppHome from "@/scripts/AppHome";
export default AppHome;
</script>

<style lang="scss" scoped>
@import "@/styles/AppHome";
</style>
