<template>
	<div>
		<div v-for="message in $store.state.Message.messages" v-html="message.content"></div>
	</div>
</template>

<script>
const { ipcRenderer } = require('electron')
export default {
  created () {
    let foo = {
      bar: 'baz'
    }
    this.$store.dispatch('recieveMessage', foo)
    ipcRenderer.on('message-received', (event, message) => {
      console.log(this.$store)
      this.$store.dispatch('recieveMessage', message)
    })
  }
}
</script>