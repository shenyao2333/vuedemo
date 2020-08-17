<template>
    <div>

      <el-aside id="asideNav">
        <div class="logo-name">
         <!-- <p v-if="$store.getters.logoShow">XU</p>-->
         <!-- <p v-else>沈瑶</p>-->
          <p>{{$store.getters.userInfo.userName}}</p>

        </div>
        <el-menu  class="el-menu-vertical"
                 @select="selectmenu"
                 :collapse="$store.getters.isCollapse"
                 background-color="rgb(48, 65, 86)"
                 text-color="rgb(191, 203, 217)"
                 active-text-color="rgb(191, 203, 217)"
                 :router="$store.getters.uniquerouter"
                 :unique-opened="$store.getters.uniquerouter"
                 :collapse-transition="true"
        >

          <template v-for="(item,index) in $store.state.routerData.routers" v-if="!item.hidden">

            <el-submenu :index="index+''" :key="index">
              <template slot="title">
                <i :class="item.iconCls?item.iconCls:[fa,fa-file]"></i>
                <span slot="title" class="abc">{{ $t(item.name) }}</span>
                <!---->
              </template>


              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
             <!-- <menu-tree :menuData="item.children"></menu-tree>-->

            </el-submenu>


          </template>

        </el-menu>
      </el-aside>
    </div>
</template>

<script>
import menuTree from './menuTree'

export default {
  name: 'asideNav',
  components: {
    menuTree
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    '$route.path': function (val) {
      this.selectmenu(val)
    }
  },
  data() {
    return {
      routers: this.$store.state.routerData.routers
    }
  },

  create (){
    console.log("---> "+this.router)
  },
  methods: {
    selectmenu (key) {
      let router = this.$store.getters.routers
      console.log("---> "+router)
      let name = ''
      let navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
            if (routerARR[i].path === path && routerARR[i].children.length < 1) {
              name = routerARR[i].name
              break
            }
            navTitle(path, routerARR[i].children)
          }
        }
        return name
      }
      this.$store.dispatch('addTab', {
        title: navTitle(key, router),
        path: key
      })
    }
  }
}
</script>

<style  lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  %w100 {
     width: 100%;
   }

  %h100 {
     height: 100%;
   }

  %cursor {
     cursor: pointer;
   }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #asideNav {
    width: auto !important;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
  .logo-name {
    background-color:rgb(48, 65, 86) !important;

  @extend %w100;
    font-weight: 300;
    z-index: 999;
  p {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: rgb(249, 240, 243) !important;
  }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
   @extend %h100;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .el-menu {
    flex: 1;
    overflow: inherit;
    border-right: none;
  &::-webkit-scrollbar {
     display: none;
   }
  .fa {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
  .el-menu-item {
    background-color: rgb(35, 49, 68) !important;
    border-bottom: 1px solid rgb(48, 65, 86);
  &:hover {
     color: #ffffff !important;
     background-color: rgb(20, 38, 48) !important;
   }
  }
  .el-submenu__title {
    &:hover {
     background-color: rgb(43, 57, 75) !important;
   }
  }


  .el-menu-item.is-active {
    background-color: rgb(17, 28, 37) !important
  }
  .is-opened > .el-submenu__title > .el-icon-arrow-down {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
  }
  }

  }
</style>
