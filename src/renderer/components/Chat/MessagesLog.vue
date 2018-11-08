<template>
	<div class="message-log">
		<div class="message-log-container">
			<div  v-for="message in $store.state.Message.messages" v-html="message.content"></div>
		</div>
	</div>
</template>

<script>
const { ipcRenderer } = require('electron')
export default {
  created () {
    ipcRenderer.on('message-received', (event, message) => {
      this.$store.dispatch('recieveMessage', message)
    })
  }
}
</script>

<style lang="scss" scoped>
	.message-log {
		border: 1px solid #424242;
		
		border-radius: 4px 4px 0 0;
		.message-log-container {
			height: 480px;
			overflow-y: scroll;
			margin: 10px;
		}
	}
</style>