import { 
  defineComponent,
  ref,
  computed
} from 'vue';

const Button = defineComponent({
  name: 'Button',
  setup(props, { attrs ,slots, emit }) {
    const alertNode = ref();
    
    const { prefixCls, autoInsertSpaceInButton, direction } = props;

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

    const handleClick = (event: Event) => {
      emit('click', event);
    };
    return () => {
  
      return (
        <div
          class={classes}
          onClick={handleClick}
          style={attrs.style}>
          <div class="button__warp">
            <slot></slot>
          </div>
        </div>
      );
    }
  }
});

export default Button;
