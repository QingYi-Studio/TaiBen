import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import NovelSearch from '@/components/NovelSearch.vue'
import TaiBenLicense from '@/components/TaiBenLicense.vue'
import NovelDetail from '@/components/NovelDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
    redirect: '/search',
    meta: {
      title: '青衣台本公益搜索站'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: NovelSearch,
  },
  {
    path: '/license',
    name: 'License',
    component: TaiBenLicense,
  },
  {
    path: '/novel-detail',
    name: 'NovelDetail',
    component: NovelDetail, // 确保正确导入组件
  },
]

const router = createRouter({
  history: createWebHashHistory(),  // 修改这里
  routes
})

export default router;

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.path}`);
  next();
});
