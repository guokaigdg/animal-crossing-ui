import React, { useState } from 'react';
import { Pagination, Table } from '../../../src';
import { ApiRow, ApiTable, CodeBlock, DemoTag, labelStyle, sectionStyle, sectionTitleStyle } from '../../tools';

const PAGINATION_API: ApiRow[] = [
    { prop: 'total', desc: '数据总数', type: 'number', defaultVal: '-', required: true },
    { prop: 'current', desc: '当前页（受控）', type: 'number', defaultVal: '-' },
    { prop: 'defaultCurrent', desc: '默认当前页', type: 'number', defaultVal: '1' },
    { prop: 'pageSize', desc: '每页条数（受控）', type: 'number', defaultVal: '-' },
    { prop: 'defaultPageSize', desc: '默认每页条数', type: 'number', defaultVal: '10' },
    { prop: 'onChange', desc: '页码或每页条数变化回调', type: '(page, pageSize) => void', defaultVal: '-' },
    { prop: 'onShowSizeChange', desc: '每页条数变化回调', type: '(current, size) => void', defaultVal: '-' },
    { prop: 'showSizeChanger', desc: '是否显示每页条数切换器', type: 'boolean', defaultVal: 'false' },
    { prop: 'pageSizeOptions', desc: '可选的每页条数列表', type: 'number[]', defaultVal: '[10, 20, 50, 100]' },
    { prop: 'showQuickJumper', desc: '是否显示快速跳转输入框', type: 'boolean', defaultVal: 'false' },
    { prop: 'showTotal', desc: '是否显示总条数文本', type: 'boolean', defaultVal: 'false' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', defaultVal: 'false' },
    {
        prop: 'variant',
        desc: '配色：orange 琥珀橘（默认）/ teal 青',
        type: `'orange' | 'teal'`,
        defaultVal: "'orange'",
    },
];

const COLUMNS = [
    { title: '岛民', dataIndex: 'name', width: 120 },
    { title: '年龄', dataIndex: 'age', width: 80, align: 'center' as const },
    { title: '岛屿', dataIndex: 'island' },
];

const ISLANDERS = [
    'Mochi|26|彩虹岛',
    'Pudding|24|彩虹岛',
    'Cream|28|好评岛',
    'Yuki|30|小岛',
    'Haru|22|摸鱼岛',
    'Kaori|45|小岛',
    'Momo|38|博物馆岛',
    'Rin|35|艺术品岛',
    'Sora|29|拍照岛',
    'Hana|60|萝卜岛',
    'Hoshi|18|夜光岛',
    'Koko|33|鞋岛',
    'Ito|27|裁缝岛',
    'Ishi|41|石头岛',
    'Kari|36|猎人之岛',
    'Nae|31|园艺岛',
    'Oto|34|音乐岛',
    'Seki|37|化石岛',
    'Ken|25|旅行岛',
    'Ame|23|云朵岛',
    'Penguin|20|冰岛',
    'Boku|21|呆萌岛',
    'Shinbun|39|新闻岛',
    'Tento|26|体操岛',
    'Onsen|44|温泉岛',
    'Kenko|28|健身岛',
    'Tsubomi|27|花岛',
    'Omocha|24|玩具岛',
    'Shiori|29|书本岛',
    'Ribon|32|派对岛',
].map((row, i) => {
    const [name, age, island] = row.split('|');
    return { key: String(i + 1), name, age: Number(age), island };
}) as Record<string, unknown>[];

const PaginationDemo: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    return (
        <div style={sectionStyle}>
            <div style={sectionTitleStyle}>
                Pagination <DemoTag>分页</DemoTag> <DemoTag>受控 / 非受控</DemoTag>
            </div>

            <div style={labelStyle}>基础用法</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DemoTag style={{ fontFamily: "'Noto Sans SC', 'Nunito', sans-serif" }}>orange（默认）</DemoTag>
                    <Pagination total={85} defaultPageSize={10} defaultCurrent={4} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DemoTag>teal</DemoTag>
                    <Pagination total={85} defaultPageSize={10} defaultCurrent={4} variant="teal" />
                </div>
            </div>

            <div style={labelStyle}>总条数 + 每页条数切换</div>
            <Pagination total={85} defaultCurrent={3} showTotal showSizeChanger pageSizeOptions={[10, 20, 50]} />

            <div style={labelStyle}>快速跳转（受控）</div>
            <Pagination
                total={500}
                current={page}
                pageSize={pageSize}
                showTotal
                showQuickJumper
                onChange={(p, s) => {
                    setPage(p);
                    setPageSize(s);
                }}
            />

            <div style={labelStyle}>禁用</div>
            <Pagination total={85} defaultCurrent={4} disabled />

            <div style={labelStyle}>配合 Table（pagination 属性）</div>
            <Table
                columns={COLUMNS}
                dataSource={ISLANDERS}
                pagination={{
                    defaultPageSize: 5,
                    showTotal: true,
                    showSizeChanger: true,
                    pageSizeOptions: [5, 10, 20],
                }}
            />

            <CodeBlock
                code={`import { Pagination, Table } from 'animal-island-ui';

// 独立使用（受控）
<Pagination
    total={500}
    current={page}
    pageSize={20}
    showTotal
    showQuickJumper
    onChange={(p, s) => setPage(p)}
/>

// Table 内置客户端分页
<Table
    columns={columns}
    dataSource={data}
    pagination={{ defaultPageSize: 5, showTotal: true, showSizeChanger: true }}
/>`}
            />
            <ApiTable rows={PAGINATION_API} />
        </div>
    );
};

export default PaginationDemo;
