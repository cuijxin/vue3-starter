<template>
  <div class="main-container">
    <div class="markdown">
      <h1>
        Grid
        <span class="subitle">栅格</span>
      </h1>
      <div class="markdown">
        <p>24 栅格系统。</p>
        <h2>设计理念</h2>
        <p>
          在多数业务情况下，Ant Design Vue
          需要在设计区域内解决大量信息收纳的问题，因此在 12
          栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。
          划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。
          『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
        </p>
      </div>
      <h2>概述</h2>
      <p>
        布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
      </p>
      <ul>
        <li>通过`row`在水平方向建立一组`column`（简写col）</li>
        <li>
          你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
        </li>
        <li>
          栅格系统中的列是指 1 到 24
          的值来表示其跨越的范围。例如，三个等宽的列可以使用 `
          <a-col :span="8">` 来创建</a-col>
        </li>
        <li>
          如果一个`row`中的`col`总和超过
          24，那么多余的`col`会作为一个整体另起一行排列
        </li>
      </ul>
      <h2>Flex布局</h2>
      <p>
        我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 -
        居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用
        order 来定义元素的排列顺序。 Flex 布局是基于 24
        栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。
      </p>
    </div>

    <div class="markdown">
      <h2>代码演示</h2>
    </div>
    <div class="ant-row">
      <div class="ant-col ant-col-24">
        <div class="code-box">
          <div class="code-box-demo">
            <a-row>
              <a-col class="code-box-demo-col" :span="12">col-12</a-col>
              <a-col class="code-box-demo-col" :span="12">col-12</a-col>
            </a-row>
            <a-row>
              <a-col class="code-box-demo-col" :span="8">col-8</a-col>
              <a-col class="code-box-demo-col" :span="8">col-8</a-col>
              <a-col class="code-box-demo-col" :span="8">col-8</a-col>
            </a-row>
            <a-row>
              <a-col class="code-box-demo-col" :span="6">col-6</a-col>
              <a-col class="code-box-demo-col" :span="6">col-6</a-col>
              <a-col class="code-box-demo-col" :span="6">col-6</a-col>
              <a-col class="code-box-demo-col" :span="6">col-6</a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>基础栅格</a>
            </div>
            <div class="code-box-description">
              <p>从堆叠到水平排列</p>
              <p>
                使用单一的一组
                <code>Row</code>
                和
                <code>Col</code>
                栅格组件，就可以创建一个基本的栅格系统，所有列 (Col) 必须放在
                <code>Row</code>
                内。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <p>Align Top</p>
            <a-row type="flex" justify="center" align="top">
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-100">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-50">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-120">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-80">col-4</p>
              </a-col>
            </a-row>

            <p>Align Center</p>
            <a-row type="flex" justify="space-around" align="middle">
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-100">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-50">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-120">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-80">col-4</p>
              </a-col>
            </a-row>

            <p>Align Bottom</p>
            <a-row type="flex" justify="space-between" align="bottom">
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-100">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-50">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-120">col-4</p>
              </a-col>
              <a-col class="code-box-demo-col" :span="4">
                <p class="height-80">col-4</p>
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>对齐</a>
            </div>
            <div class="code-box-description">
              <p>子元素垂直对齐。</p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-divider orientation="left">Normal</a-divider>
            <a-row type="flex">
              <a-col class="code-box-demo-col" :span="6" :order="4">
                1 col-order-4
              </a-col>
              <a-col class="code-box-demo-col" :span="6" :order="3">
                2 col-order-3
              </a-col>
              <a-col class="code-box-demo-col" :span="6" :order="2">
                3 col-order-2
              </a-col>
              <a-col class="code-box-demo-col" :span="6" :order="1">
                4 col-order-1
              </a-col>
            </a-row>
            <a-divider orientation="left">Responsive</a-divider>
            <a-row type="flex">
              <a-col
                class="code-box-demo-col"
                :span="6"
                :xs="{ order: 1 }"
                :sm="{ order: 2 }"
                :md="{ order: 3 }"
                :lg="{ order: 4 }"
              >
                1 col-order-responsive
              </a-col>
              <a-col
                class="code-box-demo-col"
                :span="6"
                :xs="{ order: 2 }"
                :sm="{ order: 1 }"
                :md="{ order: 4 }"
                :lg="{ order: 3 }"
              >
                2 col-order-responsive
              </a-col>
              <a-col
                class="code-box-demo-col"
                :span="6"
                :xs="{ order: 3 }"
                :sm="{ order: 4 }"
                :md="{ order: 2 }"
                :lg="{ order: 2 }"
              >
                3 col-order-responsive
              </a-col>
              <a-col
                class="code-box-demo-col"
                :span="6"
                :xs="{ order: 4 }"
                :sm="{ order: 3 }"
                :md="{ order: 1 }"
                :lg="{ order: 1 }"
              >
                4 col-order-responsive
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>排序</a>
            </div>
            <div class="code-box-description">
              <p>
                通过
                <code>order</code>
                来改变元素的排序。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-divider orientation="left">Percentage columns</a-divider>
            <a-row type="flex">
              <a-col class="code-box-demo-col" :flex="2">2 / 5</a-col>
              <a-col class="code-box-demo-col" :flex="3">3 / 5</a-col>
            </a-row>
            <a-divider orientation="left">Fill rest</a-divider>
            <a-row type="flex">
              <a-col class="code-box-demo-col" flex="100px">100px</a-col>
              <a-col class="code-box-demo-col" flex="auto">auto</a-col>
            </a-row>
            <a-divider orientation="left">Raw flex style</a-divider>
            <a-row type="flex">
              <a-col class="code-box-demo-col" flex="1 1 200px">
                1 1 200px
              </a-col>
              <a-col class="code-box-demo-col" flex="0 1 300px">
                0 1 300px
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>Flex填充</a>
            </div>
            <div class="code-box-description">
              <p>
                Col提供
                <code>flex</code>
                属性以支持填充。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <div id="components-grid-demo-flex">
              <p>sub-element align left</p>
              <a-row type="flex" justify="start">
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align center</p>
              <a-row type="flex" justify="center">
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align right</p>
              <a-row type="flex" justify="end">
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
              </a-row>

              <p>sub-element monospaced arrangement</p>
              <a-row type="flex" justify="space-between">
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align full</p>
              <a-row type="flex" justify="space-around">
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
                <a-col class="code-box-demo-col" :span="4">col-4</a-col>
              </a-row>
            </div>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>排版</a>
            </div>
            <div class="code-box-description">
              <p>
                子元素根据不同的值
                <code>start</code>
                ,
                <code>center</code>
                ,
                <code>end</code>
                ,
                <code>space-between</code>
                ,
                <code>space-around</code>
                ，分别定义其在父节点里面的排版方式。
              </p>
            </div>
          </div>
        </div>
        ∏
        <div class="code-box">
          <div class="code-box-demo">
            <div class="gutter-example">
              <a-row :gutter="16">
                <a-col class="gutter-row code-box-demo-col" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row code-box-demo-col" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row code-box-demo-col" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row code-box-demo-col" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
              </a-row>
            </div>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>区块间隔</a>
            </div>
            <div class="code-box-description">
              <p>
                栅格常常需要和间隔进行配合，你可以使用
                <code>Row</code>
                的
                <code>gutter</code>
                属性，我们推荐使用
                <code>(16+8n)px</code>
                作为栅格间隔(n是自然数).
              </p>
              <p>
                如果需要支持响应式，可以写成
                <code>{ xs: 8, sm: 16, md: 24, lg: 32}</code>
                。
              </p>
              <p>
                如果需要垂直间距，可以写成数组形式
                <code>[水平间距，垂直间距]</code>
                <code>[16, {xs: 8, sm: 16, md: 24, lg: 32}]</code>
                。
              </p>
              <blockquote>
                <p>
                  数组形式垂直间距在
                  <code>1.5.0</code>
                  之后支持。
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-row>
              <a-col class="code-box-demo-col" :span="8">col-8</a-col>
              <a-col class="code-box-demo-col" :span="8" :offset="8">
                col-8
              </a-col>
            </a-row>
            <a-row>
              <a-col class="code-box-demo-col" :span="6" :offset="6">
                col-6 col-offset-6
              </a-col>
              <a-col class="code-box-demo-col" :span="6" :offset="6">
                col-6 col-offset-6
              </a-col>
            </a-row>
            <a-row>
              <a-col class="code-box-demo-col" :span="12" :offset="6">
                col-12 col-offset-6
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>左右偏移</a>
            </div>
            <div class="code-box-description">
              <p>
                使用
                <code>offset</code>
                可以将列向右偏移。例如，
                <code>offset={4}</code>
                将元素向右偏移了4个列(column)的宽度。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-row>
              <a-col
                class="code-box-demo-col"
                :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
              >
                Col
              </a-col>
              <a-col
                class="code-box-demo-col"
                :xs="{ span: 11, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
              >
                Col
              </a-col>
              <a-col
                class="code-box-demo-col"
                :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
              >
                Col
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>其它属性的响应式</a>
            </div>
            <div class="code-box-description">
              <p>
                <code>span</code>
                <code>pull</code>
                <code>push</code>
                <code>offset</code>
                <code>order</code>
                属性可以通过内嵌到
                <code>xs</code>
                <code>sm</code>
                <code>md</code>
                <code>lg</code>
                <code>xl</code>
                <code>xxl</code>
                属性中来使用。
              </p>
              <p>
                其中，
                <code>:xs="6"</code>
                相当于
                <code>:xs="{ span: 6 }"</code>
                。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-row>
              <a-col
                class="code-box-demo-col"
                :xs="2"
                :sm="4"
                :md="6"
                :lg="8"
                :xl="10"
              >
                Col
              </a-col>
              <a-col
                class="code-box-demo-col"
                :xs="20"
                :sm="16"
                :md="12"
                :lg="8"
                :xl="4"
              >
                Col
              </a-col>
              <a-col
                class="code-box-demo-col"
                :xs="2"
                :sm="4"
                :md="6"
                :lg="8"
                :xl="10"
              >
                Col
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>响应式布局</a>
            </div>
            <div class="code-box-description">
              <p>
                参照 Bootstrap 的响应式设计，预设六个响应尺寸：
                <code>xs</code>
                <code>sm</code>
                <code>md</code>
                <code>lg</code>
                <code>xl</code>
                <code>xxl</code>
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <a-row>
              <a-col class="code-box-demo-col" :span="18" :push="6">
                col-18 col-push-6
              </a-col>
              <a-col class="code-box-demo-col" :span="6" :pull="18">
                col-6 col-pull-18
              </a-col>
            </a-row>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>栅格排序</a>
            </div>
            <div class="code-box-description">
              <p>列排序</p>
              <p>
                通过使用
                <code>push</code>
                和
                <code>pull</code>
                类就可以很容易的改变列 (column) 的顺序。
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-box-demo">
            <div id="components-grid-demo-playground">
              <div style="margin-bottom: 16px">
                <span style="margin-right: 6px">Horizontal Gutter (px):</span>
                <div style="width: 50%">
                  <a-slider
                    v-model:value="gutterKey"
                    :min="0"
                    :max="Object.keys(gutters).length - 1"
                    :marks="gutters"
                    :step="null"
                  />
                </div>

                <span style="margin-right: 6px">Vertical Gutter (px):</span>
                <div style="width: 50%">
                  <a-slider
                    v-model:value="vgutterKey"
                    :min="0"
                    :max="Object.keys(vgutters).length - 1"
                    :marks="vgutters"
                    :step="null"
                  />
                </div>

                <span style="margin-right: 6px">Column Count:</span>
                <div style="width: 50%">
                  <a-slider
                    v-model:value="colCountKey"
                    :min="0"
                    :max="Object.keys(colCounts).length - 1"
                    :marks="colCounts"
                    :step="null"
                  />
                </div>
              </div>

              <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
                <a-col
                  v-for="item in colCounts[colCountKey]"
                  :key="item.toString()"
                  :span="24 / colCounts[colCountKey]"
                >
                  <div>Column</div>
                </a-col>
              </a-row>

              <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
                <a-col
                  v-for="item in colCounts[colCountKey]"
                  :key="item.toString()"
                  :span="24 / colCounts[colCountKey]"
                >
                  <div>Column</div>
                </a-col>
              </a-row>

              <pre
                >{{ rowColHtml }}
            </pre
              >
              <pre
                >{{ rowColHtml }}
            </pre
              >
            </div>
          </div>
          <div class="code-box-meta markdown">
            <div class="code-box-title">
              <a>栅格配置器</a>
            </div>
            <div class="code-box-description">
              <p>可以简单配置几种等分栅格和间距</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
      gutters: {},
      colCounts: {},
      vgutters: {},
    });

    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      state.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      state.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      state.colCounts[i] = value;
    });
    const rowColHtml = computed(() => {
      const colCount = state.colCounts[state.colCountKey];
      const getter = [
        state.gutters[state.gutterKey],
        state.vgutters[state.vgutterKey],
      ];
      let colCode = `<a-row :gutter="[${getter}]">\n`;

      for (let i = 0; i < colCount; i++) {
        const spanNum = 24 / colCount;
        colCode += `  <a-col :span="${spanNum}"/>\n`;
      }

      colCode += '</a-row>';
      return colCode;
    });

    return {
      ...toRefs(state),
      rowColHtml,
    };
  },
});
</script>

<style scoped>
.main-container {
  position: relative;
  padding: 0 20px 32px 20px;
  background: #fff;
}
.markdown {
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 2;
}
.markdown code {
  margin: 0 1px;
  padding: 0.2em 0.4em;
  font-size: 0.9em;
  background: #f2f4f5;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
}
.code-box,
.code-box .code-box-demo {
  background-color: #fff;
}
.code-box {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  transition: all 0.2s;
}
.code-box-demo {
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #f0f0f0;
}
.code-box-demo-row {
  background: rgba(0, 146, 255, 0.75);
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
  border-radius: 0;
}
.code-box-demo-col {
  position: relative;
  border: 1px solid #080505;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 16px;
}

.code-box-meta.markdown {
  position: relative;
  width: 100%;
  font-size: 14px;
  border-radius: 0 0 2px 2px;
  transition: background-color 0.4s;
}
.code-box .code-box-title,
.code-box .code-box-title a {
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
}
.code-box-title {
  position: absolute;
  top: -14px;
  margin-left: 16px;
  padding: 1px 8px;
  color: #777;
  background: #fff;
  border-radius: 2px 2px 0 0;
  transition: background-color 0.4s;
}
.code-box-description {
  padding: 18px 24px 12px;
}

.height-100 {
  height: 100px;
  line-height: 100px;
}
.height-50 {
  height: 50px;
  line-height: 50px;
}
.height-120 {
  height: 120px;
  line-height: 120px;
}
.height-80 {
  height: 80px;
  line-height: 80px;
}
</style>
<style lang="less" scoped>
#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(12, 92, 197, 0.08);
}
</style>

<style scoped>
#components-grid-demo-playground :deep(.ant-col) {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground :deep(.ant-col) > div {
  background: #00a0e9;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
}
#components-grid-demo-playground pre {
  background: #f9f9f9;
  border-radius: 6px;
  font-size: 13px;
  padding: 8px 16px;
}
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
