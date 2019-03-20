<template lang="html">
  <div>
    <p align="center">
      <a href="http://zarm.design">
        <img width="100" src="https://zarm.design/images/logo.ce68565d.svg">
      </a>
    </p>
    <h1 align="center">Zarm Vue</h1>
    <div align="center">
      <p>
        <a href="https://www.travis-ci.org/ZhonganTechENG/zarm-vue">
          <img src="https://www.travis-ci.org/ZhonganTechENG/zarm-vue.svg?branch=master" alt="Build Status">
        </a>
        <a href="https://coveralls.io/github/ZhonganTechENG/zarm-vue?branch=master">
          <img src="https://img.shields.io/coveralls/ZhonganTechENG/zarm-vue/master.svg" alt="Coverage Status">
        </a>
        <a href="https://www.npmjs.org/package/zarm-vue">
          <img src="https://img.shields.io/npm/v/zarm-vue.svg" alt="npm package">
        </a>
        <a href="https://npmjs.org/package/zarm-vue">
          <img src="https://img.shields.io/npm/dm/zarm-vue.svg" alt="NPM downloads">
        </a>
        <img src="http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&amp;label=gzip%20size:%20JS"
          alt="JS gzip size">
        <img src="http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.default.css?compression=gzip&amp;label=gzip%20size:%20CSS"
          alt="CSS gzip size">
        <a href="https://www.npmjs.com/package/zarm-vue">
          <img src="https://img.shields.io/npm/l/zarm-vue.svg" alt="License">
        </a>
      </p>
    </div>
    <za-cell>
      <za-button theme="primary" block>文档</za-button>
    </za-cell>
    <za-cell>
      <za-button theme="primary" ghost block>GitHub</za-button>
    </za-cell>
  </div>
</template>
<script>
import { Cell, Button } from "zarm-vue";
export default {
  components: {
    zaCell: Cell,
    zaButton: Button
  },
  data() {
    return {
      name: "123"
    };
  }
};
</script>