## 插件说明

    一个简单的jQuery省市联动插件。

## 下载地址

[release](https://github.com/soulteary/jquery-city-select/releases)

##插件使用

- 默认有两个下拉框的时候

```
$('#province, #city').citylist({data:data, id:'id', children:'citys',name:'name',metaTag:'name'});
```

- 只有一个下拉框的时候

```
$('#all').citylist({data:data, id:'id', children:'citys',name:'name',metaTag:'name'});
```

- 有默认预选城市的时候，且有两个下拉框

```
$('#pre-province, #pre-city').citylist({data:data, id:'id', children:'citys',name:'name',metaTag:'name',selected:[14,1401]});
```

- 有默认预选城市的时候，且只有一个下拉框

```
$('#pre-all').citylist({data:data, id:'id', children:'citys',name:'name',metaTag:'name',idVal:true,selected:1401});
```

## 演示地址

[演示地址](http://thecdn.sinaapp.com/page/demo/jq-select/)
