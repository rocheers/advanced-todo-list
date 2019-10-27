export const makePage = (total,cur,around) => {
    let result = [];
    let baseCount = around * 2 + 1 + 2 + 2 + 2; //总共元素个数
    let surplus = baseCount - 4; //只出现一个省略号 剩余元素个数
    let startPosition = 1 + 2 + around + 1;//前面出现省略号的临界点
    let endPosition = total - 2 - around - 1;//后面出现省略号的临界点

    if(total <= baseCount - 2){ //全部显示 不出现省略号
        result =  Array.from({length: total}, (v, i) => i + 1);
    }else{ //需要出现省略号
        if(cur < startPosition){ //1.只有后面出现省略号
            result = [...Array.from({length: surplus}, (v, i) => i + 1),"...",total]
        }else if(cur > endPosition) { //2.只有前边出现省略号
            result = [1,'...',...Array.from({length: surplus}, (v, i) => total - surplus + i + 1)]
        }else{ //3.两边都有省略号
            result = [1,'...',...Array.from({length: around * 2 + 1}, (v, i) => cur - around + i),'...',total]
        }
    }
    return result
}