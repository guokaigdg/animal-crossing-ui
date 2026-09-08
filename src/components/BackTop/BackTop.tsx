import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import styles from './back-top.module.less';

// 原创上箭头图形：贴纸风粗圆角箭头（暖棕描边 + 奶油糖霜层 + 青绿主体 + 高光，代码生成，非素材文件）
const arrowSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <path d="M120 38 L202 128 H158 V200 H82 V128 H38 Z" fill="none" stroke="#c9a06c" stroke-width="26" stroke-linejoin="round"/>
  <path d="M120 38 L202 128 H158 V200 H82 V128 H38 Z" fill="none" stroke="#fffdf4" stroke-width="15" stroke-linejoin="round"/>
  <path d="M120 38 L202 128 H158 V200 H82 V128 H38 Z" fill="#19c8b9" stroke="#19c8b9" stroke-width="6" stroke-linejoin="round"/>
  <path d="M108 66 L78 102" stroke="#7fe0d4" stroke-width="11" stroke-linecap="round" fill="none"/>
</svg>`
);

export interface BackTopProps {
    /** 滚动容器，默认 window */
    target?: () => HTMLElement | Window;
    /** 滚动多少 px 后显示，默认 400 */
    visibilityHeight?: number;
    /** 点击回到顶部后的回调 */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 滚动动画时长(ms)，默认 300 */
    duration?: number;
}

export const BackTop: React.FC<BackTopProps> = ({
    target,
    visibilityHeight = 400,
    onClick,
    className,
    style,
    duration = 300,
}) => {
    const [visible, setVisible] = useState(false);

    const getTarget = useCallback(() => {
        return target ? target() : window;
    }, [target]);

    const handleScroll = useCallback(() => {
        const el = getTarget();
        const scrollTop = el === window ? window.scrollY : (el as HTMLElement).scrollTop;
        setVisible(scrollTop > visibilityHeight);
    }, [getTarget, visibilityHeight]);

    useEffect(() => {
        const el = getTarget();
        el.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => el.removeEventListener('scroll', handleScroll);
    }, [getTarget, handleScroll]);

    const scrollToTop = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = getTarget();
            const start = el === window ? window.scrollY : (el as HTMLElement).scrollTop;
            const startTime = performance.now();

            const animate = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = progress < 0.5 ? 2 * progress * progress : 1 - (-2 * progress + 2) ** 2 / 2;
                const current = start * (1 - eased);

                if (el === window) {
                    window.scrollTo(0, current);
                } else {
                    (el as HTMLElement).scrollTop = current;
                }

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
            onClick?.(e);
        },
        [getTarget, duration, onClick]
    );

    return (
        <div
            className={classNames(styles.backtop, visible && styles.visible, className)}
            style={style}
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            aria-label="返回顶部"
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToTop(e as unknown as React.MouseEvent<HTMLDivElement>);
                }
            }}
        >
            <img className={styles.img} src={`data:image/svg+xml,${arrowSvg}`} alt="返回顶部" />
        </div>
    );
};

BackTop.displayName = 'BackTop';
