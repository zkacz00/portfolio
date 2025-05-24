<script lang="ts">
	import '../app.css';
	import { size } from '../app/stores/device';
	import { ScreenSize } from '../app/types/screen';
	import { isDarkMode } from '../app/stores/lightMode';
</script>

<div 
	class={$size === ScreenSize.TABLET ? 'Tablet' : $size === ScreenSize.MOBILE ? 'Mobile' : 'Desktop'}
	class:DarkMode={$isDarkMode}
>
	<slot />
</div>
