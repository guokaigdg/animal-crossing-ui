import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Background } from './Background';
import styles from './background.module.less';

describe('Background', () => {
    it('默认 type=dots：仅应用基础 background 类（dots 由默认背景实现）', () => {
        const { container } = render(<Background />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveClass(styles.background);
    });

    it('支持自定义 type=sprinkles', () => {
        const { container } = render(<Background type="sprinkles" />);
        expect(container.firstChild).toHaveClass(styles.sprinkles);
    });

    it('渲染 children 于背景之上', () => {
        render(
            <Background>
                <p>岛屿内容</p>
            </Background>
        );
        expect(screen.getByText('岛屿内容')).toBeInTheDocument();
    });

    it('应用 className 与 style', () => {
        const { container } = render(<Background className="x" style={{ height: 100 }} />);
        const root = container.firstChild as HTMLElement;
        expect(root).toHaveClass('x');
        expect(root).toHaveStyle({ height: '100px' });
    });
});
