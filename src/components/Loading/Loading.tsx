import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LoadingProps } from './types';
import styles from './loading.module.less';

const FLAKE_COUNT = 50;

export const Loading: React.FC<LoadingProps> = ({
    active = true,
    tip,
    delay = 0,
    fadeDuration = 0.6,
    zIndex = 3000,
    className,
    ...rest
}) => {
    // shown：雪花屏已显示（含淡出阶段）；exiting：正在渐变消失
    const [shown, setShown] = useState(false);
    const [exiting, setExiting] = useState(false);
    // ref 与 state 同步，供 effect 读取而无需将其纳入依赖
    const shownRef = useRef(false);
    const showTimerRef = useRef<number>(undefined);
    const hideTimerRef = useRef<number>(undefined);

    // 生成 50 片雪花：随机尺寸（1–6px）、水平位置（0–100%）与下落时长（6–12s）；
    // 负延迟让每片雪花从周期中段开始，首屏即有分布，无需等待飘满
    const flakes = useMemo(
        () =>
            Array.from({ length: FLAKE_COUNT }, () => {
                const size = Math.random() * 5 + 1;
                const duration = Math.random() * 6 + 6;
                return {
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${-Math.random() * duration}s`,
                };
            }),
        []
    );

    useEffect(() => {
        window.clearTimeout(showTimerRef.current);

        if (active) {
            // 淡出途中恢复开启：取消卸载计时，立即回到不透明
            window.clearTimeout(hideTimerRef.current);
            setExiting(false);
            if (delay === 0) {
                shownRef.current = true;
                setShown(true);
            } else {
                showTimerRef.current = window.setTimeout(() => {
                    shownRef.current = true;
                    setShown(true);
                }, delay);
            }
            return () => window.clearTimeout(showTimerRef.current);
        }

        // active=false：只有显示过才进入渐变消失
        if (shownRef.current) {
            setExiting(true);
            hideTimerRef.current = window.setTimeout(() => {
                shownRef.current = false;
                setShown(false);
                setExiting(false);
            }, fadeDuration * 1000);
        }
    }, [active, delay, fadeDuration]);

    // 卸载时清理计时器
    useEffect(
        () => () => {
            window.clearTimeout(showTimerRef.current);
            window.clearTimeout(hideTimerRef.current);
        },
        []
    );

    if (!shown) return null;

    const rootCls = [styles.loading, exiting && styles.exiting, className].filter(Boolean).join(' ');

    return (
        <div
            className={rootCls}
            style={{ zIndex, ...(exiting ? { transitionDuration: `${fadeDuration}s` } : {}) }}
            role="status"
            {...rest}
        >
            <div className={styles.snow} aria-hidden="true">
                {flakes.map((flakeStyle, i) => (
                    <span key={i} className={styles.flake} style={flakeStyle} />
                ))}
            </div>
            <span className={styles.vignette} aria-hidden="true" />
            {tip ? <div className={styles.tip}>{tip}</div> : <span className={styles.srOnly}>加载中</span>}
        </div>
    );
};

Loading.displayName = 'Loading';
