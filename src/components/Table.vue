<template>
  <b-container lg>
    <div class="my-3">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="rowsToShow"
        :options="options"
        name="flavour-1"
        @change="$refs.grid.clearSelected()"
      ></b-form-checkbox-group>
    </div>
    <b-table 
      :items="filteredItems" 
      :fields="fields" 
      selectable 
      select-mode="multi" 
      v-if="statistics.length" 
      ref="grid"
      @row-selected="onRowSelected"
    >
      <template v-slot:cell(name)="row">
        {{ row.value }}
      </template>
      <template v-slot:cell(diff)="row">{{ row.value }}</template>
      <!-- template for table data -->
      <template v-slot:cell()="data">
        <b-form-input v-model.number="data.item[data.field.key]" @change.native="changeDataItem($event, data)"></b-form-input>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { DEFAULT_FIELDS, INDICATORS, INDICATORS_LABLE } from "../scripts/const";
import { getDiffInPercent } from "../scripts/helpers";
import { mapGetters } from "vuex";
import { zipObject } from "lodash";

export default {
  name: "Table",
  data: () => ({
    items: [],
    rowsToShow: Object.values(INDICATORS),
  }),
  computed: {
    ...mapGetters({
      statistics: "statistics",
      rows: "rows"
    }),
    fields() {
      const fields = [...DEFAULT_FIELDS];

      this.statistics.forEach((item) => {
        fields.push({
          key: `date_${item.id}`,
          label: new Date(item.date).toLocaleDateString(),
          id: item.id
        });
      });

      return fields;
    },
    filteredItems() {
      return this.items.filter((item) => this.rowsToShow.includes(item.indicator));
    },
    options() {
      return Object.values(INDICATORS).map((indicator) => ({
        text: INDICATORS_LABLE[indicator],
        value: indicator,
        checked: true,
      }));
    },
  },
  watch: {
    statistics: {
      deep: true,
      handler() {
        const rows = [];
        Object.values(INDICATORS).forEach(indicator => {
          const [first, second] = this.rows[indicator];

          const row = zipObject(
            this.fields.map(field => field.key),
            [
              INDICATORS_LABLE[indicator],
              getDiffInPercent(first, second),
              ...this.rows[indicator]
            ]
          );
          row.indicator = indicator;

          rows.push(row);
        });

        this.items = rows;
      }
    },
  },
  mounted() {},
  methods: {
    changeDataItem(e, data){
      // eslint-disable-next-line
      const {indicator} = data.item;
      // eslint-disable-next-line
      const {id} = data.field;
      // eslint-disable-next-line
      const {value} = e.target;

      this.$store.dispatch('updateDateData', {id, indicator, value: parseInt(value)});
    },
    onRowSelected(items) {
      this.$emit('show-charts', items.map(item => item.indicator))
    }
  }
};
</script>

<style></style>
