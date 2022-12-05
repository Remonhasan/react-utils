/*
xs: "screen and (max-width: 575.999px)", // Cell Phone 576
sm: "screen and (min-width: 576px) and (max-width: 767.999px)", // Flat 768
md: "screen and (min-width: 768px) and (max-width: 991.999px)", // Note Book 992
lg: "screen and (min-width: 920px) and (max-width: 1199.999px)", // Note Book 1200
xl: "screen and (min-width: 1200px) and (max-width: 1599.999px)", // Note Book 1600
xxl: "screen and (min-width: 1200px)" // Desktop 1600.001
*/

export const FORM_ITEM_HORIZONTAL_LAYOUT = {
    style: { width: '100%' },
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
};

export const LAYOUT_FORM_ITEM_SINGLE = {
    normal: {
        labelCol: {
            xs: { span: 8 },
            sm: { span: 6 },
            md: { span: 5 },
            lg: { span: 4 },
            xl: { span: 4 },
            xxl: { span: 2 },
        },
        wrapperCol: {
            xs: { span: 24  },
            sm: { span: 24  },
            md: { span: 24  },
            lg: { span: 24  },
            xl: { span: 24  },
            xxl: { span: 24 },
        },
    },
    tail: {
        labelCol: {
            xs: { span: 8, offset: 0 },
            sm: { span: 6, offset: 0 },
            md: { span: 5, offset: 0 },
            lg: { span: 4, offset: 0 },
            xl: { span: 4, offset: 0 },
            xxl: { span: 2, offset: 0 },
        },
        wrapperCol: {
            xs: { span: 24, offset: 0  },
            sm: { span: 24, offset: 0  },
            md: { span: 24, offset: 0  },
            lg: { span: 24, offset: 0  },
            xl: { span: 24, offset: 0  },
            xxl: { span: 24, offset: 0  },
        },
    },
};

export const LAYOUT_FORM_ITEM_MODAL = {
    normal: {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 24 },
            xxl: { span: 24 },
        },
        wrapperCol: {
            xs: { span: 24  },
            sm: { span: 24  },
            md: { span: 24  },
            lg: { span: 24  },
            xl: { span: 24  },
            xxl: { span: 24 },
        },
    },
    tail: {
        labelCol: {
            xs: { span: 8, offset: 0 },
            sm: { span: 6, offset: 0 },
            md: { span: 5, offset: 0 },
            lg: { span: 4, offset: 0 },
            xl: { span: 4, offset: 0 },
            xxl: { span: 2, offset: 0 },
        },
        wrapperCol: {
            xs: { span: 24, offset: 0  },
            sm: { span: 24, offset: 0  },
            md: { span: 24, offset: 0  },
            lg: { span: 24, offset: 0  },
            xl: { span: 24, offset: 0  },
            xxl: { span: 24, offset: 0  },
        },
    },
};

export const LAYOUT_FORM_ITEM_TWO = {
    normal: {
        labelCol: {
            xs: { span: 8 },
            sm: { span: 6 },
            md: { span: 5 },
            lg: { span: 4 },
            xl: { span: 4 },
            xxl: { span: 2 },
        },
        wrapperCol: {
            xs: { span: 16  },
            sm: { span: 18  },
            md: { span: 19  },
            lg: { span: 20  },
            xl: { span: 20  },
            xxl: { span: 22 },
        },
    },
    tail: {
        labelCol: {
            xs: { span: 8, offset: 0 },
            sm: { span: 6, offset: 0 },
            md: { span: 5, offset: 0 },
            lg: { span: 4, offset: 0 },
            xl: { span: 4, offset: 0 },
            xxl: { span: 2, offset: 0 },
        },
        wrapperCol: {
            xs: { span: 16, offset: 0  },
            sm: { span: 18, offset: 0  },
            md: { span: 19, offset: 0  },
            lg: { span: 20, offset: 0  },
            xl: { span: 20, offset: 0  },
            xxl: { span: 22, offset: 0  },
        },
    },
};

export const LAYOUT_FORM_ITEM_THREE = {
    normal: {
        labelCol: {
            xs: { span: 8 },
            sm: { span: 6 },
            md: { span: 5 },
            lg: { span: 4 },
            xl: { span: 4 },
            xxl: { span: 2 },
        },
        wrapperCol: {
            xs: { span: 16  },
            sm: { span: 18  },
            md: { span: 19  },
            lg: { span: 20  },
            xl: { span: 20  },
            xxl: { span: 22 },
        },
    },
    tail: {
        labelCol: {
            xs: { span: 8, offset: 0 },
            sm: { span: 6, offset: 0 },
            md: { span: 5, offset: 0 },
            lg: { span: 4, offset: 0 },
            xl: { span: 4, offset: 0 },
            xxl: { span: 2, offset: 0 },
        },
        wrapperCol: {
            xs: { span: 16, offset: 0  },
            sm: { span: 18, offset: 0  },
            md: { span: 19, offset: 0  },
            lg: { span: 20, offset: 0  },
            xl: { span: 20, offset: 0  },
            xxl: { span: 22, offset: 0  },
        },
    },
};

export const LAYOUT_COL_SINGLE = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
};

export const LAYOUT_COL_TWO = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
};

export const LAYOUT_COL_THREE = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 8,
};

export const LAYOUT_COL_FOUR = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
};

export const LAYOUT_COL_FIVE = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
};

export const LAYOUT_COL_SIX = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 6,
    xxl: 4,
};

export const LAYOUT_COL_SEVEN = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 4,
    xl: 6,
    xxl: 6,
};

export const LAYOUT_COL_EIGHT = {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
    xxl: 3,
};
