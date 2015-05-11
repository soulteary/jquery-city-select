## 插件说明

    一个简单的jQuery省市联动插件，支持AMD/CMD方式调用，当然，也支持直接引用。

## 下载地址

[Release](https://github.com/soulteary/jquery-city-select/releases)

## 插件使用

- 默认有两个下拉框的时候

```
$('#province, #city').citylist({
    data    : data,
    id      : 'id',
    children: 'cities',
    name    : 'name',
    metaTag : 'name'
});
```

- 只有一个下拉框的时候

```
$('#all').citylist({
    data    : data,
    id      : 'id',
    children: 'cities',
    name    : 'name',
    metaTag : 'name'
});
```

- 有默认预选城市的时候，且有两个下拉框

```
$('#pre-province, #pre-city').citylist({
    data    : data,
    id      : 'id',
    children: 'cities',
    name    : 'name',
    metaTag : 'name',
    selected: [14, 1401]
});
```

- 有默认预选城市的时候，且只有一个下拉框

```
$('#pre-all').citylist({
    data    : data,
    id      : 'id',
    children: 'cities',
    name    : 'name',
    metaTag : 'name',
    idVal   : true,
    selected: 1401
});
```

## 演示地址

- [演示地址](http://soulteary.github.io/jquery-city-select/)
- [页面中直接引用](http://soulteary.github.io/jquery-city-select/demo/index.html)
- [作为AMD模块使用](http://soulteary.github.io/jquery-city-select/requirejs.html)
- [作为CMD模块使用](http://soulteary.github.io/jquery-city-select/seajs.html)