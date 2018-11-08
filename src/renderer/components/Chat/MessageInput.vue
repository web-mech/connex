<template>
	<div>
		<div class="editor" contenteditable @keyup="setText"></div>
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
    setText (evt) {
      if (evt.keyCode === 13) {
        this.$store.dispatch('sendMessage', this.text)
        this.text = ''
        evt.target.innerHTML = ''
      } else {
        this.text = evt.target.innerHTML
      }
    }
  }
}
</script>
<style lang="scss" scoped>
	.editor {
		padding: 10px;
    margin-top: 5px;
		border: 1px solid #999;
	}
</style>