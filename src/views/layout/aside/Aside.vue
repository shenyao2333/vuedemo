<template>
    <div>
      <el-aside id="asideNav">
        <div class="logo-name">
          <p v-if="$store.getters.logoShow">XU</p>
          <p v-else>沈瑶</p>
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
        name: "Aside"
    }
</script>

<style scoped>

</style>
