import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c,d as s,f as n,a as i,e as a}from"./app-C3h0L4f4.js";const u={},l=a(`<h1 id="会话" tabindex="-1"><a class="header-anchor" href="#会话"><span>会话</span></a></h1><p>会话控制涉及到cookie和session的使用</p><h2 id="_1-cookie" tabindex="-1"><a class="header-anchor" href="#_1-cookie"><span>1. cookie</span></a></h2><ol><li>HTTP是无状态协议，服务器不能记录浏览器的访问状态，也就是说服务器不能区分两次请求是否由同一个客户端发出</li><li>Cookie就是解决HTTP协议无状态的方案之一</li><li>Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息发送给服务器，服务器收到请求后，就可以根据该信息处理请求</li><li>Cookie由服务器创建，并发送给浏览器，最终由浏览器保存</li></ol><h3 id="_1-1-设置cookie" tabindex="-1"><a class="header-anchor" href="#_1-1-设置cookie"><span>1.1 设置cookie</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">SetCookie</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">,</span> maxAge <span class="token builtin">int</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain <span class="token builtin">string</span><span class="token punctuation">,</span> secure<span class="token punctuation">,</span> httpOnly <span class="token builtin">bool</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p><table><thead><tr><th>参数名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>cookie名字</td></tr><tr><td>value</td><td>string</td><td>cookie值</td></tr><tr><td>maxAge</td><td>int</td><td>有效时间，单位是秒，MaxAge=0 忽略MaxAge属性，MaxAge&lt;0 相当于删除cookie, 通常可以设置-1代表删除，MaxAge&gt;0 多少秒后cookie失效</td></tr><tr><td>path</td><td>string</td><td>cookie路径</td></tr><tr><td>domain</td><td>string</td><td>cookie作用域</td></tr><tr><td>secure</td><td>bool</td><td>Secure=true，那么这个cookie只能用https协议发送给服务器</td></tr><tr><td>httpOnly</td><td>bool</td><td>设置HttpOnly=true的cookie不能被js获取到</td></tr></tbody></table><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/cookie&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 设置cookie</span>
		c<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span><span class="token string">&quot;site_cookie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cookievalue&quot;</span><span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-读取cookie" tabindex="-1"><a class="header-anchor" href="#_1-2-读取cookie"><span>1.2 读取cookie</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/read&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 根据cookie名字读取cookie值</span>
		data<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Cookie</span><span class="token punctuation">(</span><span class="token string">&quot;site_cookie&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token comment">// 直接返回cookie值</span>
			c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;not found!&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-删除cookie" tabindex="-1"><a class="header-anchor" href="#_1-3-删除cookie"><span>1.3 删除cookie</span></a></h3><p>通过将cookie的MaxAge设置为-1, 达到删除cookie的目的。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/del&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 设置cookie  MaxAge设置为-1，表示删除cookie</span>
		c<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span><span class="token string">&quot;site_cookie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cookievalue&quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;删除cookie&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-session" tabindex="-1"><a class="header-anchor" href="#_2-session"><span>2. Session</span></a></h2>`,15),k={href:"https://github.com/gin-contrib/sessions",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>安装session包</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>gin<span class="token operator">-</span>contrib<span class="token operator">/</span>sessions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions&quot;</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions/cookie&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 创建基于cookie的存储引擎，secret 参数是用于加密的密钥</span>
	store <span class="token operator">:=</span> cookie<span class="token punctuation">.</span><span class="token function">NewStore</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// 设置session中间件，参数mysession，指的是session的名字，也是cookie的名字</span>
	<span class="token comment">// store是前面创建的存储引擎，我们可以替换成其他存储引擎</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>sessions<span class="token punctuation">.</span><span class="token function">Sessions</span><span class="token punctuation">(</span><span class="token string">&quot;mysession&quot;</span><span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 初始化session对象</span>
		session <span class="token operator">:=</span> sessions<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
		<span class="token comment">// 通过session.Get读取session值</span>
		<span class="token comment">// session是键值对格式数据，因此需要通过key查询数据</span>
		<span class="token keyword">if</span> session<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;world&quot;</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;没读到&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// 设置session数据</span>
			session<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
			session<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">:</span> session<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-多session" tabindex="-1"><a class="header-anchor" href="#_2-1-多session"><span>2.1 多session</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions&quot;</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions/cookie&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	store <span class="token operator">:=</span> cookie<span class="token punctuation">.</span><span class="token function">NewStore</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	sessionNames <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">}</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>sessions<span class="token punctuation">.</span><span class="token function">SessionsMany</span><span class="token punctuation">(</span>sessionNames<span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sessionA <span class="token operator">:=</span> sessions<span class="token punctuation">.</span><span class="token function">DefaultMany</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
		sessionB <span class="token operator">:=</span> sessions<span class="token punctuation">.</span><span class="token function">DefaultMany</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> sessionA<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;world!&quot;</span> <span class="token punctuation">{</span>
			sessionA<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world!&quot;</span><span class="token punctuation">)</span>
			sessionA<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> sessionB<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;world?&quot;</span> <span class="token punctuation">{</span>
			sessionB<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world?&quot;</span><span class="token punctuation">)</span>
			sessionB<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> sessionA<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> sessionB<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-基于redis存储引擎的session" tabindex="-1"><a class="header-anchor" href="#_2-2-基于redis存储引擎的session"><span>2.2 基于redis存储引擎的session</span></a></h3><p>如果我们想将session数据保存到redis中，只要将session的存储引擎改成redis即可。</p><p>使用redis作为存储引擎的例子：</p><p>首先安装redis存储引擎的包</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>gin<span class="token operator">-</span>contrib<span class="token operator">/</span>sessions<span class="token operator">/</span>redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions&quot;</span>
	<span class="token string">&quot;github.com/gin-contrib/sessions/redis&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 初始化基于redis的存储引擎</span>
	<span class="token comment">// 参数说明：</span>
	<span class="token comment">//    第1个参数 - redis最大的空闲连接数</span>
	<span class="token comment">//    第2个参数 - 数通信协议tcp或者udp</span>
	<span class="token comment">//    第3个参数 - redis地址, 格式，host:port</span>
	<span class="token comment">//    第4个参数 - redis密码</span>
	<span class="token comment">//    第5个参数 - session加密密钥</span>
	store<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">NewStore</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:6379&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>sessions<span class="token punctuation">.</span><span class="token function">Sessions</span><span class="token punctuation">(</span><span class="token string">&quot;mysession&quot;</span><span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/incr&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		session <span class="token operator">:=</span> sessions<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
		<span class="token keyword">var</span> count <span class="token builtin">int</span>
		v <span class="token operator">:=</span> session<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		session<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
		session<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">:</span> count<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function d(v,m){const t=e("ExternalLinkIcon");return p(),c("div",null,[l,s("p",null,[n("在Gin框架中，我们可以依赖"),s("a",k,[n("gin-contrib/sessions"),i(t)]),n("中间件处理session。")]),r])}const q=o(u,[["render",d],["__file","06.html.vue"]]),h=JSON.parse('{"path":"/golang/gin/06.html","title":"会话","lang":"zh-CN","frontmatter":{"title":"会话","icon":"fab fa-golang","category":"golang","tag":["gin","golang"],"description":"会话 会话控制涉及到cookie和session的使用 1. cookie HTTP是无状态协议，服务器不能记录浏览器的访问状态，也就是说服务器不能区分两次请求是否由同一个客户端发出 Cookie就是解决HTTP协议无状态的方案之一 Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息...","head":[["meta",{"property":"og:url","content":"https://zarttic.github.io/golang/gin/06.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"会话"}],["meta",{"property":"og:description","content":"会话 会话控制涉及到cookie和session的使用 1. cookie HTTP是无状态协议，服务器不能记录浏览器的访问状态，也就是说服务器不能区分两次请求是否由同一个客户端发出 Cookie就是解决HTTP协议无状态的方案之一 Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T15:23:24.000Z"}],["meta",{"property":"article:author","content":"zarttic"}],["meta",{"property":"article:tag","content":"gin"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:modified_time","content":"2024-04-08T15:23:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"会话\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-08T15:23:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zarttic\\",\\"url\\":\\"https://github.com/zarttic\\"}]}"]]},"headers":[{"level":2,"title":"1. cookie","slug":"_1-cookie","link":"#_1-cookie","children":[{"level":3,"title":"1.1 设置cookie","slug":"_1-1-设置cookie","link":"#_1-1-设置cookie","children":[]},{"level":3,"title":"1.2 读取cookie","slug":"_1-2-读取cookie","link":"#_1-2-读取cookie","children":[]},{"level":3,"title":"1.3 删除cookie","slug":"_1-3-删除cookie","link":"#_1-3-删除cookie","children":[]}]},{"level":2,"title":"2. Session","slug":"_2-session","link":"#_2-session","children":[{"level":3,"title":"2.1 多session","slug":"_2-1-多session","link":"#_2-1-多session","children":[]},{"level":3,"title":"2.2 基于redis存储引擎的session","slug":"_2-2-基于redis存储引擎的session","link":"#_2-2-基于redis存储引擎的session","children":[]}]}],"git":{"createdTime":1712589804000,"updatedTime":1712589804000,"contributors":[{"name":"zarttic","email":"332209078@qq.com","commits":1}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"golang/gin/06.md","localizedDate":"2024年4月8日","autoDesc":true,"excerpt":"\\n<p>会话控制涉及到cookie和session的使用</p>\\n<h2>1. cookie</h2>\\n<ol>\\n<li>HTTP是无状态协议，服务器不能记录浏览器的访问状态，也就是说服务器不能区分两次请求是否由同一个客户端发出</li>\\n<li>Cookie就是解决HTTP协议无状态的方案之一</li>\\n<li>Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息发送给服务器，服务器收到请求后，就可以根据该信息处理请求</li>\\n<li>Cookie由服务器创建，并发送给浏览器，最终由浏览器保存</li>\\n</ol>\\n<h3>1.1 设置cookie</h3>"}');export{q as comp,h as data};
