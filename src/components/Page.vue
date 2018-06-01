<template>
  <div>
    <za-notice-bar hasArrow>带图标，带右侧箭头的链接样式</za-notice-bar>
    <za-tabs>
      <za-tab-pane label='用户管理' name='first'>
        <div class='content'>用户管理</div>
      </za-tab-pane>
      <za-tab-pane label='配置管理' name='second'>
        <div class='content'>配置管理</div>
      </za-tab-pane>
      <za-tab-pane label='角色管理' name='third'>
        <div class='content'>角色管理</div>
      </za-tab-pane>
    </za-tabs>
    
    
    <za-cell hasArrow title="点状">
      <za-badge slot='description' shape='dot'></za-badge>
    </za-cell>
    <za-cell title='标题文字'></za-cell>
    <za-cell>
      <za-checkbox-group>
        <za-checkbox>普通</za-checkbox>
      </za-checkbox-group>
    </za-cell>
    <za-cell>
      <za-radio-group>
        <za-radio>普通</za-radio>
      </za-radio-group>
    </za-cell>
    <za-cell title='单行文本'>
      <za-input ref='inputFirst' type="text" placeholder="type is text"></za-input>
    </za-cell>
    <za-message>primary</za-message>
    <zaAccordion>
      <zaAccordionItem title="50元套餐" aiTag='0'>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
      </zaAccordionItem>
    </zaAccordion>
    <za-panel>
      <za-panel-header title='普通' />
      <za-panel-body>
        <za-cell>body</za-cell>
      </za-panel-body>
    </za-panel>
    <za-cell>
      <za-spinner slot='description' class="rotate360" /> 普通
    </za-cell>
    <za-cell title="普通">
      <za-stepper slot='description'></za-stepper>
    </za-cell>
    <za-cell>
      <za-switch slot='description'></za-switch>
      普通
    </za-cell>
    
    <div>
      <za-button theme="primary" block>普通按钮</za-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '123'
      }
    }
  }
</script>