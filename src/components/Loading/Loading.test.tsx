import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Loading } from './Loading';
import styles from './loading.module.less';

describe('Loading', () => {
    describe('渲染', () => {
        it('默认渲染全屏落雪 role=status 与兜底读屏文案', () => {
            render(<Loading />);
            const status = screen.getByRole('status');
            expect(status).toBeInTheDocument();
            expect(status).toHaveClass(styles.loading);
            expect(status.textContent).toBe('加载中');
        });

        it('雪花层与暗角均为 aria-hidden，雪花数量为 50', () => {
            const { container } = render(<Loading />);
            const snow = container.querySelector(`.${styles.snow}`) as HTMLElement;
            expect(snow).toBeInTheDocument();
            expect(snow).toHaveAttribute('aria-hidden', 'true');
            const flakes = snow.querySelectorAll<HTMLElement>(`.${styles.flake}`);
            expect(flakes).toHaveLength(50);
            const vignette = container.querySelector(`.${styles.vignette}`) as HTMLElement;
            expect(vignette).toHaveAttribute('aria-hidden', 'true');
        });

        it('每片雪花内联尺寸在 1–6px 且带负延迟（首屏即有分布）', () => {
            const { container } = render(<Loading />);
            const flakes = Array.from(container.querySelectorAll<HTMLElement>(`.${styles.flake}`));
            for (const flake of flakes) {
                const size = parseFloat(flake.style.width);
                expect(size).toBeGreaterThanOrEqual(1);
                expect(size).toBeLessThanOrEqual(6);
                expect(parseFloat(flake.style.animationDelay)).toBeLessThanOrEqual(0);
            }
        });

        it('tip 渲染为中央提示文字并替代默认读屏文案', () => {
            render(<Loading tip="正在连接岛屿" />);
            expect(screen.getByText('正在连接岛屿')).toHaveClass(styles.tip);
            expect(screen.queryByText('加载中')).not.toBeInTheDocument();
        });

        it('active=false 初始不渲染任何内容', () => {
            const { container } = render(<Loading active={false} />);
            expect(container.firstChild).toBeNull();
        });

        it('zIndex 默认 3000，可通过 prop 覆盖', () => {
            const { container, rerender } = render(<Loading />);
            expect(container.firstChild).toHaveStyle({ zIndex: '3000' });
            rerender(<Loading zIndex={5000} />);
            expect(container.firstChild).toHaveStyle({ zIndex: '5000' });
        });

        it('透传 className 与 style 到根元素', () => {
            const { container } = render(<Loading className="custom-class" data-scope="snow" />);
            expect(container.firstChild).toHaveClass('custom-class');
            expect(container.firstChild).toHaveAttribute('data-scope', 'snow');
        });
    });

    describe('delay 延迟显示', () => {
        afterEach(() => {
            vi.useRealTimers();
        });

        it('delay 时间内不渲染，到时后出现', () => {
            vi.useFakeTimers();
            const { container } = render(<Loading delay={300} />);
            expect(container.firstChild).toBeNull();
            act(() => vi.advanceTimersByTime(300));
            expect(screen.getByRole('status')).toBeInTheDocument();
        });

        it('delay=0 立即显示', () => {
            render(<Loading delay={0} />);
            expect(screen.getByRole('status')).toBeInTheDocument();
        });

        it('active 切换为 true 时重新计时', () => {
            vi.useFakeTimers();
            const { rerender } = render(<Loading delay={300} active={false} />);
            rerender(<Loading delay={300} active />);
            expect(screen.queryByRole('status')).toBeNull();
            act(() => vi.advanceTimersByTime(299));
            expect(screen.queryByRole('status')).toBeNull();
            act(() => vi.advanceTimersByTime(1));
            expect(screen.getByRole('status')).toBeInTheDocument();
        });
    });

    describe('渐变消失', () => {
        afterEach(() => {
            vi.useRealTimers();
        });

        it('active→false 后保持挂载并加 exiting 类（淡出中）', () => {
            vi.useFakeTimers();
            const { rerender } = render(<Loading />);
            rerender(<Loading active={false} />);
            const status = screen.getByRole('status');
            expect(status).toBeInTheDocument();
            expect(status).toHaveClass(styles.exiting);
        });

        it('exiting 时根元素以 fadeDuration 作为 transition-duration', () => {
            vi.useFakeTimers();
            const { rerender } = render(<Loading fadeDuration={1.5} />);
            rerender(<Loading fadeDuration={1.5} active={false} />);
            const status = screen.getByRole('status') as HTMLElement;
            expect(status.style.transitionDuration).toBe('1.5s');
        });

        it('fadeDuration 走完后卸载雪花屏', () => {
            vi.useFakeTimers();
            const { rerender } = render(<Loading fadeDuration={0.6} />);
            rerender(<Loading fadeDuration={0.6} active={false} />);
            expect(screen.getByRole('status')).toBeInTheDocument();
            act(() => vi.advanceTimersByTime(600));
            expect(screen.queryByRole('status')).toBeNull();
        });

        it('淡出途中恢复 active：立即取消卸载并回到不透明', () => {
            vi.useFakeTimers();
            const { rerender } = render(<Loading fadeDuration={0.6} />);
            rerender(<Loading fadeDuration={0.6} active={false} />);
            // 淡出到一半时恢复开启
            act(() => vi.advanceTimersByTime(300));
            rerender(<Loading fadeDuration={0.6} active />);
            const status = screen.getByRole('status');
            expect(status).toBeInTheDocument();
            expect(status).not.toHaveClass(styles.exiting);
            // 恢复后不再有任何计时器将其卸载
            act(() => vi.advanceTimersByTime(5_000));
            expect(screen.getByRole('status')).toBeInTheDocument();
        });
    });
});
