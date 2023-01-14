import myAxios from "..";

// 高性价比数据
export function getGoodpriceInfo() {
    return myAxios.get({
        url: '/home/goodprice'
    })
}

// 高评分数据
export function getHighScoreInfo() {
    return myAxios.get({
        url: '/home/highscore'
    })
}

// 折扣数据
export function getDiscountInfo() {
    return myAxios.get({
        url: '/home/discount'
    })
}

// 热门推荐
export function getHotRecommendInfo() {
    return myAxios.get({
        url: '/home/hotrecommenddest'
    })
}

// 向往城市
export function getLongforInfo() {
    return myAxios.get({
        url: '/home/longfor'
    })
}

// Plus房源
export function getHomePlusInfo() {
    return myAxios.get({
        url: '/home/plus'
    })
}