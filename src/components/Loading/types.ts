import React from 'react';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 是否开启雪花屏（true / false 控制开启关闭）；false 时渐变消失 */
    active?: boolean;
    /** 雪花屏中央提示文字 */
    tip?: React.ReactNode;
    /** 延迟显示时间（毫秒），避免加载快速结束时闪烁；0 = 立即显示 */
    delay?: number;
    /** 渐变消失时长（秒） */
    fadeDuration?: number;
    /** 全屏层级，默认 3000（高于 Notification 的 2000） */
    zIndex?: number;
}
