var store = [{
        "title": "test",
        "excerpt":"can you see me?  ","categories": ["tech"],
        "tags": [],
        "url": "/tech/java/",
        "teaser": null
      },{
        "title": "Generative Advererial Model",
        "excerpt":"This part will put my summary about GAN.  ","categories": ["cs"],
        "tags": [],
        "url": "/cs/gan-review/",
        "teaser": null
      },{
        "title": "Software Engineering course project",
        "excerpt":"This is my project for software engineering. We use Java and JavaFX to build an application.  ","categories": ["project"],
        "tags": [],
        "url": "/project/javaFX-project/",
        "teaser": null
      },{
        "title": "automatic cat feeder",
        "excerpt":"The automatic cat feeder is the project I done for my embeded system design course.  ","categories": ["project"],
        "tags": [],
        "url": "/project/automatic-cat-feeder/",
        "teaser": null
      },{
        "title": "6 PDF Readers Reviews",
        "excerpt":"前言 pdf阅读器对我来说是非常重要的学习工具，但同时它也仅仅是一个学习工具。对我来说，它的大部分使用场景都是读paper或者是读课件读textbook，白嫖惯了不怎么有买纸质书的习惯。我也有ipad，但是notability用来记笔记我的字太丑，加上每次强迫症画条直线都要半天，标注结束都忘记自己要干嘛了。因此，我对pdf阅读器的要求主要集中在阅读体验和标注的便捷上，对于其他编辑pdf的功能，我暂时并不需要。在大学四年的学习中，我使用过许多的pdf浏览器，在此我把他们的最新版本都重新下载了一遍，也算是重温旧梦吧^_^ 正文 1. BookxNote Pro Screenshot from BookxNote Pro 非常干净的一款pdf阅读器，集成了一个markdown笔记本，同时支持脑图、大纲等功能（可惜我不太喜欢用） 我对pdf浏览器的一大要求就是文本的占比高，最好能把左右的工具栏页面等等隐藏起来，这款就符合我的要求 这个reader的工具也基本满足所有需求，同时滑动非常流畅，体验非常丝滑，也没有要登录或者升级的弹窗或者广告 我用电脑看pdf的另一个要求就是操作越少越好，像是高亮和划线，我希望一旦选中文字，工具框就能跳出来，这样从选中到高亮只需要一次操作，能让我更加专注于文字本身 这个浏览器还有四种颜色主题，暖色、黑夜模式和护眼模式，我都觉得很漂亮舒适 写到这完全想不起来自己当时放弃这个pdf浏览器的理由了，可能刚更新2.0所以我之前不喜欢的地方被改正了？让我再用用看…… 2. Xodo PDF Reader Screenshot from Xodo 我用的时间最长的PDF浏览器了，可以说它塑造了我对这类软件的偏好：非常现代好看的UI，非常便捷简单的标注，同时几乎隐藏所有工具状态栏的zen mode，支持护眼模式。重复一遍，这四点是我个人对pdf浏览器最重要的四个需求 从图片就可以看出来了，只用最上面薄薄的一个框，内容占比高的惊人，标注也是选中文字就可以点一下要高亮还是下划线了 xodo还多一个波浪线呢….嘛，虽然可能很多人觉得我在尬吹，但是做笔记的时候多个花纹还是好的呀 xodo支持一些pdf的其他操作，像是merge，split， remove password等等，但是是付费版的功能，而且我真的只是用来看书看论文，所以还是免了 这一款的滑动也是很丝滑的，嗯，一直重复这一点就是为了diss adobe acrobat，不知道是我自己的设置问题还是它就是有问题 放弃它的最主要原因，是启动速度太慢了，同样开一个文件，别的所有浏览器都是一瞬间，只有这一款每次都需要loading好一会儿，并且偶尔还会出现死机闪退的现象，不知道是我个人情况还是真的软件本身问题。嗯，说不定代码内部一直有些问题吧… 另一个小问题，就是调整页面大小的时候没有fit to width， fit to page的选项，每次只能滑滚调节，强迫症每次看到最后一点白边简直百爪挠心 3. Microsoft Edge浏览器 旧版edge永远滴神~~ 可惜更新了之后拉跨了不少。但作为windows原装的pdf浏览器，已经远超隔壁chrome重度残疾的pdf reader了 edge的滑动速度是最快的，同时想要打开文件的时候直接把文件往浏览器里拖就可以，对于可以用电脑的开卷考试，绝对能帮你最快找到答案 edge的另一个优点是可以用插件，嗯，说的就是saladict，看英文书的时候查单词特别方便 可惜毕竟主要是浏览器而不是pdf阅读器，很多功能还是缺失或者有瑕疵。像是没有颜色主题切换，而且标注的时候，选中 -&gt;...","categories": ["tech"],
        "tags": [],
        "url": "/tech/pdf_reviews/",
        "teaser": null
      },{
        "title": "Build A GitHub Personal Home Page with Jekyll and Minimal Mistake Theme",
        "excerpt":"本文将简略介绍如何使用GitHub Pages来创建一个免费的静态个人网页。具体将分为三个部分：如何在GitHub上创建个人网页，如何使用minimal mistake主题来美化个人主页，如何使用Jekyll本地调试网页。 GitHub创建个人主页 具体步骤可参照 Quickstart for GitHub Pages 简单来说分为三步： 新建一个public repository，名字设置为USERNAME.github.io，如图： 其他设置均可维持default，结果是这样： 此时你可以选择直接本地init一个repo然后传上去，当然也可以通过Settings-&gt; Pages -&gt; choose a theme，在这里就可以自己挑选一个喜欢的主题然后开始往里面填充内容，如图： 选择后直接commit changes这时我们的网站就设置完成了，在repo的右下角About，Release等等有一个Environment显示Active，点击进入就能看到我们的网站部署成功了，这个网页默认是USERNAME.github.io： 在repository中，现在有两个文件_config.yaml和index.md。GitHub使用Jekyll来build网站页面，最终要的一个config文件就是_config.yml，现在里面设置了theme为XXX，所以我们的网站就有了这个主题的样式。同时我们的main page也不一定是index.html了，因为Jekyll支持将markdown格式转成网页格式，这将帮助我们更快的编写blog，markdown比起html还是方便很多的。 使用Minimal Mistake主题 完成了以上步骤，我们可以得到一个基础的网站了，免费的域名所有人都能访问到。但是…并不好看啊，而且功能好少，我想要更多的不同的分页面可以跳来跳去，我想要更多的艺术细节和更多不同样式的页面。 那我说，你可以全部自己手写网页，就好像别的各路大神写的精美绝伦的静态网页一样…当然，我是做不到啦，所以还是得嫖别人现成的。我选择的一个主题是Minimal Mistake。在官网上你可以看到非常细致的教程，而且作者一直有持续更新，所以不用担心bug或者缺少对新技术的支持。不仅如此，作者也会亲自下场回答问题，所以有不会的也可以写一个issue或者搜索minimal mistake + 问题，网上有很多的解答。 简单来讲，一个最快的方式就是直接Fork他的repo，具体步骤如下： 进入repo,直接点击右上角的fork，对，就在星星旁边，这样你就能得到一个repo 这时候你可以回头把自己之前的玩具网站删掉，delete那个repo或者重命名，并将现在这个minimal mistake重命名为USERNAME.github.io这样你就可以获得一个全新的模板： 现在的网页还是空空如也，但是你可以根据quick start guide的tutorial，自己来定制网页了。 使用Jekyll本地调试网页 如果说，每次我们改一点点东西，都需要push到GitHub上，等它build好才能看到效果，那速度也太慢了，所以我们可以在本地搭建一个测试环境，这样就只要一个功能完成再push一次，大大节约了我们debug的时间。 这部分内容主要参照Jekyll Doc编写，有兴趣的朋友也可以直接按照官网的教学来。 因为我害怕环境之间的冲突，所以额外创建了一个WSL2的Ubuntu20.04LTS来搭建这个环境，windows和Mac上可能会有所不同。而且讲道理linux上装这些东西真的方便好多好多… 安装prerequisite： # 安装Ruby sudo apt-get install ruby-full...","categories": ["tech"],
        "tags": [],
        "url": "/tech/build-github-page/",
        "teaser": null
      },{
        "title": "My recommendation for 15 chrome extensions",
        "excerpt":"前言 Google Chrome 是我用的最多的浏览器。一是因为对google账户的支持和同步，我的很多的密码，以及平时用google email注册登录的网站都需要谷歌来管理，二是因为它支持的各种extensions。这里就介绍几个我常用的extensions吧。 1. Adblock Plus - free ad blocker chrome必备插件，虽然现在已经被很多网站反屏蔽了，但是在针对youtube的时候特别好用，没有广告的youtube就是最好的影片分享网站。在浏览其他网页的时候，也能让你清净不少，强推！！！ 2. Adobe Acrobat 这个是优化Chrome的pdf浏览体验的。chrome自带的pdf预览器，没有outline也没有标注功能。这个插件不仅补足了这些缺憾，还同时可以将笔记存储在adobe的云上，笔记不会丢失也不必保存在本地。我有的时候需要用学校图书馆的电脑，notes就不需要专门用google doc传送了。这个插件还可以和本身的adobe reader相互配合，共享云文档，推荐！ 3. Better History chrome的浏览历史总是不够好看，同时各种搜索支持都不太好。Better history会覆盖掉原本的历史页面，赋予更好看的UI界面和更加强大有条理的历史排序与搜索功能，可以轻松的找到几天前偶然打开的网站。 4. CrossPilot 可以下载youtube视频。 5. Global Speed 调节所有网页上播放视频的速度，最高可以到16倍，同时每一级的调节也更加精细了。统一的快捷键设置，也让你在浏览不同视频网站的时候，可以用同一种快捷键调节速度。尤其是网课的视频，网络播放器一般只有三四种速度的选择，这个插件能帮助我在该快的时候快，该慢下来仔细听的地方就慢下来。 6. Mercury Reader 网站总是有很多弹窗广告，链接等等，同时网站自己的排版有时候也有些花里胡哨。这个插件能去除掉这些干扰，转换成类似于pdf的干净风格。让人能够静心专注于文字，还是很实用的。 7. Grammarly for Chrome 可以帮忙检查很多输入框的语法拼写，替换同义词和指出长句子的语法问题。像我这种英语菜鸡真的是很需要。 8. OneTab 找到了几个有用的网站，暂时关浏览器但是又不想把网页收进书签。这时候只要轻轻一点插件，所有网站就被收纳起来，同时也能把网页分成几个类分开保存，就和chrome本身的group一样，一部分是学习的，一部分是项目的，一部分是娱乐的等等。 9. Saladict 最最最好用的字典，打开很方便，拥有非常多种词典的API，同时一直有人维护更新。上网查文献，看pdf等等的时候，可以轻松点开词典，还有划词功能。几个词典之间也能够互相对比，找到更多的例句和更准确的解释，强烈推荐！ 10. SingleFile 将当前网页保存成一个html文件，非常实用的功能，看到一些文章可以通过这个方式下载下来，同时还能保证它的格式不会改变。 11....","categories": ["tech"],
        "tags": [],
        "url": "/tech/chrome-extensions/",
        "teaser": "/assets/images/chrome_extensions/chrome_extension_store.png"
      },{
        "title": "HKUST COMP4901U Computer Language Processing and Compiler Design",
        "excerpt":"introduction a language can be natural language, computer language, language of mathematics processing general-purpose programming languages: interpreter: execute instructions while traversing the program (Python) compiler: traverse program, generate executable code to run later (Rust, C) general compiler organization source code: for programmers, higher level for abstraction and productiveness target code:...","categories": ["cs"],
        "tags": [],
        "url": "/cs/complier_design/",
        "teaser": "/assets/images/compiler/header.png"
      },]
