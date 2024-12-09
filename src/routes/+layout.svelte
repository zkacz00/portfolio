<script lang="ts">
	import '../app.css';
	import { size } from '../app/stores/device';
	import { ScreenSize } from '../app/types/screen';
</script>

<div class={$size === ScreenSize.TABLET ? 'Tablet' : $size === ScreenSize.MOBILE ? 'Mobile' : 'Desktop'}>
	<slot />
</div>

<style>
	.App {
		width: 100%;
	}
</style>
