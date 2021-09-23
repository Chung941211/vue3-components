import { defineComponent, ref } from 'vue';

const Button = defineComponent({
  name: 'Button',
  setup(props, { slots }) {
    const alertNode = ref();

    return () => {
  
      return (
        <div>
          {slots}
        </div>
      );
    }
  }
});

export default Button;
