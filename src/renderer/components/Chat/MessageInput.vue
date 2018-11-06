<template>
	<div>
		<div class="editor" contenteditable v-html="content()" @keyup="setText"></div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    content () {
      return this.text
    },
    setText (evt) {
      if (evt.keyCode === 13) {
        this.$store.dispatch('sendMessage', this.text)
        this.text = evt.target.innerHTML
      }
    }
  }
}
</script>
<style lang="scss" scoped>
	.editor {
		padding: 10px;
		border: 1px solid #424242;
	}
</style>