import { util } from "../index";

const INITIAL_COLOR = '#ababab';
const SHIFT = 20;

test('lighten color',  () =>  {
    const lighten = util.lightenDarkenColor(INITIAL_COLOR, SHIFT);
    expect(lighten).toBe('#bfbfbf');
});

test('darken color',  () =>  {
    const lighten = util.lightenDarkenColor(INITIAL_COLOR, SHIFT);
    const darken = util.lightenDarkenColor(lighten, -SHIFT);
    expect(darken).toBe(INITIAL_COLOR);
});