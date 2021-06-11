<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" @click="toggleNav">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <a href="/" class="navbar-brand">
                <img :src="logo.src" :alt="logo.title">
                <span class="title">{{ logo.title }}</span>
            </a>
        </div>
        <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
            <ul class="nav navbar-nav">
                <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }" :key="index">
                    <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
                </li>
            </ul>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}communities/hIZjRRdF8oVYZy69XJnT.png!/both/44x44`,
        title: 'Learnku Vue.js'
      },
      navList: ['社区', '头条', '问答', '教程'],
      activeNavIndex:0,
      showCollapsedNav: false
    }
  },
  beforeCreate() {
    this.uploadsUrl = 'https://cdn.learnku.com//uploads/'
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav
    }

  }
}
</script>

<style scoped>
.title {color: black;}
.navbar-brand > img {display: inline-block;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>