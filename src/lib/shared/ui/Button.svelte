<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Element = $$Generic<'a' | 'button'>;

	type BaseProps = {
		as: Element;
		variant: 'primary' | 'secondary' | 'danger';
		className?: string;
	};
	interface B {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}
	type $$Props = B[Element] & BaseProps;
	export let as: Element;
	export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
	export let className: string = '';
</script>

<svelte:element this={as} class="btn btn-{variant} {className}" {...$$restProps}>
	<slot />
</svelte:element>

<style lang="scss">
	.btn {
		display: inline-block;
		border: none;
		font-weight: 600;
		font-size: functions.toRem(16);
		border-radius: 20px;
		cursor: pointer;
		padding: 14px 26px;
		text-decoration: none;
	}
	.btn-primary {
		background-color: colors.$accent-color;
		color: #000;
		border: 2px solid colors.$accent-color;
	}
	.btn-secondary {
		background-color: none;
		color: colors.$text-color;
		border: 2px solid;
	}
	.btn-danger {
		background-color: colors.$error;
		color: #fff;
		border: 2px solid colors.$error;
	}

	.btn:disabled {
		cursor: not-allowed;
		opacity: 0.8;
	}
</style>
