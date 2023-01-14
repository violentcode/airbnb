import myAxios from "..";

export function getEntireList(offset = 0, size = 20) {
    return myAxios.get({
        url: '/entire/list',
        params: {
            offset,
            size
        }
    })
}