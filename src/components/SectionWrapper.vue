<template lang="pug">
.p-12.flex.flex-row.justify-center
	div(:class='$attrs.class ? $attrs.class : "max-w-7xl"')
		slot
</template>

<script>
export default {
	name: 'SectionWrapper',
};
</script>
