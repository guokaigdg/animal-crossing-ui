import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HeartIcon } from './src';
import { Icon, ICON_LIST } from './Icon';
import styles from './icon.module.less';

describe('Icon', () => {
    it('name 模式渲染内置 svg 图标并应用 base 类名', () => {
        const { container } = render(<Icon name="Heart" />);
        const root = container.firstChild as HTMLElement;
        expect(root.tagName).toBe('svg');
        expect(root).toHaveClass(styles.icon);
    });

    it('icon 模式渲染传入的内置图标组件', () => {
        const { container } = render(<Icon icon={HeartIcon} />);
        const root = container.firstChild as HTMLElement;
        expect(root.tagName).toBe('svg');
        expect(root.querySelector('path')).toBeTruthy();
    });

    it('size 应用为内联 width/height', () => {
        const { container } = render(<Icon name="Heart" size={32} />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveStyle({ width: '32px', height: '32px' });
    });

    it('支持字符串 size（如 100%）', () => {
        const { container } = render(<Icon name="Heart" size="100%" />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveStyle({ width: '100%' });
    });

    it('bounce=true 应用 icon-bounce', () => {
        const { container } = render(<Icon name="Heart" bounce />);
        expect(container.firstChild).toHaveClass(styles['icon-bounce']);
    });

    it('应用自定义 className 与 style', () => {
        const { container } = render(<Icon name="Heart" className="extra" style={{ opacity: 0.5 }} />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveClass('extra');
        expect(root).toHaveStyle({ opacity: '0.5' });
    });

    it('color 映射为 stroke、strokeWidth 映射为 stroke-width', () => {
        const { container } = render(<Icon name="Heart" color="#ff0000" strokeWidth={3} />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveAttribute('stroke', '#ff0000');
        expect(root).toHaveAttribute('stroke-width', '3');
    });

    it('未传 color / strokeWidth 时不覆盖内置默认值', () => {
        const { container } = render(<Icon name="Heart" />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveAttribute('stroke', '#2A2A2A');
        expect(root).toHaveAttribute('stroke-width', '3.5');
    });

    it('src 模式渲染 span 并设置 backgroundImage', () => {
        const { container } = render(<Icon src="/foo/custom-001.png" />);
        const root = container.firstChild as HTMLElement;
        expect(root.tagName).toBe('SPAN');
        expect(root).toHaveStyle({ backgroundImage: 'url(/foo/custom-001.png)' });
    });

    it('未传 size 时默认 24px', () => {
        const { container } = render(<Icon name="Heart" />);
        expect(container.firstChild).toHaveStyle({ width: '24px', height: '24px' });
    });

    it('既无 name/icon 也无 src 时渲染空 span、无 backgroundImage', () => {
        const { container } = render(<Icon />);
        const root = container.firstChild as HTMLElement;
        expect(root.tagName).toBe('SPAN');
        expect(root).toHaveClass(styles.icon);
        expect(root.style.backgroundImage).toBe('');
    });

    it('name 模式（非 src）不设置 backgroundImage', () => {
        const { container } = render(<Icon name="Heart" />);
        const root = container.firstChild as HTMLElement;
        expect(root.style.backgroundImage).toBe('');
    });

    it('bounce 默认 false，不应用 icon-bounce', () => {
        const { container } = render(<Icon name="Heart" />);
        expect(container.firstChild).not.toHaveClass(styles['icon-bounce']);
    });

    it('icon 优先级高于 name', () => {
        const { container } = render(<Icon name="Heart" icon={HeartIcon} />);
        const root = container.firstChild as HTMLElement;
        expect(root.tagName).toBe('svg');
    });

    it('透传未知属性到根节点（如 data-* / aria-label）', () => {
        const { container } = render(<Icon name="Heart" data-testid="my-icon" aria-label="爱心" />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveAttribute('data-testid', 'my-icon');
        expect(root).toHaveAttribute('aria-label', '爱心');
        // a11y 契约：aria-label 必须作为可访问名被屏幕阅读器读出
        expect(root).toHaveAccessibleName('爱心');
    });

    it('无 aria-label 的图标默认 aria-hidden（装饰性）', () => {
        const { container } = render(<Icon name="Heart" />);
        expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
    });

    it('style 可覆盖默认的 width/height', () => {
        const { container } = render(<Icon name="Heart" size={32} style={{ width: 50 }} />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveStyle({ width: '50px', height: '32px' });
    });

    it('ICON_LIST 含全部 101 个图标且无重复', () => {
        const names = ICON_LIST.map((i) => i.name);
        expect(names.length).toBe(101);
        expect(new Set(names).size).toBe(names.length);
        expect(names).toContain('Heart');
        expect(names).toContain('Wifi');
    });

    it('ICON_LIST 每项都带非空 label', () => {
        ICON_LIST.forEach(({ label }) => {
            expect(typeof label).toBe('string');
            expect(label.length).toBeGreaterThan(0);
        });
    });
});
