Hey Tim! Here’s the super simple guide to publish a new blog post on DryGoods.

You don’t need to code anything. You’ll just create a new text file in GitHub, and once you save it, the post will automatically appear here:

drygoods.lovable.app/blog

It should take around 5 minutes.

Steps:

1. Open the GitHub repo link and log in.
2. Go to this folder:

src → content → blog

3. Click Add file → Create new file.
4. Name the file using lowercase letters, hyphens instead of spaces, and end it with .md.

Example:
how-to-prevent-chafing-during-marathons.md

That becomes:
drygoods.lovable.app/blog/how-to-prevent-chafing-during-marathons

5. Copy and paste this template into the new file:

```markdown
---
title: "Your post title here"
description: "A short sentence that summarizes the post. This appears on Google and when shared on social media."
date: "2026-07-01"
author: "Tim"
cover: "/og-default.jpg"
tags: ["running", "tips"]
---

Start writing the post here. Write normally, like an email.

## This is a subtitle

This is a paragraph. You can make words **bold** or *italic*.

- This is a list
- With multiple points
- Add whatever you want

[This is a link](https://drygoods.lovable.app)

![Image alt text](/path-to-image.jpg)
```

6. Edit the info between the two `---` lines:

* `title`: the main title
* `description`: one short summary sentence
* `date`: use YYYY-MM-DD format
* `author`: your name
* `cover`: you can leave it as `/og-default.jpg` for now
* `tags`: labels inside brackets and quotes

7. Write the article below the second `---`.

For formatting:

* Use `##` before a subtitle
* Use `**bold**` for bold text
* Use `*italic*` for italic text
* Use `-` for bullet points

8. Scroll down and click the green Commit changes button. Then click Commit changes again.

That’s it. The post should be live in about 1 minute.

Quick checklist before publishing:

* File name is lowercase, uses hyphens, and ends in `.md`
* The top info block starts and ends with `---`
* `title` and `description` are filled in
* Date uses the format `2026-07-15`
* You clicked Commit changes twice

If something goes wrong, send us the post link and we’ll take a look.
