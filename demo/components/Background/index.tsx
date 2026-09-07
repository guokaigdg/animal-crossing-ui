import React from 'react';
import { Background } from '../../../src';
import { labelStyle, sectionStyle, sectionTitleStyle, DemoTag, ApiTable, ApiRow, CodeBlock } from '../../tools';

const BACKGROUND_API: ApiRow[] = [
    { prop: 'type', desc: '背景图案类型', type: `'dots' | 'sprinkles'`, defaultVal: "'dots'" },
    { prop: 'children', desc: '子内容，渲染在图案背景之上', type: 'ReactNode', defaultVal: '-' },
    { prop: 'className', desc: '自定义类名', type: 'string', defaultVal: '-' },
    {
        prop: 'style',
        desc: '自定义样式',
        type: 'CSSProperties',
        defaultVal: '-',
    },
    { prop: '...rest', desc: '透传其余 div 原生属性', type: 'HTMLAttributes', defaultVal: '-' },
];

const previewBox: React.CSSProperties = {
    display: 'grid',
    placeItems: 'center',
    height: 180,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    color: '#725d42',
    fontWeight: 600,
    fontSize: 15,
};

const BackgroundDemo: React.FC = () => (
    <div style={sectionStyle}>
        <div style={sectionTitleStyle}>
            Background <DemoTag>2 types · zero image assets</DemoTag>
        </div>
        <div style={labelStyle}>dots（波点，默认）</div>
        <Background type="dots" style={previewBox}>
            波点背景
        </Background>
        <div style={labelStyle}>sprinkles（彩色针糖）</div>
        <Background type="sprinkles" style={previewBox}>
            彩色针糖背景
        </Background>
        <div style={labelStyle}>承载内容（children 渲染在图案之上）</div>
        <Background type="sprinkles" style={{ ...previewBox, padding: 24 }}>
            <span>卡片内容、表单、图表都可以放在这里</span>
        </Background>
        <CodeBlock
            code={`import React from 'react';
import { Background } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 波点壁纸（默认） */}
            <Background type="dots" style={{ height: 200 }} />

            {/* 彩色针糖壁纸 */}
            <Background type="sprinkles" style={{ height: 200 }} />

            {/* 作为内容区块的背景容器 */}
            <Background type="sprinkles" style={{ minHeight: 200, padding: 24 }}>
                <p>内容渲染在图案背景之上</p>
            </Background>
        </div>
    );
};

export default App;`}
        />
        <ApiTable rows={BACKGROUND_API} />
    </div>
);

export default BackgroundDemo;
