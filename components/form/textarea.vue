<template>
  <div>
    <!--
      Create Label for Textarea
    -->
    <label :for="id">{{label}}</label>
    <!--
      Scaffold Textarea
    -->
    <textarea
      class="bg-gray-100 rounded-md w-full h-28 p-5 mb-5 mt-3"
      :id="id"
      :value="value"
      @input="emitInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Create Required Label String w/Default
     */
    label: {
      type: String,
      required: true,
      default: 'label',
    },
    /**
     * Create Required ID String w/Default
     */
    id: {
      type: String,
      required: true,
      default: 'id',
    },
    /**
     * Create Static Value String
     */
    value: {
      type: [String, Number],
      required: false,
    }
  },
  methods: {
    /**
     * Run Emit to Return Input Target Value
     */
    emitInput(event) {
      this.$emit("input", event.target.value);
    }
  }
}
</script>
