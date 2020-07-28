<template>
  <b-container lg>
  <highcharts :options="chartOptions" :key="chartKey"></highcharts>
  </b-container>
</template>

<script>
import {Chart} from 'highcharts-vue'
import { INDICATORS_LABLE } from '../scripts/const'
import { mapGetters } from 'vuex';


export default {
  components: {
    highcharts: Chart 
  },
  props: {
    indicatorsToShow: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartKey: 0,
    }
  },
  computed: {
    ...mapGetters({
      chartData: 'chartData',
    }),
    chartOptions() {
      const series = this.indicatorsToShow.map(indicator => {
        return {
          name: INDICATORS_LABLE[indicator],
          data: this.chartData[indicator],
        }
      });
      return {
        series
      }
    }
  },
  watch: {
    indicatorsToShow() {
      this.$nextTick(() => {
        this.chartKey +=1;
      })
    }
  }
}
</script>

<style>

</style>