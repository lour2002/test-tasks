<template>
  <div id="app">
    <Chart :indicators-to-show="chartsToShow" v-if="chartsToShow.length"></Chart>
    <Table @show-charts="setChartsToShow"></Table>
  </div>
</template>

<script>
import Chart from "./components/Chart.vue";
import Table from "./components/Table.vue";
export default {
  name: "app",
  components: { Table, Chart },
  data() {
    return{
      chartsToShow: [],
    }
  },
  created() {
    this.$store.dispatch('getData');
  },
  methods: {
    setChartsToShow(charts) {
      this.chartsToShow = charts;
    }
  }
};
</script>

<style></style>
