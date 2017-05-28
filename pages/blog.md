---
layout: page
title: Blog
permalink: /blog/
---

<div class="row">
	<div class="col-md-offset-3 col-md-6 col-sm-12">
		{% for post in site.posts %}
		<div class="row">
			<div class="col-sm-12">
				<h2>
					<a href="{{site.baseurl}}{{post.url}}">
						{{post.title}}
					</a>
				</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<p>
					{{post.excerpt}}
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="pull-right">
					<a href="{{site.baseurl}}{{post.url}}">
						Read More
					</a>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>