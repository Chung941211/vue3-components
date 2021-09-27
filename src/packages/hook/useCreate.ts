import { App, defineComponent, ComputedRef } from 'vue';
export default (
  name: string,
  props: Record<any, any>,
): {
  prefixCls: ComputedRef<string>;
} => {
  const componentName = 'nut-' + name;
  const configProvider = inject<UnwrapRef<ConfigProviderProps>>(
    'configProvider',
    defaultConfigProvider,
  );
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  return {
    configProvider,
    prefixCls,
    direction,
    getTargetContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
  };
}
