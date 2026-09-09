# Icon 组件重构：用内置 Naive 图标集全替换 lucide-react

## Context（背景）

当前主 `Icon` 组件基于 **lucide-react**（`name` 13 个语义名 + `icon` 接收 `LucideIcon`），
并把 `lucide-react` 列为运行时依赖，违反项目「零运行时依赖」的定位（AGENTS.md）。

仓库里已存在一套与 lucide 等价的完整可爱图标集：

- `src/components/Icon/src/` —— 101 个 React 组件（如 `FlowerIcon`），由 `src/index.ts` 聚合导出，
  共享类型在 `src/types.ts`（`IconName` 101 联合、`IconComponent`、`NAIVE_PALETTE`、`ICON_CATEGORIES`）。
- `src/components/Icon/svg/` —— 同名 101 个原始 `.svg` 文件。

目标：主 `Icon` 组件改用它，**彻底移除 lucide-react 依赖**（运行时依赖归零）。

已与用户确认的 API 形态：

1. `name` 用 **帕斯卡命名**（`<Icon name="HeartIcon" />`），复用 `src/types.ts` 的 `IconName` 联合类型。
2. 库根 `src/index.ts` **导出全部 101 个独立图标组件**（替换 lucide 的等价能力，`import { HeartIcon } from '...'`）。

## 现有 lucide 依赖点

- `src/components/Icon/Icon.tsx`（主组件）
- `src/components/DatePicker/DatePicker.tsx`（`ChevronLeft`/`ChevronRight`，6 处：L623/638/658/673/709/773）
- `src/components/Icon/Icon.test.tsx`
- `demo/components/Icon/IconDemo.tsx`
- `vite.config.ts` L318 `external` 数组
- `package.json` `dependencies.lucide-react`

## 改动方案

### 1. 重写 `src/components/Icon/Icon.tsx`

- 删除 lucide 相关 import 与 `BUILTIN_ICONS`（13 语义名）。
- 用一句话注册表替代显式 101 import：

    ```ts
    import * as NAIVE from './src';
    import type { IconName, IconComponent } from './src/types';

    const ICONS: Record<IconName, IconComponent> = Object.fromEntries(
        Object.entries(NAIVE).filter(([, v]) => typeof v === 'function')
    ) as Record<IconName, IconComponent>;
    ```

    （`export * from './types'` 在运行时是对象/常量，被 `typeof === 'function'` 过滤；key = 帕斯卡组件名。）

- `IconProps`：
    - `name?: IconName`
    - `icon?: IconComponent`（改为接受 Naive 组件，如 `IconComponent`）
    - 保留 `src?: string`（span 背景模式）、`size`、`color`、`strokeWidth`、`bounce`。
- 渲染：`IconCmp = icon ?? (name ? ICONS[name] : undefined)`；svg 模式把 `color` 映射为 **`stroke=`**（Naive 组件把 props 散布到 svg 根，`color` 直接传上去只会变 svg `color` 而非描边），`size` 通过内联 `width/height`，保留 `aria-hidden`/`role` 逻辑。`src` 模式仍渲染 span。
- className 改为 `[styles.icon, bounce && styles['icon-bounce'], className].filter(Boolean).join(' ')`（去掉按旧语义名的 `styles[name]`）。
- `ICON_LIST` 由 `Object.entries(ICONS)` 派生 → `{ name, label }`（label 由帕斯卡名去 `Icon` 后缀即可，如 `HeartIcon → Heart`），供 demo/文档展示。

### 2. 库根 `src/index.ts` 导出全部 101 组件

- 保留 `export * from './components/Icon';`（含 `Icon`、`ICON_LIST`、`IconProps`、`IconName`）。
- 追加**显式具名**导出 101 个 `*Icon` 组件：
  `export { AirplaneIcon, ... WifiIcon } from './components/Icon/src';`
  （只导出组件名，避开 `src/types.ts` 的 `IconProps`/`IconName` 与主组件同名冲突。101 个名字以 `src/components/Icon/src/index.ts` 的导出列表与 `src/types.ts::IconName` 联合为准。）

### 3. DatePicker：切掉 lucide 箭头

- 删除 `import { ChevronLeft, ChevronRight } from 'lucide-react';`。
- 6 处箭头全部换成**内联 svg**（复用文件内已有的月份按钮内联样式，见 L719-727/755-763）。
  年份箭头尺寸 16 + `styles.navIcon`，月份箭头尺寸 12：`<svg className={styles.navIcon} width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden>...</svg>`。

### 4. Image 占位图标

- `src/components/Image/Image.tsx` L138 `<Icon name="page" />` → `<Icon name="ImageIcon" />`。

### 5. demo Skill 文案图标重映射（`demo/components/Skill/data.ts`）

`IconName` 已从库根导入，改字符串即可：

- WORKFLOW：`icon-shopping→ShoppingBagIcon`、`icon-chat→ChatIcon`、`icon-variant→GlobeIcon`、`icon-encyclopedia→BookIcon`、`icon-design→PaintbrushIcon`
- SCENARIOS：`icon-design→CodeIcon`、`icon-map→FileIcon`
- RULE_GROUPS：`icon-encyclopedia→BookIcon`、`icon-map→MapIcon`、`icon-design→PaintbrushIcon`、`icon-diy→PencilIcon`、`icon-camera→CameraIcon`
- 顺带把 data.ts L219 文案「内置 13 个」/「任一 lucide 图标」改为「内置全量图标」表述。
- `parts.tsx` 无硬编码名，自动跟随。

### 6. demo IconDemo（`demo/components/Icon/IconDemo.tsx`）

- 删除 `import { Heart, Star, Sun, Umbrella } from 'lucide-react'`。
- name 区改用帕斯卡名示例（如 `HeartIcon/StarIcon/SunIcon/UmbrellaIcon/CameraIcon/WifiIcon/MapIcon/FlowerIcon`）。
- icon 区：从库根 `import { HeartIcon, StarIcon, SunIcon, UmbrellaIcon } from '../../../src'`，`<Icon icon={HeartIcon} color="#e05260" />`。
- 更新 API 表 `ICON_API`：`name` 描述为内置可爱图标（101）；`icon` 类型改 `IconComponent`；
  `color/strokeWidth` 文案去掉「lucide 模式」字样。
- 更新 `CodeBlock` 示例：去掉 `import { Heart } from 'lucide-react'`，改用内置图标。

### 7. 测试

- `src/components/Icon/Icon.test.tsx` 重写为 Naive 断言：
    - `<Icon name="HeartIcon" />` → 渲染 svg、有 `styles.icon`、无 backgroundImage。
    - `<Icon icon={HeartIcon} />`（从 `./src` import）→ svg + path。
    - size（数字/字符串）、bounce、className/style 沿用。
    - `color` 映射为 `stroke` 属性、`strokeWidth` 映射为 `stroke-width`。
    - `src` 模式仍渲染 span + backgroundImage。
    - `ICON_LIST`：长度 = 101、无重复、每项有非空 label。
    - 保留 aria-hidden/role/可访问名契约用例。
    - 移除所有 lucide import。
- `test/a11y.test.tsx` L152 `<Icon name="page" />` → `<Icon name="HeartIcon" />`。

### 8. 构建/依赖

- `vite.config.ts` L318 `external` 数组移除 `'lucide-react'`。
- `package.json` 删除 `dependencies.lucide-react`，`npm install` 更新 `package-lock.json`（并确认 `dependencies` 变为空 → 满足文档「零运行时依赖」）。

### 9. 文档同步（en + zh-CN 成对）

开发计划：`check:docs` 强制每个组件在 design-system 与 skill references 有覆盖、zh 镜像 en。

- `docs/design-system/components/general.md` + `docs/zh-CN/.../general.md`：Icon 重新描述为内置可爱图标集（101，`name` 帕斯卡、`icon: IconComponent`、三模式），示例与 props 改为 Naive 名。
- `docs/design-system/README.md` + zh：Icon 行改为「内置 101 个可爱图标」。
- `skills/animal-island-ui-style/references/components/general.md`：props 表（`name: IconName` 101 联合、`icon?: IconComponent`）与示例改帕斯卡名。
- `skills/animal-island-ui-style/SKILL.md` + `SKILL.zh-CN.md`：内置名数量表述（13/lucide → 内置图标集）。
- `docs/design-system/design-rules.md` + zh：L94-98「10 个内置图标名」更新为「内置可爱图标集」且不再提及 lucide。
- `CHANGELOG.md`：新增条目说明「移除 lucide-react 依赖，图标改为内置可爱图标集」。

> 说明：`demo/tools/index.tsx`、`demo/components/Skill/parts.tsx` 无需改（只透传数据）。

## 关键大致文件名清单

- 主实现：`src/components/Icon/Icon.tsx`、`src/components/Icon/index.ts`、`src/index.ts`、`src/components/Icon/icon.module.less`
- 消费方：`src/components/DatePicker/DatePicker.tsx`、`src/components/Image/Image.tsx`
- 测试：`src/components/Icon/Icon.test.tsx`、`test/a11y.test.tsx`
- demo：`demo/components/Icon/IconDemo.tsx`、`demo/components/Skill/data.ts`
- 构建/依赖：`vite.config.ts`、`package.json`、`package-lock.json`
- 文档：见上文第 9 组

## 验证

1. `npm run ci` 全绿（format:check + check:docs + lint + test:run + test:a11y + build）。
2. `npm run build:demo` 成功，打开 demo 的 Icon 页验证：name 区展示可爱图标、icon 区用库根导入组件、列表区展示全部 101 个、src 模式正常。
3. 全局 `grep -r lucide-react` 应无源码/配置残留（仅 CHANGELOG 历史与锁文件可能有历史引用可忽略，但源码/配置需为 0）。
