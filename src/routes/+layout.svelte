<script lang="ts">
	import Nprogress from 'nprogress';
	import 'nprogress/nprogress.css';
	import SideBar from './../lib/components/SideBar.svelte';
	import type { LayoutData } from './$types';
	import 'modern-normalize/modern-normalize.css';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	
	import '../styles/main.scss';
	
	export let data: LayoutData;
	console.log(data);
	
	Nprogress.configure({
		showSpinner: false,
	})
	
	beforeNavigate(() => {
		Nprogress.start()
	})
	afterNavigate(() => {
		Nprogress.done()
	})
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: 'CircularStd';
			font-style: normal;
			font-weight: 500;
			src: url('/Circular/CircularStd-Medium.otf') format('opentype');
		}

		@font-face {
			font-family: 'CircularStd';
			font-style: normal;
			font-weight: 700;
			src: url('/Circular/CircularStd-Bold.otf') format('opentype');
		}

		@font-face {
			font-family: 'CircularStd';
			font-style: normal;
			font-weight: 900;
			src: url('/Circular/CircularStd-Black.otf') format('opentype');
		}
	</style>
	<title>{$page.data.title || 'Home page'}</title>
</svelte:head>

<div class="main">
	{#if data.user}
		<SideBar />
	{/if}
	<div id="content">
		{#if data.user}
			<Header img={data.user.images[0].url} name={data.user.display_name} />
		{/if}
		<main id="main-content">
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		#content {
			flex: 1;
			#main-content {
				padding: functions.toRem(64) functions.toRem(30);
			}
		}
	}
</style>
