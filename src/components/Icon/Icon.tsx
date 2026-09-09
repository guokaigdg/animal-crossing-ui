import React from 'react';
import * as NAIVE from './src';
import type { IconName, IconComponent } from './src/types';
import styles from './icon.module.less';

/** 内置可爱图标注册表：key 为去掉 Icon 后缀的名字（如 Flower），来自 src/components/Icon/src 的全部 101 个 *Icon 组件 */
const ICONS: Record<IconName, IconComponent> = Object.fromEntries(
    Object.entries(NAIVE)
        .filter(([, value]) => typeof value === 'function')
        .map(([cmpName, value]) => [cmpName.replace(/Icon$/, ''), value])
) as Record<IconName, IconComponent>;

export interface IconProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
    /** 内置可爱图标名（共 101 个，如 Heart / Flower）。与 icon / src 三选一 */
    name?: IconName;
    /** 任意内置图标组件（import { HeartIcon } from 'animal-island-ui'）。与 name / src 三选一，优先级高于 name */
    icon?: IconComponent;
    /** 自定义图标资源 URL。与 name / icon 三选一，用于彩色位图等非矢量场景 */
    src?: string;
    size?: number | string;
    /** 描边颜色（svg 模式），默认继承 currentColor */
    color?: string;
    /** 描边粗细（svg 模式），默认 3.5 */
    strokeWidth?: number | string;
    bounce?: boolean;
}

export const Icon: React.FC<IconProps> = ({
    name,
    icon,
    src,
    size = 24,
    color,
    strokeWidth,
    className,
    style,
    bounce = false,
    ...rest
}) => {
    const cls = [styles.icon, bounce ? styles['icon-bounce'] : '', className || ''].filter(Boolean).join(' ');

    const IconCmp = icon ?? (name ? ICONS[name] : undefined);

    if (IconCmp) {
        const labeled = Boolean(rest['aria-label']);
        const passthrough: Record<string, unknown> = { ...(rest as object) };
        // Naive 组件默认 stroke="#2A2A2A" strokeWidth={3.5}；仅当显式传入时才覆盖，避免 undefined 把默认值冲掉
        if (color !== undefined) passthrough.stroke = color;
        if (strokeWidth !== undefined) passthrough.strokeWidth = strokeWidth;
        return (
            <IconCmp
                className={cls}
                style={{ width: size, height: size, ...style }}
                aria-hidden={labeled ? undefined : true}
                role={labeled ? 'img' : undefined}
                {...(passthrough as React.SVGProps<SVGSVGElement>)}
            />
        );
    }

    return (
        <span
            className={cls}
            style={{
                width: size,
                height: size,
                ...(src ? { backgroundImage: `url(${src})` } : null),
                ...style,
            }}
            {...rest}
        />
    );
};

export type { IconName, IconComponent } from './src/types';

/** 全部内置图标清单，供展示使用 */
export const ICON_LIST = (Object.entries(ICONS) as Array<[IconName, IconComponent]>).map(([name]) => ({
    name,
    label: name.replace(/Icon$/, ''),
})) as ReadonlyArray<{ name: IconName; label: string }>;
