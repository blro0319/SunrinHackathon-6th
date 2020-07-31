<template>
	<main id="appHome">
		<!-- Title banner -->
		<section id="hackathonBanner">
			<hackathon-title class="title" />
			<hackathon-timer class="timer" />
		</section>

		<!-- Main contents -->
		<!-- Intro -->
		<article id="hackathonNotice">
			<h2>대회 안내</h2>
			<!-- Summary -->
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
			<!-- Online notice -->
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
						rel="noopener"
						class="discord-brand"
					>
						<img
							src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
							alt="Discord 로고"
							class="blue"
						>
						<img
							src="@/assets/images/Discord-Logo-White.svg"
							alt="Discord 로고 그림자"
							class="white"
						>
						<span class="info">Discord 홈페이지 바로가기</span>
					</a>
				</div>
			</section>
			<hr>
			<!-- Discord bot -->
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
						그리고 선린냥의 프로필은 투표로 결정됩니다.<br>
						신청할 때 가장 귀여운 사진에 투표해주세요 :3
					</p>
				</div>
			</section>
			<hr>
			<!-- Apply link -->
			<section class="apply">
				<h3>신청하기</h3>
				<div class="contents">
					<p class="desc">
						신청을 하기 위해서는 구글 계정이 필요합니다!<br>
						또한 응답 횟수는 한번으로 제한됩니다.<br>
						잘못 입력한 경우 아래 문의처로 연락해주세요 :D
					</p>
				</div>
				<a
					v-if="showApply"
					href="https://forms.gle/CUeHXn1NyWutVvJG8"
					target="_blank"
					class="link-apply"
				>신청하기</a>
				<span v-else class="link-apply disable">신청 대기</span>
			</section>
			<hr>
			<section class="sponsor">
				<h3>도움</h3>
				<div class="contents">
					<div class="brand">
						<img
							src="@/assets/images/whiteblock_logo.png"
							alt="Whiteblock 로고"
							class="logo"
						>
						<img
							src="@/assets/images/whiteblock_title.png"
							alt="Whiteblock"
							class="title"
						>
					</div>
					<div class="desc">
						<p class="text">
							이 대회는 스마트 오더 서비스, 테이킷을 서비스 중인<br>
							화이트블록의 후원으로 운영됩니다
						</p>
						<a
							href="http://www.nowtakeit.com/"
							target="_blank"
							class="link"
						>
							<span class="name">테이킷</span>
							<i class="material-icons icon">launch</i>
						</a>
					</div>
				</div>
			</section>
			<hr>
			<!-- Help list -->
			<section class="help">
				<h3>문의</h3>
				<div class="contents">
					<p class="desc">
						담당자 전화번호: <a href="tel:010-4626-3105">010-4626-3105</a>
					</p>
					<a
						href="https://fb.me/sunrinhackathon"
						target="_blank"
						rel="noopener"
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
		<hr>
		<!-- Schedule -->
		<article id="hackathonCalendar">
			<h2>대회 일정</h2>
			<!-- Show -->
			<hackathon-calendar-table v-if="showCalendar" class="table" />
			<!-- Hidden -->
			<section v-else class="hidden">
				<div class="info">
					<span class="desc">참가자 OT 때 공개됩니다</span>
				</div>
				<hackathon-calendar-table isdummy class="table" />
			</section>
		</article>
		<hr>
		<!-- Point shop -->
		<article id="hackathonPointMenu">
			<h2>포인트 교환소</h2>
			<!-- Show -->
			<hackathon-point-menu v-if="showPointMenu" class="menu" />
			<!-- Hidden -->
			<section v-else class="hidden">
				<div class="info">
					<span class="desc">대회 당일 공개됩니다</span>
				</div>
				<hackathon-point-menu isdummy class="menu" />
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
