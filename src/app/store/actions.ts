export const NAV_START = 'NAV_START';
export const NAV_END = 'NAV_END';
export const NAV_ERROR = 'NAV_ERROR';
export const NAV_OPEN = 'NAV_OPEN';
export const NAV_CLOSE = 'NAV_CLOSE';

export const setNavStart = (isNavStart: boolean) => ({
    type: NAV_START,
    payload: {
        isNavStart,
        isNavEnd: false
    }
});

export const setNavEnd = (isNavEnd: boolean) => ({
    type: NAV_END,
    payload: {
        isNavStart: false,
        isNavEnd
    }
});

export const setNavError = (isNavError: boolean) => ({
    type: NAV_ERROR,
    payload: {
        isNavStart: false,
        isNavEnd: false,
        isNavError
    }
});

export const setNavOpen = (isNavOpen: boolean) => ({
    type: NAV_OPEN,
    payload: {
        isNavOpen: isNavOpen
    }
});

export const setNavClose = (isNavOpen: boolean) => ({
    type: NAV_CLOSE,
    payload: {
        isNavOpen: isNavOpen
    }
});