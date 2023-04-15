<script lang="ts">
	import { tippyAction } from './../../actions/tippy';
	import Hr from '$shared/ui/Hr.svelte';
	import { fade, fly } from 'svelte/transition';
	import {} from 'svelte';
	import { clickOutside } from '../../directives/clickOutside';
	import { invalidateAll } from '$app/navigation';

	type $$Props = {
		img: string;
		name: string;
	};
	export let img: string;
	export let name: string;

	let dropdownIsOpen = false;
	let headerOpacity = 0;
	let topBar: HTMLElement;
	let scrollY = 0;
	let top = 0;
	let left = 0;

	$: if (topBar) {
		headerOpacity = scrollY / topBar.offsetHeight < 1 ? scrollY / topBar.offsetHeight : 1;
	}

	const toggleDropDown = (e: PointerEvent) => {
		const boundingRect = e.currentTarget.getBoundingClientRect();
		top = boundingRect.top + boundingRect.height + 12;
		left = boundingRect.left - 192 / 2 + 16;
		dropdownIsOpen = !dropdownIsOpen;
	};
	const keypressHandler = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			const boundingRect = e.currentTarget.getBoundingClientRect();
			top = boundingRect.top + boundingRect.height + 12;
			left = boundingRect.left - 192 / 2 + 16;
			dropdownIsOpen = !dropdownIsOpen;
		}
	};
</script>

<svelte:window bind:scrollY />

<div id="top-bar" bind:this={topBar}>
	<div class="bg" style:background-color={'#000'} style:opacity={headerOpacity} />
	<header class="header">
		<div class="header__buttons">
			<button
				data-testid="top-bar-back-button"
				aria-label="Назад"
				aria-expanded="false"
				use:tippyAction={{ content: 'Back', delay: 50 }}
				><svg
					role="img"
					height="16"
					width="16"
					aria-hidden="true"
					class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
					viewBox="0 0 16 16"
					data-encore-id="icon"
					fill="currentColor"
					><path
						d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
					/></svg
				></button
			><button
				data-testid="top-bar-forward-button"
				aria-label="Вперед"
				aria-expanded="false"
				use:tippyAction={{ content: 'Forward', delay: 50 }}
				><svg
					role="img"
					height="16"
					width="16"
					aria-hidden="true"
					class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
					viewBox="0 0 16 16"
					data-encore-id="icon"
					fill="currentColor"
					><path
						d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
					/></svg
				></button
			>
		</div>

		<div class="header__search_wrapper" />
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			use:tippyAction={{ content: name }}
			class="header__profile"
			tabindex="0"
			on:click={toggleDropDown}
			on:keypress|preventDefault={keypressHandler}
		>
			<img
				style="width: 28px; height: 28px;"
				class="header__profile_photo"
				src={img}
				alt={`${name} user profile pic`}
			/>
			<div class="header__profile-name">{name}</div>
			<svg
				role="img"
				height="16"
				class="header__profile-svg"
				width="16"
				aria-hidden="true"
				viewBox="0 0 16 16"
				fill="currentColor"
				data-encore-id="icon"><path d="m14 6-6 6-6-6h12z" /></svg
			>
		</div>
	</header>
</div>

{#if dropdownIsOpen}
	<div
		use:clickOutside
		on:click_outside={() => {
			dropdownIsOpen = false;
		}}
		transition:fly|fade={{ duration: 300, y: -10 }}
		style="top: {top}px; left: {left}px;"
		class="dropdown-menu"
	>
		<ul>
			<li>
				<a href="/account">Account</a>
			</li>
			<li>
				<a href="/profile">Profile</a>
			</li>
			<li>
				<a href="/settings">Settings</a>
			</li>
			<Hr />
			<li>
				<a
					on:click={async (e) => {
						e.preventDefault();
						await fetch('/api/auth/logout');
						await invalidateAll();
					}}
					href="/api/auth/logout">Logout</a
				>
			</li>
		</ul>
	</div>
{/if}

<style lang="scss">
	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
	}
	#top-bar {
		width: calc(100% - sizes.$sidebar-width);
		position: fixed;
		height: 6.4rem;
		// background-color: red;
	}
	.header {
		display: flex;
		padding: 16px 32px;
		&__search_wrapper {
			flex: 1;
		}
		&__buttons {
			display: flex;
			gap: 16px;
			button {
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				background-color: rgba(0, 0, 0, 0.7);
				border: none;
				border-radius: 50%;
				color: #fff;
				cursor: pointer;
				display: -webkit-inline-box;
				display: -ms-inline-flexbox;
				display: inline-flex;
				height: 32px;
				justify-content: center;
				position: relative;
				width: 32px;
			}
		}
		&__profile {
			display: flex;
			font-size: functions.toRem(14);
			font-weight: 700;
			align-items: center;
			gap: 8px;
			user-select: none;
			cursor: pointer;
			border-radius: 23px;
			background-color: rgba(0, 0, 0, 0.7);
			padding: 2px;
			&:hover {
				background-color: rgba(41, 41, 41, 0.7);
			}
		}
		&__profile-svg {
			margin-right: 8px;
		}
		&__profile_photo {
			border-radius: 50%;
		}
	}
	.dropdown-menu {
		display: flex;
		position: fixed;
		min-width: 196px;

		padding: 4px;
		background-color: #282828;
		ul {
			display: flex;
			flex-direction: column;
			padding: 0;
			margin: 0;
			list-style: none;
			width: 100%;
			li {
				width: 100%;
			}
			li a {
				color: colors.$text-color;
				text-decoration: none;
				font-family: inherit;
				font-weight: 500;
				font-size: functions.toRem(14);
				display: flex;
				width: 100%;
				padding: 12px;
				user-select: none;
				&:hover {
					background-color: #575757;
				}
			}
		}
	}
</style>
