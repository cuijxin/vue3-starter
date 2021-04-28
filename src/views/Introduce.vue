<template>
  <a-row>
    <gird-view
      :cross-axis-count="2"
      cross-axis-spacing="30px"
      main-axis-spacing="28px"
      v-bind="$attrs"
    >
      <introduce-item
        :title="item.title"
        v-for="item in data"
        :key="item.title"
      />
    </gird-view>
  </a-row>
</template>
<script>
import IntrodceItem from '../components/introduce/IntroduceItem.vue';
import GridView from '../components/GridView.vue';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
export default {
  components: {
    'introduce-item': IntrodceItem,
    'gird-view': GridView,
  },
  setup() {
    return {
      data,
    };
  },
};
</script>
