<script lang="ts">
	import { page } from '$app/stores';
	import Hr from '$shared/ui/Hr.svelte';
	import { Search } from 'lucide-svelte';
</script>

<nav id="sidebar">
	<div class="inner">
		<ul>
			<li>
				<a href="/">
					<svg viewBox="0 0 1134 340" class="spoti-logo"
						><title>Spotify</title><path
							fill="currentColor"
							d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="/" class="menu-item" class:active={$page.url.pathname === '/'}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 29 31"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 29H10.5794V20.6729H14.743H18.6542V29H27.2336V12.7899L14.6168 2L2 12.7899V29Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2 29H10.5794V20.6729H14.743H18.6542V29H27.2336V12.7899L14.6168 2L2 12.7899V29Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span>Home</span>
				</a>
			</li>
			<li>
				<a href="/browse" class="menu-item" class:active={$page.url.pathname === '/browse'}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 31 30"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 4.5C10.6022 4.5 10.2206 4.65804 9.93934 4.93934C9.65804 5.22064 9.5 5.60218 9.5 6C9.5 6.39782 9.65804 6.77936 9.93934 7.06066C10.2206 7.34196 10.6022 7.5 11 7.5H20C20.3978 7.5 20.7794 7.34196 21.0607 7.06066C21.342 6.77936 21.5 6.39782 21.5 6C21.5 5.60218 21.342 5.22064 21.0607 4.93934C20.7794 4.65804 20.3978 4.5 20 4.5H11ZM6.5 10.5C6.5 10.1022 6.65804 9.72064 6.93934 9.43934C7.22064 9.15804 7.60218 9 8 9H23C23.3978 9 23.7794 9.15804 24.0607 9.43934C24.342 9.72064 24.5 10.1022 24.5 10.5C24.5 10.8978 24.342 11.2794 24.0607 11.5607C23.7794 11.842 23.3978 12 23 12H8C7.60218 12 7.22064 11.842 6.93934 11.5607C6.65804 11.2794 6.5 10.8978 6.5 10.5ZM3.5 16.5C3.5 15.7044 3.81607 14.9413 4.37868 14.3787C4.94129 13.8161 5.70435 13.5 6.5 13.5H24.5C25.2956 13.5 26.0587 13.8161 26.6213 14.3787C27.1839 14.9413 27.5 15.7044 27.5 16.5V22.5C27.5 23.2956 27.1839 24.0587 26.6213 24.6213C26.0587 25.1839 25.2956 25.5 24.5 25.5H6.5C5.70435 25.5 4.94129 25.1839 4.37868 24.6213C3.81607 24.0587 3.5 23.2956 3.5 22.5V16.5Z"
						/>
					</svg>

					<span>Collections</span>
				</a>
			</li>
			<li>
				<a href="/search" class="menu-item" class:active={$page.url.pathname === '/search'}>
					<Search width={24} height={24} stroke-width={2} stroke={'currentColor'} />
					<span>Search</span>
				</a>
			</li>
		</ul>

		<ul style="margin-top: 2.4rem;">
			<li style="margin-bottom: 0px;">
				<a
					style="padding: 0.8rem 0;"
					href="/likes"
					class="menu-item"
					class:active={$page.url.pathname === '/likes'}
				>
					<div class="plus">
						<svg
							role="img"
							height="12"
							width="12"
							aria-hidden="true"
							viewBox="0 0 16 16"
							data-encore-id="icon"
							class="Svg-sc-ytk21e-0 uPxdw"
							fill="black"
						>
							<path
								d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
							/>
						</svg>
					</div>
					<span>Create Playlist</span>
				</a>
			</li>

			<li>
				<a
					style="padding: 0.8rem 0;"
					href="/likes"
					class="menu-item"
					class:active={$page.url.pathname === '/likes'}
				>
					<div class="w">
						<div class="inn">
							<svg
								role="img"
								height="12"
								width="12"
								aria-hidden="true"
								viewBox="0 0 16 16"
								data-encore-id="icon"
								class="Svg-sc-ytk21e-0 uPxdw"
								fill="currentColor"
								><path
									d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"
								/></svg
							>
						</div>
					</div>
					<span>Favourites</span>
				</a>
			</li>
		</ul>

		<Hr />
	</div>
</nav>

<style lang="scss">
	.spoti-logo {
		height: 40px;
		max-width: 131px;
		width: 100%;
	}
	.inn {
		background: linear-gradient(135deg, #450af5, #c4efd9);
		border-radius: 2px;
		height: 100%;
		position: absolute;
		width: 100%;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: center;
	}
	.w {
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-ms-flex-negative: 0;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-shrink: 0;
		height: 24px;
		justify-content: center;
		padding: 4px;
		position: relative;
		width: 24px;
	}
	.plus {
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-ms-flex-negative: 0;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-shrink: 0;
		height: 24px;
		justify-content: center;
		padding: 4px;
		position: relative;
		width: 24px;
		border-radius: 4px;
		background-color: currentColor;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			padding: 0;
			margin: 0;
		}
		li:nth-child(1) {
			margin-bottom: 1.8rem;
		}
		li:not(:nth-child(1)) a {
			padding: 0.8rem 0;
		}
	}
	.active {
		color: colors.$accent-color !important;
	}
	#sidebar {
		width: sizes.$sidebar-width;
		min-height: 100vh;
		background-color: colors.$sidebar-color;
		padding: 24px;
	}
	.logo {
		width: 140px;
	}
	.inner {
		width: calc(sizes.$sidebar-width - 48px);
		position: fixed;
	}
	.menu-item {
		font-size: functions.toRem(14);
		color: colors.$darken-text;
		text-decoration: none;
		display: flex;
		gap: 1.8rem;
		align-items: flex-end;
		font-weight: 600;
		transition: color 0.4s ease;
		&:hover {
			color: colors.$text-color;
		}
	}
</style>
