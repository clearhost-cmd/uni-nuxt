<template>
  <div>
    <!--
      Create For each reply in replies state
    -->
    <div v-for="reply in $store.state.post_replies" :key="reply.id">
      <item-base :title="reply.title" :body="reply.body" :created="reply.created">
        <item-crud uri="/replies" operation="edit" :id="reply.id" action="edit reply" />
        <item-crud uri="/replies" operation="delete" :id="reply.id" action="delete reply" />
      </item-base>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
    
  props: {
    /**
     * Create Required Post Object
     */
    post: {
      type: Object,
      required: true
    },
    /**
     * Create Required Replies Object
     */
    replies: {
      type: Object,
      required: true
    },
  }
}
</script>
