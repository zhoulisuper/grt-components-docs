/** 基础组件 路由 **/

import Layout from "@/layout";
import Blank from "@/components/Blank";
/* 定义component */
/**
 * 常用组件
 */
// 日期组件
const TDatePicker = () =>
  import("@/views/components/tCommonComponents/TDatePicker");
// 条件查询置顶组件
const TQueryCondition = () => import("@/views/components/TQueryCondition");

const baseComponentsRouter = {
  path: "/base-components",
  isStatic: true,
  component: Layout,
  name: "基础组件",
  meta: {
    title: "基础组件",
  },
  children: [
    {
      path: "t-common-components",
      name: "常用组件",
      component: Blank,
      meta: { title: "常用组件" },
      children: [
        {
          path: "t-date-picker",
          name: "日期组件",
          component: TDatePicker,
          meta: { title: "日期组件" },
        },
      ],
    },
    {
      path: "t-query-condition",
      name: "查询条件置顶组件",
      component: TQueryCondition,
      meta: { title: "查询条件置顶组件" },
    },
  ],
};

export default baseComponentsRouter;
