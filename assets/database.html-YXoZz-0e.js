import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as t,c as s,a as e,e as l}from"./app-PPIbuU9G.js";const r={},h=l('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="术语" tabindex="-1"><a class="header-anchor" href="#术语"><span>术语</span></a></h3><ul><li>DBMS</li></ul><p>DBMS是数据库管理系统的简称，是一种重要的程序设计系统。它由一个相互关联的数据集合和一组访问这些数据的程序构成。</p><ul><li>数据库</li></ul><p>数据库是长期储存在计算机内、有组织、可共享的大量数据的集合。</p><p>数据库中的数据按照一定的数据模型组织，描述和存储，可以被各种用户共享，具有较小的冗余度，较高的数据独立性，并且易于拓展。</p><ul><li>数据库系统</li></ul><p>数据库系统由数据库、DBMS、应用程序和数据库管理员组成。</p>',9),o=l('<ul><li>数据模型</li></ul><p>数据模型是一种形式机制，用于数据建模，描述数据，数据之间的联系，数据的语义，数据上的操作和数据完整性约束的条件。</p><ul><li>数据库模式</li></ul><p>数据库模式是数据库中使用数据模型对数据建模所产生的设计结果。</p><p>对于关系数据库而言，数据库模式由一组关系模式构成。</p><ul><li>数据字典</li></ul><p>数据字典是DBMS维护的一系列内部表，用来存放元数据<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><h3 id="dbms的主要功能" tabindex="-1"><a class="header-anchor" href="#dbms的主要功能"><span>DBMS的主要功能</span></a></h3><ol><li>数据定义 提供数据定义语言DDL，用于定义数据库中的数据对象和它们的结构。</li><li>数据操纵 提供数据操纵语言DML，用于操纵数据，实现对数据库的基本操作(CRUD)。</li><li>数据事务管理和运行管理 统一管理数据，控制对数据的并发访问，保证数据的一致性、完整性、有效性。确保故障时数据库中的数据不被破坏，并且能恢复到一致的状态。</li><li>数据存储和查询处理 确定数据的物理组织和存取方式，提供数据的持久存储和有效访问。确定查询处理方法，优化查询处理过程。</li><li>数据库的建立和维护 提供实用程序完成数据库的批量装载，数据库转储，介质故障恢复，数据库的重组和性能检测。</li><li>其他功能 包含DBMS与卡软件通信，异构数据库之间的数据转换和互操作。</li></ol><h3 id="使用数据库进行信息化管理有哪些好处" tabindex="-1"><a class="header-anchor" href="#使用数据库进行信息化管理有哪些好处"><span>使用数据库进行信息化管理有哪些好处？</span></a></h3><ol><li>数据库整体结构化</li><li>数据可以充分共享</li><li>数据具有独立性</li><li>数据由DBMS统一管理和控制，使得系统能够为数据管理提供更多支持。 包含事务支持，增强安全性，保证完整性。</li><li>数据标准化</li></ol><h3 id="数据模型的三个基本要素是" tabindex="-1"><a class="header-anchor" href="#数据模型的三个基本要素是"><span>数据模型的三个基本要素是</span></a></h3><ol><li>数据结构 描述数据库的对象和对象之间的联系，是对数据的静态描述。关系模型只有关系一种数据结构。</li><li>数据操作 数据库中各种对象允许的操作和操作规则，是对系统的动态描述，定义数据操作的方法有两种：关系代数和关系演算。</li><li>完整性约束 关系模型的完整性约束包括<mark>实体完整性，参照完整性和用户定义的完整性约束。</mark></li></ol><h3 id="数据库系统的三级模式结构" tabindex="-1"><a class="header-anchor" href="#数据库系统的三级模式结构"><span>数据库系统的三级模式结构</span></a></h3><ul><li>外模式 也称为用户模式，是用户或应用程序能够看到和访问的数据库的部分。</li></ul><p>用户能操作到的数据，<mark>外模式可以有多个。</mark></p><ul><li>概念模式(模式) 也称为全局模式，是数据库的整体逻辑结构和组织方式的描述。</li></ul><p><mark>概念模式只有一个。</mark></p><ul><li>内模式 也称为存储模式，是数据物理结构和存储方式的描述，是数据在数据库内部的表示方式。 <mark>一个数据库只有一个内模式。</mark></li></ul><h3 id="什么是二级映像" tabindex="-1"><a class="header-anchor" href="#什么是二级映像"><span>什么是二级映像</span></a></h3><p>三个模式之间的转换</p><p>外模式/模式映像</p><p>模式/内模式映像</p><h3 id="物理独立性和逻辑独立性" tabindex="-1"><a class="header-anchor" href="#物理独立性和逻辑独立性"><span>物理独立性和逻辑独立性</span></a></h3><ul><li>物理独立性 用户的应用程序与数据库的物理存储结构无关，内模式改变后只需要对模式/内模式进行修改，而不用修改应用程序。</li><li>逻辑独立性 用户的应用程序和数据库的逻辑结构无关，当模式改变时只需要改变模式/外模型映像即可。</li></ul><h3 id="dba的主要职责" tabindex="-1"><a class="header-anchor" href="#dba的主要职责"><span>DBA的主要职责</span></a></h3><ul><li>决定数据库中的信息内容和数据的逻辑结构。</li><li>决定数据库的存储结构和存取策略。</li><li>定义数据的安全性要求和完整性约束条件。</li><li>数据库的日常维护。</li></ul><h2 id="关系数据库" tabindex="-1"><a class="header-anchor" href="#关系数据库"><span>关系数据库</span></a></h2><ul><li>关系 一张二维表，表名就是关系名。</li><li>属性 二维表中的列</li><li>元组 二维表中的一行</li><li>关系模式 二维表的结构</li><li>候选码 一个属性集的值可唯一标识一个关系的元素，又不含多余的属性。</li><li>主码 关系模式中候选码中选取的一个作为主码。</li><li>主属性 包含在任意候选码中的属性。</li><li>非主属性 不包含在任意候选码中的属性。</li><li>外键 关系模式R中的属性K是其他关系模式的主键，则称K是R的外键。</li></ul><h3 id="实体完整性与参照完整性的规则" tabindex="-1"><a class="header-anchor" href="#实体完整性与参照完整性的规则"><span>实体完整性与参照完整性的规则</span></a></h3><ul><li>实体完整性 关系中元组在组成主键的属性上不能有空值。</li><li>参照完整性 K是R1的主键，K也是R2的属性，但是不是R2的主键，那么称为K为R2的外键。 在R2中K的取值要么为空要么是R1某个主键的值。 关系模式R1称为被参照关系，R2称为参照关系。</li></ul><h3 id="自然连接和等值连接的异同" tabindex="-1"><a class="header-anchor" href="#自然连接和等值连接的异同"><span>自然连接和等值连接的异同</span></a></h3><ul><li>相同点 都是根据属性值相等进行连接。</li><li>不同点</li></ul><p>自然连接自动去除重复的属性，要求必须是公共属性。</p><p>等值连接不自动去除重复的属性，不一定是公共属性。</p><h3 id="完整性约束的作用" tabindex="-1"><a class="header-anchor" href="#完整性约束的作用"><span>完整性约束的作用</span></a></h3><blockquote><p>保证数据库中数据的正确性。</p></blockquote><ul><li>执行插入操作时检查三种完整性<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li><li>删除操作时一般检查参照完整性。</li></ul><h2 id="sql" tabindex="-1"><a class="header-anchor" href="#sql"><span>SQL</span></a></h2><h3 id="sql的基本特点" tabindex="-1"><a class="header-anchor" href="#sql的基本特点"><span>SQL的基本特点</span></a></h3><ul><li>集多种数据库语言于一体，语言简洁，风格统一。</li><li>高度非过程化 只需要支持要做什么，不需要指出怎么做。</li><li>面向集合的操作方式 运算对象和结果全都是元组的集合。</li><li>语言灵活，功能强大</li></ul><h3 id="sql的基本功能" tabindex="-1"><a class="header-anchor" href="#sql的基本功能"><span>SQL的基本功能</span></a></h3><ul><li>定义模式</li><li>CRUD</li><li>定义视图</li><li>定义完整性约束条件</li><li>授权</li><li>事务</li></ul><h3 id="sql定义语言ddl包括" tabindex="-1"><a class="header-anchor" href="#sql定义语言ddl包括"><span>SQL定义语言DDL包括</span></a></h3><ul><li>模式，表，视图，域，断言的定义，修改，删除</li><li>授权的定义和回收</li></ul><h3 id="什么是存储过程" tabindex="-1"><a class="header-anchor" href="#什么是存储过程"><span>什么是存储过程</span></a></h3><blockquote><p>一组为了完成特定功能的SQL语句集，经编译创建并保存在数据库中，用户通过指定存储过程的名字并给出参数(如果需要参数)来执行它。</p></blockquote><ul><li>一个业务同时对多个表进行操作，可以考虑使用存储过程。</li><li>多条件多表联合查询。</li></ul><h3 id="基本表-视图的区别和联系。" tabindex="-1"><a class="header-anchor" href="#基本表-视图的区别和联系。"><span>基本表，视图的区别和联系。</span></a></h3><ul><li>基本表 就是其关系元组储存在数据库中的表。</li><li>视图 由基本表导出的表，其关系元组是导出时查询的结果。</li><li>联系 所有视图都是直接或间接的由基本表定义的。</li><li>区别 查询没有区别，只有可更新视图才可以更新。</li></ul><h3 id="视图的优点" tabindex="-1"><a class="header-anchor" href="#视图的优点"><span>视图的优点</span></a></h3><ol><li>查询表达更加简洁。</li><li>视图提供了一定程度的逻辑独立性。</li><li>视图配合授权使用，可以在某种程度上对数据库起到保护作用。</li><li>视图可以让用户以不同角度看待相同的数据。</li></ol><h3 id="嵌入式sql" tabindex="-1"><a class="header-anchor" href="#嵌入式sql"><span>嵌入式SQL</span></a></h3><ul><li>SQL只能表达常见的查询，但是不能表达所有的查询。</li><li>一些非数据库操作，如文件操作，网络操作等，不能直接用SQL表达。</li></ul><h2 id="完整性和安全性" tabindex="-1"><a class="header-anchor" href="#完整性和安全性"><span>完整性和安全性</span></a></h2><h3 id="什么是数据库的完整性-安全性" tabindex="-1"><a class="header-anchor" href="#什么是数据库的完整性-安全性"><span>什么是数据库的完整性？安全性？</span></a></h3><ul><li>完整性 是指数据库中数据的正确性，一致性和相容性。 目的是维护数据一致性。</li><li>安全性 是指保护数据库，防止因用户非法使用数据库造成数据泄露，更改和破坏。 目的是防止数据库被未经授权的访问而被恶意修改。</li></ul><h3 id="维护数据库完整性dbms应该提供哪些支持" tabindex="-1"><a class="header-anchor" href="#维护数据库完整性dbms应该提供哪些支持"><span>维护数据库完整性DBMS应该提供哪些支持？</span></a></h3><ul><li>说明和定义完整性约束条件的方法</li><li>完整性检查机制</li><li>违约处理</li></ul><h3 id="实体完整性的定义和违约处理" tabindex="-1"><a class="header-anchor" href="#实体完整性的定义和违约处理"><span>实体完整性的定义和违约处理</span></a></h3><ul><li>定义</li></ul><p>建表的时候使用<code>primary key</code>来定义。 一种是定义为列级约束条件，另外一种是定义为表级约束条件。</p><ul><li>违约处理 当用户进行操作的时候会检查主码值是否唯一或者为空，如果满足条件则拒绝。</li></ul><h3 id="参照完整性的定义和违约处理" tabindex="-1"><a class="header-anchor" href="#参照完整性的定义和违约处理"><span>参照完整性的定义和违约处理</span></a></h3><ul><li>定义 使用<code>foreign key</code>来定义外码，用<code>references</code>来指明这些外码参照哪些表的主码</li><li>违约处理</li></ul><ol><li>拒绝处理</li><li>级联处理</li><li>设置为空值</li><li>设置为缺省值</li></ol><h3 id="用户自定义的完整性" tabindex="-1"><a class="header-anchor" href="#用户自定义的完整性"><span>用户自定义的完整性</span></a></h3><ul><li>断言</li><li>域约束</li><li>属性约束</li><li>关系约束</li></ul><h3 id="触发器的作用-什么时候用触发器-创建触发器的步骤" tabindex="-1"><a class="header-anchor" href="#触发器的作用-什么时候用触发器-创建触发器的步骤"><span>触发器的作用，什么时候用触发器，创建触发器的步骤？</span></a></h3><ul><li>作用 触发器是一种程序模块，是数据库的一种自动处理机制。主要作用是保证数据库的安全性。</li><li>什么时候用触发器</li></ul><blockquote><p>触发器通过事件来激活</p></blockquote><ol><li>dml触发器</li><li>ddl触发器</li><li>instead of触发器</li></ol><ul><li>创建触发器的步骤</li></ul><ol><li>定义触发器</li><li>触发条件</li><li>声明部分</li><li>主体部分</li></ol><h3 id="实现数据库安全性控制的常用方法和技术" tabindex="-1"><a class="header-anchor" href="#实现数据库安全性控制的常用方法和技术"><span>实现数据库安全性控制的常用方法和技术？</span></a></h3><ul><li>用户表示和鉴别 核对用户信息</li><li>存取控制 通过用户权限校验和合法性检查/</li><li>视图 对不同的用户定义视图。</li><li>审计 建立审计日志。</li><li>数据加密 对于传输的信息进行加密。</li></ul><h2 id="关系数据库的设计理论" tabindex="-1"><a class="header-anchor" href="#关系数据库的设计理论"><span>关系数据库的设计理论</span></a></h2><h3 id="为什么范式会出现" tabindex="-1"><a class="header-anchor" href="#为什么范式会出现"><span>为什么范式会出现</span></a></h3><p>在数据库中不合理的设计会导致数据冗余，更新异常，插入异常，删除异常。 范式理论的出现是为了解决不合理的数据依赖，使数据库设计规范化。</p><h3 id="解释范式" tabindex="-1"><a class="header-anchor" href="#解释范式"><span>解释范式</span></a></h3><ol><li>1NF 每一列都是不可分割的数据项。</li><li>2NF 在1NF的基础上，非码属性必须完全依赖于候选码。</li><li>3NF 在2NF的基础上，任何非主属性不依赖于其他非主属性。（消除传递依赖）</li><li>BCNF 在1NF的基础上，所有的函数依赖，比如x-&gt;y,决定因素x中都是候选码。</li><li>4NF 关系模式的属性之间不允许有非平凡且非函数依赖的多值依赖。</li></ol><ul><li>1NF到2NF消除了非码属性对部分函数的依赖。</li><li>2NF到3NF消除了非主属性对码的传递函数依赖。</li><li>3NF到4NF消除了主属性对码的部分函数依赖和传递函数依赖。</li><li>BCNF到4NF消除了非平凡且非函数依赖的多值依赖。</li></ul>',82),d=l('<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计"><span>数据库设计</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>元数据就是关于数据的数据。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>实体完整性，参照完整性和用户定义的完整性。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function c(p,u){const i=n("Mermaid");return t(),s("div",null,[h,e(i,{id:"mermaid-39",code:"eJxLL0osyFDwCeJyjH42dcOz3nVPd01+vnn3893zYxV0de0UnBDCsbjUOEe7OPkGx3Ihq0WRAABVUzDN"}),o,e(i,{id:"mermaid-786",code:"eJxLy8kvT85ILCpRCHHhUlBwjFYy9HNTitXVtat5tq3j5cwlL+fOe76g8enGec8alj9dv/Nl84qnHW1P2/c+m7rh+ayWJ/vmvtg6rUbBKVrJCKQPaASMiWLEkx274UYAjQPp3LPgZcMkiEEwU5yjlYyhprhGKzk5oxqDaQayYyBmPJ3Ug81gl2glE6jBMDtQnPd05+an7Quf7JgCYiPpBNrxdMmspw17YAbBncUFAAIdqyw="}),d])}const b=a(r,[["render",c],["__file","database.html.vue"]]),g=JSON.parse('{"path":"/notes/unorder/database.html","title":"数据库未整理","lang":"zh-CN","frontmatter":{"title":"数据库未整理","icon":"fa-solid fa-boxes-packing","category":"note","tag":["database"],"description":"概述 术语 DBMS DBMS是数据库管理系统的简称，是一种重要的程序设计系统。它由一个相互关联的数据集合和一组访问这些数据的程序构成。 数据库 数据库是长期储存在计算机内、有组织、可共享的大量数据的集合。 数据库中的数据按照一定的数据模型组织，描述和存储，可以被各种用户共享，具有较小的冗余度，较高的数据独立性，并且易于拓展。 数据库系统 数据库系统由...","head":[["meta",{"property":"og:url","content":"https://zarttic.github.io/notes/unorder/database.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"数据库未整理"}],["meta",{"property":"og:description","content":"概述 术语 DBMS DBMS是数据库管理系统的简称，是一种重要的程序设计系统。它由一个相互关联的数据集合和一组访问这些数据的程序构成。 数据库 数据库是长期储存在计算机内、有组织、可共享的大量数据的集合。 数据库中的数据按照一定的数据模型组织，描述和存储，可以被各种用户共享，具有较小的冗余度，较高的数据独立性，并且易于拓展。 数据库系统 数据库系统由..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T09:08:33.000Z"}],["meta",{"property":"article:author","content":"zarttic"}],["meta",{"property":"article:tag","content":"database"}],["meta",{"property":"article:modified_time","content":"2024-03-17T09:08:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库未整理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-17T09:08:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zarttic\\",\\"url\\":\\"https://github.com/zarttic\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"术语","slug":"术语","link":"#术语","children":[]},{"level":3,"title":"DBMS的主要功能","slug":"dbms的主要功能","link":"#dbms的主要功能","children":[]},{"level":3,"title":"使用数据库进行信息化管理有哪些好处？","slug":"使用数据库进行信息化管理有哪些好处","link":"#使用数据库进行信息化管理有哪些好处","children":[]},{"level":3,"title":"数据模型的三个基本要素是","slug":"数据模型的三个基本要素是","link":"#数据模型的三个基本要素是","children":[]},{"level":3,"title":"数据库系统的三级模式结构","slug":"数据库系统的三级模式结构","link":"#数据库系统的三级模式结构","children":[]},{"level":3,"title":"什么是二级映像","slug":"什么是二级映像","link":"#什么是二级映像","children":[]},{"level":3,"title":"物理独立性和逻辑独立性","slug":"物理独立性和逻辑独立性","link":"#物理独立性和逻辑独立性","children":[]},{"level":3,"title":"DBA的主要职责","slug":"dba的主要职责","link":"#dba的主要职责","children":[]}]},{"level":2,"title":"关系数据库","slug":"关系数据库","link":"#关系数据库","children":[{"level":3,"title":"实体完整性与参照完整性的规则","slug":"实体完整性与参照完整性的规则","link":"#实体完整性与参照完整性的规则","children":[]},{"level":3,"title":"自然连接和等值连接的异同","slug":"自然连接和等值连接的异同","link":"#自然连接和等值连接的异同","children":[]},{"level":3,"title":"完整性约束的作用","slug":"完整性约束的作用","link":"#完整性约束的作用","children":[]}]},{"level":2,"title":"SQL","slug":"sql","link":"#sql","children":[{"level":3,"title":"SQL的基本特点","slug":"sql的基本特点","link":"#sql的基本特点","children":[]},{"level":3,"title":"SQL的基本功能","slug":"sql的基本功能","link":"#sql的基本功能","children":[]},{"level":3,"title":"SQL定义语言DDL包括","slug":"sql定义语言ddl包括","link":"#sql定义语言ddl包括","children":[]},{"level":3,"title":"什么是存储过程","slug":"什么是存储过程","link":"#什么是存储过程","children":[]},{"level":3,"title":"基本表，视图的区别和联系。","slug":"基本表-视图的区别和联系。","link":"#基本表-视图的区别和联系。","children":[]},{"level":3,"title":"视图的优点","slug":"视图的优点","link":"#视图的优点","children":[]},{"level":3,"title":"嵌入式SQL","slug":"嵌入式sql","link":"#嵌入式sql","children":[]}]},{"level":2,"title":"完整性和安全性","slug":"完整性和安全性","link":"#完整性和安全性","children":[{"level":3,"title":"什么是数据库的完整性？安全性？","slug":"什么是数据库的完整性-安全性","link":"#什么是数据库的完整性-安全性","children":[]},{"level":3,"title":"维护数据库完整性DBMS应该提供哪些支持？","slug":"维护数据库完整性dbms应该提供哪些支持","link":"#维护数据库完整性dbms应该提供哪些支持","children":[]},{"level":3,"title":"实体完整性的定义和违约处理","slug":"实体完整性的定义和违约处理","link":"#实体完整性的定义和违约处理","children":[]},{"level":3,"title":"参照完整性的定义和违约处理","slug":"参照完整性的定义和违约处理","link":"#参照完整性的定义和违约处理","children":[]},{"level":3,"title":"用户自定义的完整性","slug":"用户自定义的完整性","link":"#用户自定义的完整性","children":[]},{"level":3,"title":"触发器的作用，什么时候用触发器，创建触发器的步骤？","slug":"触发器的作用-什么时候用触发器-创建触发器的步骤","link":"#触发器的作用-什么时候用触发器-创建触发器的步骤","children":[]},{"level":3,"title":"实现数据库安全性控制的常用方法和技术？","slug":"实现数据库安全性控制的常用方法和技术","link":"#实现数据库安全性控制的常用方法和技术","children":[]}]},{"level":2,"title":"关系数据库的设计理论","slug":"关系数据库的设计理论","link":"#关系数据库的设计理论","children":[{"level":3,"title":"为什么范式会出现","slug":"为什么范式会出现","link":"#为什么范式会出现","children":[]},{"level":3,"title":"解释范式","slug":"解释范式","link":"#解释范式","children":[]}]},{"level":2,"title":"数据库设计","slug":"数据库设计","link":"#数据库设计","children":[]}],"git":{"createdTime":1710649314000,"updatedTime":1710666513000,"contributors":[{"name":"zarttic","email":"332209078@qq.com","commits":2},{"name":"liyajun","email":"332209078@qq.com","commits":1}]},"readingTime":{"minutes":10.1,"words":3029},"filePathRelative":"notes/unorder/database.md","localizedDate":"2024年3月17日","autoDesc":true,"excerpt":"<h2>概述</h2>\\n<h3>术语</h3>\\n<ul>\\n<li>DBMS</li>\\n</ul>\\n<p>DBMS是数据库管理系统的简称，是一种重要的程序设计系统。它由一个相互关联的数据集合和一组访问这些数据的程序构成。</p>\\n<ul>\\n<li>数据库</li>\\n</ul>\\n<p>数据库是长期储存在计算机内、有组织、可共享的大量数据的集合。</p>\\n<p>数据库中的数据按照一定的数据模型组织，描述和存储，可以被各种用户共享，具有较小的冗余度，较高的数据独立性，并且易于拓展。</p>\\n<ul>\\n<li>数据库系统</li>\\n</ul>\\n<p>数据库系统由数据库、DBMS、应用程序和数据库管理员组成。</p>"}');export{b as comp,g as data};
