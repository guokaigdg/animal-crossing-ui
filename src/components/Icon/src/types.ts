import { SVGProps, FC } from 'react';

/** Naive Icons 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
    /** 图标尺寸，宽高相等，默认 24 */
    size?: number | string;
    /** 描边颜色，默认 currentColor */
    color?: string;
    /** 描边宽度，默认 3.5（相对 48x48 画布） */
    strokeWidth?: number | string;
    /** 填充色，默认 none */
    fill?: string;
    /** 无障碍标题 */
    title?: string;
}

/** Naive Icons 调色板 */
export const NAIVE_PALETTE = {
    ink: '#2A2A2A',
    navy: '#264653',
    orange: '#E76F51',
    yellow: '#E9C46A',
    pink: '#F4A6A4',
    green: '#588157',
    teal: '#2A9D8F',
    brown: '#8B5E3C',
    cream: '#FAEDCD',
} as const;

export type PaletteColor = keyof typeof NAIVE_PALETTE;

/** Naive Icons 图标组件名（共 101 个） */
export type IconName =
    | 'Airplane'
    | 'Anchor'
    | 'Apple'
    | 'Balloon'
    | 'Bear'
    | 'Bee'
    | 'Bell'
    | 'Bicycle'
    | 'Bird'
    | 'Book'
    | 'Bookmark'
    | 'Bulb'
    | 'Butterfly'
    | 'Cactus'
    | 'Cake'
    | 'Calendar'
    | 'Camera'
    | 'Candle'
    | 'Car'
    | 'Cart'
    | 'Cat'
    | 'Chat'
    | 'Check'
    | 'Cherry'
    | 'Clock'
    | 'Close'
    | 'Cloud'
    | 'Code'
    | 'Coffee'
    | 'Compass'
    | 'CreditCard'
    | 'Dog'
    | 'Donut'
    | 'Download'
    | 'Edit'
    | 'Eye'
    | 'File'
    | 'Fish'
    | 'Flag'
    | 'Flame'
    | 'Flower'
    | 'Folder'
    | 'Fox'
    | 'Frog'
    | 'Gift'
    | 'Globe'
    | 'Headphones'
    | 'Heart'
    | 'Home'
    | 'Icecream'
    | 'Image'
    | 'Key'
    | 'Ladybug'
    | 'Lamp'
    | 'Leaf'
    | 'Lemon'
    | 'Location'
    | 'Lock'
    | 'Magnet'
    | 'Mail'
    | 'Map'
    | 'Mic'
    | 'Moon'
    | 'Mushroom'
    | 'Music'
    | 'Owl'
    | 'Paintbrush'
    | 'Pencil'
    | 'Penguin'
    | 'Phone'
    | 'Play'
    | 'Plus'
    | 'Rabbit'
    | 'Rainbow'
    | 'Refresh'
    | 'Rocket'
    | 'Sailboat'
    | 'Save'
    | 'Search'
    | 'Settings'
    | 'Share'
    | 'ShoppingBag'
    | 'Smile'
    | 'Snail'
    | 'Snowflake'
    | 'Star'
    | 'Strawberry'
    | 'Sun'
    | 'Tag'
    | 'Thermometer'
    | 'ThumbsUp'
    | 'Train'
    | 'Trash'
    | 'Tree'
    | 'Trophy'
    | 'Umbrella'
    | 'Upload'
    | 'User'
    | 'Video'
    | 'Watermelon'
    | 'Wifi';

/** Naive Icons 图标组件类型 */
export type IconComponent = FC<IconProps>;

/** Naive Icons 图标分类 */
export const ICON_CATEGORIES = [
    'interface',
    'action',
    'media',
    'navigation',
    'communication',
    'nature',
    'animals',
    'food',
    'objects',
    'transport',
    'emoji',
] as const;

export type IconCategory = (typeof ICON_CATEGORIES)[number];
