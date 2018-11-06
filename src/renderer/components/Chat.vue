<template>
	<div>
		<messages-log></messages-log>
		<message-input></message-input>
	</div>
</template>
<script>
import MessageInput from './Chat/MessageInput'
import MessagesLog from './Chat/MessagesLog'
export default {
  components: {
    MessageInput,
    MessagesLog
  }
}
</script>