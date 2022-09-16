import instance from "./instance"


//物流
export function getData(params){
    return instance({
        method:"get",
        url:"/logistics/getlist",
        params
    })
}
export function getData2(params){
    return instance({
        method:"get",
        url:"/produce/getlist",
        params
    })
}
export function getData3(params){
    return instance({
        method:"get",
        url:"/productsale/getlist",
        params
    })
}
export function getData4(params){
    return instance({
        method:"get",
        url:"/sale/getlist",
        params
    })
}
export function getData5(params){
    return instance({
        method:"get",
        url:"/supply/getlist",
        params
    })
}


