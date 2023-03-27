<script lang="ts">
	import {Button} from "$shared/ui";
</script>

<div class="wrapper">
	<div class="content">
		<div>
			<img class='logo' src={'/assets/logo.png'} alt="logo" />
			<h1>EGP 0.00 for 3 months of Premium</h1>
			<p>Enjoy ad-free music listening, offline playback, and more. Cancel anytime</p>
			<div class='buttons'>
				<Button as={'a'} variant={'secondary'} href='https://www.spotify.com/us/signup' target='_blank'>Sign up</Button>
				<Button as={'a'} variant={'primary'} href='/api/auth/login'>Sign in</Button>
			</div>
		</div>
	</div>
	<div class="cover">
		<img src={'/assets/cover.png'} alt='cover pic' />
	</div>
</div>

<style lang="scss">
	:global(body) {
		background-image: linear-gradient(230deg, colors.$sidebar-color, colors.$bg-color);
		min-height: 100vh;
	}
	.wrapper {
		max-width: sizes.$container;
		@include mix.flexCenter();
		margin: 0 auto;
		flex-direction: column;
		gap: 4rem;

		@include breakpoint.min('lg') {
			flex-direction: row;
			gap: 0;
		}
	}
	.content {
		flex: 1.8;
		h1 {
			font-size: functions.toRem(40);
		}
		p {
			font-size: functions.toRem(20);
		}
	}
	.logo {
		width: 170px;
		margin-bottom: 2rem;
	}
	.cover {
		flex: 1;
		& img {
			object-fit: contain;
			max-width: 100%;
			@include breakpoint.min('lg') {
				max-width: 80%;
				margin: 0 auto;
			}
		}
	}
	.buttons {
		display: flex;
		gap: 1rem;
	}
</style>