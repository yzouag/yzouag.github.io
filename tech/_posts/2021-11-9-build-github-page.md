---
title: "Build A GitHub Personal Home Page with Jekyll and Minimal Mistake Theme"
# header:
#   image: /assets/images/pdf_review/pdf.png
#   image_description: "PDF galleries from Microsoft Store"
#   caption: "PDF galleries from Microsoft Store"
toc: true
toc_label: "List of content"
sidebar:
  nav: "docs"
---

> 本文将简略介绍如何使用GitHub Pages来创建一个免费的静态个人网页。具体将分为三个部分：如何在GitHub上创建个人网页，如何使用minimal mistake主题来美化个人主页，如何使用Jekyll本地调试网页。

## GitHub创建个人主页

具体步骤可参照 [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)

简单来说分为三步：

1. 新建一个public repository，名字设置为`USERNAME.github.io`，如图：

   ![](\assets\images\github_pages\screenshot1.png)

   其他设置均可维持default，结果是这样：

   ![](\assets\images\github_pages\screenshot2.png)

2. 此时你可以选择直接本地init一个repo然后传上去，当然也可以通过`Settings`-> `Pages` -> `choose a theme`，在这里就可以自己挑选一个喜欢的主题然后开始往里面填充内容，如图：

   ![](\assets\images\github_pages\screenshot3.png)

3. 选择后直接commit changes这时我们的网站就设置完成了，在repo的右下角About，Release等等有一个Environment显示Active，点击进入就能看到我们的网站部署成功了，这个网页默认是`USERNAME.github.io`：

   ![](\assets\images\github_pages\screenshot4.png)

   ![](\assets\images\github_pages\screenshot5.png)

*在repository中，现在有两个文件`_config.yaml`和`index.md`。GitHub使用Jekyll来build网站页面，最终要的一个config文件就是`_config.yml`，现在里面设置了theme为XXX，所以我们的网站就有了这个主题的样式。同时我们的main page也不一定是`index.html`了，因为Jekyll支持将markdown格式转成网页格式，这将帮助我们更快的编写blog，markdown比起html还是方便很多的。*

## 使用Minimal Mistake主题

完成了以上步骤，我们可以得到一个基础的网站了，免费的域名所有人都能访问到。但是...并不好看啊，而且功能好少，我想要更多的不同的分页面可以跳来跳去，我想要更多的艺术细节和更多不同样式的页面。

那我说，你可以全部自己手写网页，就好像别的各路大神写的精美绝伦的静态网页一样...当然，我是做不到啦，所以还是得嫖别人现成的。我选择的一个主题是[Minimal Mistake](https://mmistakes.github.io/minimal-mistakes/)。在官网上你可以看到非常细致的教程，而且作者一直有持续更新，所以不用担心bug或者缺少对新技术的支持。不仅如此，作者也会亲自下场回答问题，所以有不会的也可以写一个issue或者搜索minimal mistake + 问题，网上有很多的解答。

简单来讲，一个最快的方式就是直接Fork他的repo，具体步骤如下：

1. 进入[repo](https://github.com/mmistakes/minimal-mistakes),直接点击右上角的fork，对，就在星星旁边，这样你就能得到一个repo

   ![](\assets\images\github_pages\screenshot6.png)

2. 这时候你可以回头把自己之前的玩具网站删掉，delete那个repo或者重命名，并将现在这个minimal mistake重命名为`USERNAME.github.io`这样你就可以获得一个全新的模板：

   ![](\assets\images\github_pages\screenshot7.png)

现在的网页还是空空如也，但是你可以根据quick start guide的tutorial，自己来定制网页了。
