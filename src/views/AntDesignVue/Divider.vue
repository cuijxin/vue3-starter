<template>
  <div class="main-container">
    <div>
      <div class="markdown">
        <h1>
          Divider
          <span class="subtitle">分割线</span>
        </h1>
        <div class="markdown">
          <p>区隔内容的分割线。</p>
          <h2>何时使用</h2>
          <ul>
            <li>对不同章节的文本段落进行分割。</li>
            <li>对行内文字/链接进行分割，例如表格的操作列。</li>
          </ul>
        </div>
        <div class="markdown">
          <h2>代码演示</h2>
        </div>
        <div class="code-box-row">
          <div class="ant-col ant-col-12 code-boxes-col-2-1" style="padding-left: 8px; padding-right: 8px;">
            <div class="code-box">
              <div class="code-box-demo">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                  probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <a-divider/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                  probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <a-divider>With Text</a-divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                  probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <a-divider dashed />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                  probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
              </div>
              <div class="code-box-meta">
                <div class="code-box-title" style="margin-left: 16px">
                  <a>水平分割线</a>
                </div>
                <div class="code-box-description">
                  <p>默认为水平分割线，可在中间加入文字。</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-col ant-col-12 code-boxes-col-2-1" style="padding-left: 8px; padding-right: 8px;">
            <div class="code-box">right</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
    position: relative;
    background: #fff;
}
.markdown {
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 2;
}
.markdown h1 .subtitle {
    margin-left: 12px;
}
.code-box {
    border: 1px solid #1890ff;
    margin-top: 10px;
    margin-bottom: 10px;
}
.code-box.code-box-title{
    position: absolute;
    top: -14px;
    padding: 1px 8px;
    color: #777;
    background: #fff;
    border-radius: 2px 2px 0 0;
    transition: background-color .4s;
}
.code-box-description {
    padding: 18px 24px 12px;
}
.code-box-demo {
    padding: 42px 24px 50px;
    color: rgba(0,0,0,.85);
    border-bottom: 1px solid #f0f0f0;
}

.code-box-row {
    display: flex;
    flex-flow: row wrap;
}
</style>