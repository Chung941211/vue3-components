import { 
  defineComponent,
  ref,
  computed
} from 'vue';

const Button = defineComponent({
  name: 'Button',
  setup(props, { slots }) {
    const alertNode = ref();


    const classes = computed(() => {
      const pre = prefixCls.value;
      return {
        [`${pre}`]: true,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnborderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === 'rtl',
      };
    });
    return () => {
  
      return (
        <div class={classes} style="getStyle">
          <div class="nut-button__warp">
            <nut-icon class="nut-icon-loading" v-if="loading"></nut-icon>
            <slot></slot>
          </div>
        </div>
      );
    }
  }
});

export default Button;
