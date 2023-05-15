<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRoute();
const variables = reactive({ xueshengmingcheng: null, xueshengnianling: null });
const nodesState = reactive({
  aCard: {},
  tpl: {},
  aForm: {},
  tpl_2: {},
  aFormItem: { label: '\\\\u5B66\\\\u751F\\\\u540D\\\\u79F0' },
  tpl_3: {},
  aInput: { value: '', change: (event_event, event_ctx) => {} },
  aFormItem_2: { label: '\\\\u5B66\\\\u751F\\\\u5E74\\\\u9F84' },
  tpl_4: {},
  aInputNumber: { change: (event_value, event_ctx) => {} },
  aFormItem_3: { label: '\\\\u5B66\\\\u751F\\\\u5E74\\\\u9F84' },
  tpl_5: {},
  aButton: { type: 'primary', size: 'middle', shape: 'round' },
  tpl_6: {},
  text: { text: '\\\\u63D0\\\\u4EA4\\\\u8868\\\\u5355' },
});
</script>
