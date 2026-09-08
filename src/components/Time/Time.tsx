import React, { useEffect, useState } from 'react';
import styles from './time.module.less';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

const pad = (value: number) => String(value).padStart(2, '0');

export type TimeProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * 实时时钟卡片：
 * 上方 HH:MM 时钟每秒刷新，冒号按秒闪烁；
 * 下方主色胶囊显示星期与月日，挂载时淡入。
 */
export const Time: React.FC<TimeProps> = ({ className, ...rest }) => {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timer = window.setInterval(() => setNow(new Date()), 1_000);
        return () => window.clearInterval(timer);
    }, []);

    const classNames = [styles.time, className].filter(Boolean).join(' ');

    return (
        <div className={classNames} role="timer" aria-live="off" {...rest}>
            <div className={styles.clock}>
                {pad(now.getHours())}
                <span className={styles.colon}>:</span>
                {pad(now.getMinutes())}
            </div>
            <div className={styles.date}>
                <span className={styles.weekday}>{WEEKDAYS[now.getDay()]}</span>
                <span className={styles.dot} aria-hidden="true">
                    ·
                </span>
                <span className={styles.monthDay}>
                    {MONTHS[now.getMonth()]} {now.getDate()}
                </span>
            </div>
        </div>
    );
};

Time.displayName = 'Time';
