# CS2408

## Introduction

此项目为华中科技大学计算机类2408班第一学期新生实践课网页作业整合仓库。

## Use

更改`api/index.json`文件的`dormitories`即可

结构如下

````
  "dormitories": [
    {
      "name": "319",
      "sign": "",
      "url": "",
      "members": [
        {
          "name": "",
          "url": "",
          "intro": ""
        },
        {
          "name": "",
          "url": "",
          "intro": ""
        }
      ]
    },{
      "name": "320",
      "sign": "",
      "url": "",
      "members": [
        {
          "name": "",
          "url": "",
          "intro": ""
        },
        {
          "name": "",
          "url": "",
          "intro": ""
        }
      ]
    }
  ]
````

找到`dormitories`数组中`name`对应的寝室名称，在`sign`中写入寝室介绍，`url`中粘贴寝室页面的完整URL，`members`数组对应寝室中的成员，在其中的
`url`条目写入寝室成员网页的URL，并在`intro`条目中写入网页标题或简介即可。

随机推荐会根据`rand_num`中配置的数目每小时更新。

## Libraries

- jQuery 3.6.0
- Vue 3.2.31
- Bootstrap 5.1.3