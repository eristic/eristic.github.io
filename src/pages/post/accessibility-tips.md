---
layout: ../../layouts/BlogPost.astro
title: "Essential Web Accessibility Tips"
description: "Make your websites accessible to everyone with these practical tips and best practices"
pubDate: 2024-03-14
author: "Scott Stewart"
tags: [Creativity]
---

## Basic Markdown Syntax Testing

### Headings Test

# H1 Heading - Largest

## H2 Heading - Large

### H3 Heading - Medium

#### H4 Heading - Small

##### H5 Heading - Smaller

###### H6 Heading - Smallest

### Text Formatting

This is **bold text** and this is _italic text_.

You can also use **bold** and _italic_ with underscores.

This is **_bold and italic_** combined.

~~This text is strikethrough~~

==This text is highlighted==

This is normal text with H~2~O (subscript) and X^2^ (superscript).

### Links and Images

Here's a [link to accessibility guidelines](https://www.w3.org/WAI/WCAG21/quickref/).

![Alt text for accessibility](https://via.placeholder.com/400x200?text=Sample+Image)

### Lists

#### Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

#### Ordered List

1. First ordered item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item
3. Third ordered item

#### Task List

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] Another incomplete task

### Code Examples

Inline `code` looks like this.

```html
<header>
  <nav>
    <main>
      <article>
        <aside>
          <footer></footer>
        </aside>
      </article>
    </main>
  </nav>
</header>
```

```javascript
function checkAccessibility() {
  const elements = document.querySelectorAll("[aria-label]");
  return elements.length > 0;
}
```

```css
.accessible-button {
  background: var(--accent-color);
  color: var(--bg-color);
  border: none;
  padding: 0.5rem 1rem;
}
```

### Blockquotes

> Web accessibility is not just a nice-to-have feature—it's a necessity.
>
> It ensures that websites and applications are usable by everyone, including people with disabilities.

### Horizontal Rule

---

## Extended Markdown Syntax Testing

### Tables

| Feature             | Importance | Implementation    |
| ------------------- | ---------- | ----------------- |
| Alt Text            | Critical   | Always required   |
| Color Contrast      | High       | WCAG AA standards |
| Keyboard Navigation | High       | Tab order matters |
| ARIA Labels         | Medium     | When needed       |
| Focus Indicators    | High       | Must be visible   |

### Definition Lists

Accessibility
: The practice of making websites usable by people with disabilities

ARIA
: Accessible Rich Internet Applications - a set of attributes for HTML

WCAG
: Web Content Accessibility Guidelines

Screen Reader
: Assistive technology that reads web content aloud

### Advanced Examples

#### Nested Lists with Mixed Types

1. **Color Accessibility**
   - Ensure sufficient contrast ratios
   - Test with colorblind simulators
   - Don't rely on color alone for information
2. **Keyboard Navigation**
   - All interactive elements must be focusable
   - Logical tab order
   - Visible focus indicators
3. **Screen Reader Support**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Descriptive link text

#### Complex Code Block with Syntax Highlighting

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accessible Web Page</title>
  </head>
  <body>
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="#main">Skip to main content</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <h1>Welcome to Our Accessible Site</h1>
      <p>This site follows WCAG 2.1 AA guidelines.</p>
    </main>
  </body>
</html>
```

### Footnotes Testing

Here's a sentence with a footnote[^1]. And here's another with a longer footnote[^longnote].

### Advanced Blockquote

> **Important Note:**
>
> Accessibility is not just about compliance—it's about creating inclusive experiences.
>
> > "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
> >
> > — Tim Berners-Lee, W3C Director and inventor of the World Wide Web

### Mixed Content Testing

Here's a complex example combining multiple elements:

**ARIA Best Practices:**

1. **Use semantic HTML first**

   - `<button>` instead of `<div role="button">`
   - `<nav>` for navigation areas
   - `<main>` for primary content

2. **Add ARIA when needed:**

   ```html
   <button aria-expanded="false" aria-controls="menu">
     Menu <span aria-hidden="true">▼</span>
   </button>
   ```

3. **Test with real users:**
   - Include people with disabilities in testing
   - Use automated tools as a starting point
   - Manual testing is essential

#### Testing Checklist

- [ ] Color contrast meets WCAG AA (4.5:1)
- [x] All images have alt text
- [ ] Keyboard navigation works
- [x] Focus indicators are visible
- [ ] Screen reader testing completed
- [x] Headings follow logical hierarchy

---

## ARIA Labels

Add ARIA labels when semantic HTML isn't enough:

```html
<button aria-label="Close menu">
  <svg>...</svg>
</button>
```

## Color Contrast

- Ensure sufficient color contrast
- Don't rely on color alone
- Test with color blindness simulators

## Keyboard Navigation

Make sure your site is navigable with:

- Tab key
- Enter key
- Arrow keys
- Escape key

## Images and Media

- Always include alt text
- Provide captions for videos
- Ensure media controls are accessible

Remember: Accessibility benefits everyone, not just users with disabilities.

[^1]: This is a simple footnote.
[^longnote]: This is a longer footnote with multiple sentences. It demonstrates how footnotes can contain more detailed information that supports the main text without interrupting the flow of reading.
