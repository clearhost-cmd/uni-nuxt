<template>
  <div>
    <!--
      Create Label for Input
    -->
    <label :for="id">{{label}}</label>
    <!--
      Scaffold Input
    -->
    <select
      class="bg-gray-100 rounded-md px-5 w-full h-8 mb-5 mt-3"
      :id="id"
      :value="value"
      @input="emitInput"
    >
    <option
      v-for="option in options"
      :key="option.id"
      v-bind:value="option.id"
    >
    {{ option[index] }}
    </option>
    </select>
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
     * Create Required Multiple Type
     */
    value: {
      type: [String, Number],
      required: false,
    },
    /**
     * Create Required Options Array w/Default
     */
    options: {
      type: Array,
      required: true,
      default: ['array'],
    },
    /**
     * Create Required Undex String w/Default
     */
    index: {
      type: String,
      required: true,
      default: ['string'],
    },
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
