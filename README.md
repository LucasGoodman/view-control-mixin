# @segma/view-control-mixin
## 简介
这一个`Vue Mixins`（混入）组件，主要用于项目中控制导航和左侧菜单显隐。

## 特别鸣谢：
[create-segma-app](https://github.com/RanSatious/create-segma-app)提供本项目模板

## TODO
- 单元测试
- `mixinOption.storage`扩展对cookie的支持

## 仓库地址
```text
https://github.com/LucasGoodman/view-control-mixin
```

## 快速开始

### 安装
```shell script
# 设置源
npm config set registry http://npm.segma.tech/
# 安装
npm i @segma/view-control-mixin
```

### 使用
```javascript
// 创建Mixin
// src\plugins\mixins\view-control.js

import { viewControlGetter } from '@segma/view-control-mixin';

export default viewControlMixin();
```

```javascript
// 在需要控制菜单显隐的布局或组件中使用
// src\components\layout\Default.vue

import view_control from '../../plugins/mixins/view_control';
import { viewControlGetter } from '@segma/view-control-mixin';
/*code*/

mixins: [auth, view_control],
computed: {
    menuAndNavShow() {
        return viewControlGetter();
    }
}
/*code*/
```

在url中加入查询参数即可
```text
http://localhost:8091/#/event-custom?menuAndNavShow=1
http://localhost:8091/#/?menuAndNavShow=1
http://localhost:8091/#/?a=1&menuAndNavShow=1
```

### 接口定义
```typescript
interface MixinOption {
    key: string,
    env_key?: string,
    storage?: string, // todo:引入cookie存储
}
```

### 默认配置
```typescript
const mixinOption: MixinOption = {
    key: 'menuAndNavShow',
    env_key: 'VUE_APP_MENU_SHOW',
    storage: 'storage',
};
```

