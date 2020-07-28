<template>
  <v-app>
    <Payments />
  </v-app>
</template>

<script>
import Payments from './components/Payments';

export default {
  name: 'App',

  components: {
      Payments,
  },

  data: () => ({
    //
  }),
};
</script>1