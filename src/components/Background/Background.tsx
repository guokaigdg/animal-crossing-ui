import React from 'react';
import styles from './background.module.less';

export type BackgroundType = 'dots' | 'sprinkles';

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 背景图案类型：dots 波点 / sprinkles 彩色针糖（甜甜圈糖霜上的圆柱形糖针，随机散落） */
    type?: BackgroundType;
    /** 子内容，渲染在图案背景之上 */
    children?: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ type = 'dots', className, children, ...rest }) => {
    const cls = [styles.background, styles[type], className].filter(Boolean).join(' ');
    return (
        <div className={cls} {...rest}>
            {children}
        </div>
    );
};

Background.displayName = 'Background';
