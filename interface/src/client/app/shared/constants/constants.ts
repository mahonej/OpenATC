import { Script } from '../classes/index';

export const SCRIPTS: Script[] = [
    {
        id: 1,
        name: 'Supreme New York',
        url: 'supremenewyork.com',
        img: './assets/supreme.jpeg',
        filename: 'supreme.py',
        inputs: [
            {
                type: 'time',
                label: 'Script start time',
                description: `Time to start checking for a drop. Defaults to 10:59:45 AM`,
                placeholder: undefined,
                values: [],
                restriction: undefined
            },
            {
                type: 'number',
                label: 'Drop check interval (seconds)',
                description: `How often to check for a drop once the script has started.
                                Defaults to 0.1 second`,
                placeholder: '0.1',
                values: [],
                restriction: {
                    min: 0
                }
            },
            {
                type: 'number',
                label: 'Ghost checkout delay (seconds)',
                description: `Delay amount after the item has been added to your cart.
                                Meant to prevent ghost (false) checkouts that occur when
                                a script checks out too quickly. Defaults to 0 seconds.`,
                placeholder: '0',
                values: [],
                restriction: {
                    min: 0
                }
            }
        ],
        item: [
            {
                type: 'select',
                label: 'Item category',
                name: 'category',
                description: `Category in which to look for the item.`,
                placeholder: undefined,
                values: ['jackets', 'shirts', 'tops/sweaters',
                         'sweatshirts', 'pants', 't-shirts', 'hats',
                         'bags', 'accessories', 'shoes', 'skate'],
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Model keywords',
                name: 'model',
                description: `Item name keywords. ALL keywords must be in the item title.`,
                placeholder: 'Ex. Hanes, Socks',
                values: [],
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Item color',
                name: 'color',
                description: `Item color to look for.`,
                placeholder: 'Ex. White',
                values: [],
                restriction: undefined
            },
            {
                type: 'select',
                label: 'Item size',
                name: 'size',
                description: `Size of the item.`,
                placeholder: undefined,
                values: ['small', 'medium', 'large', 'xlarge', 'n/a'],
                restriction: undefined
            }
        ]
    }
]

export const TABS: any[] = [
    {
        name: 'add',
        text: 'Add item',
        icon: 'plus'
    },
    {
        name: 'settings',
        text: 'Script settings',
        icon: 'cog'
    }
]