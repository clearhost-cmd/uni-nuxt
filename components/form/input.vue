<template>
  <div>
    <!--
      Create Label for Input
    -->
    <label :for="id">{{label}}</label>
    <!--
      Scaffold Input
    -->
    <input
      type="text"
      class="bg-gray-100 rounded-md px-5 w-full h-8 mb-5 mt-3"
      :id="id"
      :name="name"
      :value="value"
      @input="emitInput"
    >
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
     * Create Required Type String w/Default & Validator
     */
    type: {
      type: String,
      required: true,
      default: 'text',

      validator: function (value) {
        return ['text', 'password'].indexOf(value) !== -1
      }
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
     * Create Required Name String w/Default
     */
    name: {
      type: String,
      required: true,
      default: 'name',
    },
    /**
     * Create Required Multiple Type
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
