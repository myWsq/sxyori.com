<template>
	<div>
		<the-hero></the-hero>
		<the-service></the-service>
		<the-home-classroom></the-home-classroom>
		<the-home-teacher></the-home-teacher>
		<the-home-cta></the-home-cta>
	</div>
</template>


<script>
	import TheHero from '../components/TheHomeHero.vue'
	import TheService from '../components/TheHomeService.vue'
	import TheHomeClassroom from '../components/TheHomeClassroom.vue'
	import TheHomeTeacher from '../components/TheHomeTeacher.vue'
	import TheHomeCta from '../components/TheHomeCta.vue'
	export default {
		components: {
			TheHero,
			TheService,
			TheHomeClassroom,
			TheHomeTeacher,
			TheHomeCta
        }
	}
</script>

<style scoped>
</style>
