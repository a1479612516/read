<template>
	<div class="search">
		<router-link to="/sh" exact>
			<input type="text" />
		</router-link>
		
		
	</div>
</template>

<script>
</script>

<style lang="less">
	@r:25rem;
	.search{
		
		padding: 10/@r;
	}
	.search input{
		width: 100%;
		height: 30/@r;
	}
</style>