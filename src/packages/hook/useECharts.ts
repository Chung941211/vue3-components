import { ref, unref, Ref, nextTick } from 'vue'
import echarts from 'echarts'

export function useECharts (
  elRef: Ref<HTMLDivElement>
) {
  const chartInstanceRef = ref<any>(null)

  const init = () => {
    const el = unref(elRef)

    if (!el || !unref(el)) {
      return
    }
    chartInstanceRef.value = echarts.init(el)
  }

  const setOptions = (options: any) => {
    nextTick(() => {
      setTimeout(() => {
        let chartInstance = unref(chartInstanceRef)

        if (!chartInstance) {
          init()
          chartInstance = chartInstance = unref(chartInstanceRef)
          if (!chartInstance) {
            return
          }
        }

        chartInstance && chartInstance.setOption(options)
      }, 30)
    })
  }

  return {
    setOptions,
    echarts
  }
}
