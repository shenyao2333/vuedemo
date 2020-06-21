<template>
    <div>
      <el-aside id="asideNav">
        <div class="logo-name">
         <!-- <p v-if="$store.getters.logoShow">XU</p>-->
         <!-- <p v-else>沈瑶</p>-->
          <p>沈瑶</p>
        </div>
        <el-menu :default-active="$route.path" class="el-menu-vertical"
                 @select="selectmenu"
                 :collapse="$store.getters.isCollapse"
                 background-color="#03152A"
                 text-color="rgba(255,255,255,.7)"
                 active-text-color="#ffffff"
                 :router="$store.getters.uniquerouter"
                 :unique-opened="$store.getters.uniquerouter"
                 :collapse-transition="true"
        >
          <template v-for="(item,index) in $store.getters.routers" v-if="!item.hidden">
            <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''" :key="index">
              <template slot="title">
                <i :class="item.iconCls?item.iconCls:[fa,fa-server]"></i>
                <span slot="title">{{ $t(`routeName.${item.name}`) }}</span>
              </template>

              <menu-tree :menuData="item.children"></menu-tree>

            </el-submenu>
            <el-menu-item :index="item.path" v-else :key="item.path">
              <i :class="item.iconCls?item.iconCls:[fa,fa-file]"/>
              <span slot="title">{{ $t(`routeName.${item.name}`) }}</span>
            </el-menu-item>
          </template>

        </el-menu>
      </el-aside>
    </div>
</template>

<script>
export default {
  name: 'Aside'
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
    background-color: #03152A !important;
  @extend %w100;
    font-weight: 300;
    z-index: 999;
  p {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #5e6d82;
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
    background-color: #020f1d !important;
    border-bottom: 1px solid #020f1d;
  &:hover {
     color: #ffffff !important;
     background-color: #375573 !important;
   }
  }
  .el-menu-item.is-active {
    background-color: #56a9ff !important
  }
  .is-opened > .el-submenu__title > .el-icon-arrow-down {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
  }
  }

  }
</style>
