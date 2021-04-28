<template>
  <div class="ant-row" style="margin-left: -8px; margin-right: -8px">
    <div
      class="ant-col ant-col-12 code-boxes-col-2-1"
      style="padding-left: 8px; padding-right: 8px"
    >
      <div class="code-box">
        <div class="code-box-demo">
          <a-button class="code-btn" type="primary">Primary</a-button>
          <a-button class="code-btn">Default</a-button>
          <a-button class="code-btn" type="dashed">Dashed</a-button>
          <a-button class="code-btn" type="danger">Danger</a-button>
          <a-config-provider :auto-insert-space-in-button="false">
            <a-button class="code-btn" type="primary">按钮</a-button>
          </a-config-provider>
          <a-button class="code-btn" type="primary">按钮</a-button>
          <a-button type="link" class="code-btn">Link</a-button>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>按钮类型</a>
          </div>
          <div class="code-box-description">
            <p>
              按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
            </p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <div
            :style="{
              background: 'rgb(190,200,200)',
              padding: '26px 16px 16px',
            }"
          >
            <a-button class="code-btn" type="primary" ghost>Primary</a-button>
            <a-button class="code-btn" ghost>Default</a-button>
            <a-button class="code-btn" type="dashed" ghost>Dashed</a-button>
            <a-button class="code-btn" type="danger" ghost>Danger</a-button>
            <a-button class="code-btn" type="link" ghost>Link</a-button>
          </div>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>幽灵按钮</a>
          </div>
          <div class="code-box-description">
            <p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上</p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <a-button class="code-btn" type="primary" loading>Loading</a-button>
          <a-button class="code-btn" type="primary" size="small" loading>
            Loading
          </a-button>
          <br />
          <a-button
            class="code-btn"
            type="primary"
            :loading="loading"
            @mouseenter="loading = true"
          >
            mouseenter me!
          </a-button>
          <a-button
            class="code-btn"
            type="primary"
            icon="poweroff"
            :loading="iconLoading"
            @click="enterIconLoading"
          >
            延迟1s
          </a-button>
          <br />
          <a-button class="code-btn" type="primary" loading />
          <a-button class="code-btn" type="primary" shape="circle" loading />
          <a-button class="code-btn" type="danger" shape="round" loading />
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>加载中状态</a>
          </div>
          <div class="code-box-description">
            <p>
              添加 loading
              属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态
            </p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <a-radio-group v-model:value="size">
            <a-radio-button value="large">Large</a-radio-button>
            <a-radio-button value="default">Default</a-radio-button>
            <a-radio-button value="small">Small</a-radio-button>
          </a-radio-group>
          <br />
          <br />
          <a-button type="primary" class="code-btn" :size="size">
            Primary
          </a-button>
          <a-button class="code-btn" :size="size">Normal</a-button>
          <a-button class="code-btn" :size="size" type="dashed">
            Dashed
          </a-button>
          <a-button class="code-btn" :size="size" type="danger">
            Danger
          </a-button>
          <a-button class="code-btn" :size="size" type="link">Link</a-button>
          <br />
          <a-button type="primary" class="code-btn" :size="size">
            <template #icon>
              <DownloadOutlined />
            </template>
          </a-button>
          <a-button type="primary" class="code-btn" shape="circle" :size="size">
            <template #icon>
              <DownloadOutlined />
            </template>
          </a-button>
          <a-button type="primary" class="code-btn" shape="round" :size="size">
            <template #icon>
              <DownloadOutlined />
              Download
            </template>
          </a-button>
          <a-button type="primary" class="code-btn" :size="size">
            <template #icon>
              <DownloadOutlined />
            </template>
            Download
          </a-button>
          <br />
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>按钮尺寸</a>
          </div>
          <div class="code-box-description">
            <p>按钮有大、中、小三种尺寸</p>
            <p>
              通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置
              size ，则尺寸为中
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ant-col ant-col-12 code-boxes-col-2-1"
      style="padding-left: 8px; padding-right: 8px"
    >
      <div class="code-box">
        <div class="code-box-demo">
          <a-button class="code-btn" type="primary">Primary</a-button>
          <a-button class="code-btn" type="primary" disabled>
            Primary(disabled)
          </a-button>
          <br />
          <a-button class="code-btn">Default</a-button>
          <a-button class="code-btn" disabled>Default(disabled)</a-button>
          <br />
          <a-button class="code-btn" type="dashed">Dashed</a-button>
          <a-button class="code-btn" type="dashed" disabled>
            Dashed(disabled)
          </a-button>
          <br />
          <a-button class="code-btn" type="link">Link</a-button>
          <a-button class="code-btn" type="link" disabled>
            Link(disabled)
          </a-button>
          <br />
          <div
            :style="{
              padding: '10px 10px 10px 10px',
              background: 'rgb(190, 200, 200)',
            }"
          >
            <a-button ghost>Ghost</a-button>
            <a-button ghost disabled>Ghost(disabled)</a-button>
          </div>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>不可用状态</a>
          </div>
          <div class="code-box-description">
            <p>
              添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
            </p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <a-button type="primary" class="code-btn" shape="circle">
            <template #icon><SearchOutlined /></template>
          </a-button>
          <a-button type="primary" shape="circle" class="code-btn">A</a-button>
          <a-button type="primary" class="code-btn">
            <template #icon><SearchOutlined /></template>
            Search
          </a-button>
          <a-button class="code-btn" shape="circle">
            <template #icon><SearchOutlined /></template>
          </a-button>
          <a-button class="code-btn">
            <template #icon><SearchOutlined /></template>
            Search
          </a-button>
          <a-button class="code-btn" shape="circle">
            <template #icon><SearchOutlined /></template>
          </a-button>
          <a-button class="code-btn">
            <template #icon><SearchOutlined /></template>
            Search
          </a-button>
          <a-button type="dashed" class="code-btn" shape="circle">
            <template #icon><SearchOutlined /></template>
          </a-button>
          <a-button type="dashed" class="code-btn">
            <template #icon><SearchOutlined /></template>
            Search
          </a-button>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>图标按钮</a>
          </div>
          <div class="code-box-description">
            <p>
              当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在
              Button 内使用 Icon 组件
            </p>
            <p>
              如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性
            </p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <a-button type="primary" class="code-btn">Primary</a-button>
          <a-button class="code-btn">secondary</a-button>
          <a-dropdown class="code-btn">
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">1st item</a-menu-item>
                <a-menu-item key="2">2nd item</a-menu-item>
                <a-menu-item key="3">3rd item</a-menu-item>
              </a-menu>
            </template>
            <a-button>
              Action
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>多个按钮组合</a>
          </div>
          <div class="code-box-description">
            <p>
              按钮组合使用时，推荐使用1个主操作+n个次操作，3个以上操作时把更多操作放到Dropdown.Button中组合使用
            </p>
          </div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-box-demo">
          <a-button type="primary" class="code-btn" block>Primary</a-button>
          <a-button class="code-btn" block>Default</a-button>
          <a-button type="dashed" class="code-btn" block>Dashed</a-button>
          <a-button type="danger" class="code-btn" block>Danger</a-button>
          <a-button type="link" class="code-btn" block>Link</a-button>
        </div>
        <div class="code-box-meta">
          <div class="code-box-title" style="margin-left: 16px">
            <a>Block按钮</a>
          </div>
          <div class="code-box-description">
            <p>block属性将使按钮适合其父宽度</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import {
  DownloadOutlined,
  SearchOutlined,
  DownOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    DownloadOutlined,
    SearchOutlined,
    DownOutlined,
  },
  setup() {
    const iconLoading = ref(false);

    const enterIconLoading = () => {
      iconLoading.value = {
        delay: 1000,
      };
    };

    const handleMenuClick = (e) => {
      console.log('click', e);
    };

    return {
      loading: ref(false),
      size: ref('large'),
      iconLoading,
      enterIconLoading,
      handleMenuClick,
    };
  },
};
</script>
<style scoped>
.code-box {
  border: 1px solid #1890ff;
  margin-top: 10px;
  margin-bottom: 10px;
}
.code-box.code-box-title {
  position: absolute;
  top: -14px;
  padding: 1px 8px;
  color: #777;
  background: #fff;
  border-radius: 2px 2px 0 0;
  transition: background-color 0.4s;
}
.code-box-description {
  padding: 18px 24px 12px;
}
.code-box-demo {
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #f0f0f0;
}
.markdown {
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 2;
}
.code-boxes-col-2-1 {
  display: inline-block;
  vertical-align: top;
}

.code-box-meta.markdown {
  position: relative;
  width: 100%;
  font-size: 14px;
  border-radius: 0 0 2px 2px;
  transition: background-color 0.4s;
}
.code-btn {
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
