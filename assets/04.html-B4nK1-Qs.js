import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-C3h0L4f4.js";const p={},e=t(`<h1 id="响应" tabindex="-1"><a class="header-anchor" href="#响应"><span>响应</span></a></h1><h2 id="_1-字符串方式" tabindex="-1"><a class="header-anchor" href="#_1-字符串方式"><span>1. 字符串方式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;this is a %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ms string response&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-json方式" tabindex="-1"><a class="header-anchor" href="#_2-json方式"><span>2. JSON方式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;success&quot;</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-xml方式" tabindex="-1"><a class="header-anchor" href="#_3-xml方式"><span>3. XML方式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> XmlUser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id   <span class="token builtin">int64</span>  <span class="token string">\`xml:&quot;id&quot;\`</span>
	Name <span class="token builtin">string</span> <span class="token string">\`xml:&quot;name&quot;\`</span>
<span class="token punctuation">}</span>
r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		u <span class="token operator">:=</span> XmlUser<span class="token punctuation">{</span>
			Id<span class="token punctuation">:</span>   <span class="token number">11</span><span class="token punctuation">,</span>
			Name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		ctx<span class="token punctuation">.</span><span class="token function">XML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-文件格式" tabindex="-1"><a class="header-anchor" href="#_4-文件格式"><span>4. 文件格式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//ctx.File(&quot;./1.png&quot;)</span>
		ctx<span class="token punctuation">.</span><span class="token function">FileAttachment</span><span class="token punctuation">(</span><span class="token string">&quot;./1.png&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.png&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-设置http响应头" tabindex="-1"><a class="header-anchor" href="#_5-设置http响应头"><span>5. 设置http响应头</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;headertest&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-重定向" tabindex="-1"><a class="header-anchor" href="#_6-重定向"><span>6. 重定向</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">Redirect</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusMovedPermanently<span class="token punctuation">,</span> <span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-yaml方式" tabindex="-1"><a class="header-anchor" href="#_7-yaml方式"><span>7. YAML方式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">YAML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(i,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","04.html.vue"]]),k=JSON.parse('{"path":"/golang/gin/04.html","title":"响应","lang":"zh-CN","frontmatter":{"title":"响应","icon":"fab fa-golang","category":"golang","tag":["gin","golang"],"description":"响应 1. 字符串方式 2. JSON方式 3. XML方式 4. 文件格式 5. 设置http响应头 6. 重定向 7. YAML方式","head":[["meta",{"property":"og:url","content":"https://zarttic.github.io/golang/gin/04.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"响应"}],["meta",{"property":"og:description","content":"响应 1. 字符串方式 2. JSON方式 3. XML方式 4. 文件格式 5. 设置http响应头 6. 重定向 7. YAML方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T15:23:24.000Z"}],["meta",{"property":"article:author","content":"zarttic"}],["meta",{"property":"article:tag","content":"gin"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:modified_time","content":"2024-04-08T15:23:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"响应\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-08T15:23:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zarttic\\",\\"url\\":\\"https://github.com/zarttic\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串方式","slug":"_1-字符串方式","link":"#_1-字符串方式","children":[]},{"level":2,"title":"2. JSON方式","slug":"_2-json方式","link":"#_2-json方式","children":[]},{"level":2,"title":"3. XML方式","slug":"_3-xml方式","link":"#_3-xml方式","children":[]},{"level":2,"title":"4. 文件格式","slug":"_4-文件格式","link":"#_4-文件格式","children":[]},{"level":2,"title":"5. 设置http响应头","slug":"_5-设置http响应头","link":"#_5-设置http响应头","children":[]},{"level":2,"title":"6. 重定向","slug":"_6-重定向","link":"#_6-重定向","children":[]},{"level":2,"title":"7. YAML方式","slug":"_7-yaml方式","link":"#_7-yaml方式","children":[]}],"git":{"createdTime":1712589804000,"updatedTime":1712589804000,"contributors":[{"name":"zarttic","email":"332209078@qq.com","commits":1}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"golang/gin/04.md","localizedDate":"2024年4月8日","autoDesc":true,"excerpt":"\\n<h2>1. 字符串方式</h2>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code>r<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GET</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/user/save\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>ctx <span class=\\"token operator\\">*</span>gin<span class=\\"token punctuation\\">.</span>Context<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tctx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">String</span><span class=\\"token punctuation\\">(</span>http<span class=\\"token punctuation\\">.</span>StatusOK<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"this is a %s\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ms string response\\"</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}');export{d as comp,k as data};
