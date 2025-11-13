# Custom Theme Reference

This document describes the custom CSS theme for your blog, inspired by Light Academia, Minimalistic, Cottagecore, and Cozy aesthetics.

## Design Philosophy

The theme creates a "book-like" or "creamy print" publication feel with:

- **All-serif typography** for elegance and readability
- **Warm, earthy color palette** avoiding bright or neon colors
- **Generous spacing and line heights** for comfortable reading
- **Muted, natural accent colors** that feel organic and grounded

## Typography

### Font Families

```css
--font-family-display: "Playfair Display"  /* For headers */
--font-family-body: "EB Garamond"          /* For body text */
```

**Usage in CSS:**

```css
font-family: var(--font-family-display);
font-family: var(--font-family-body);
```

### Font Sizes

All sizes are optimized for a book-like reading experience:

```css
--font-size-xs: 0.875rem      /* 14px */
--font-size-sm: 1rem           /* 16px */
--font-size-base: 1.1875rem    /* 19px - body text */
--font-size-lg: 1.375rem       /* 22px */
--font-size-xl: 1.625rem       /* 26px */
--font-size-2xl: 2rem          /* 32px */
--font-size-3xl: 2.5rem        /* 40px */
--font-size-4xl: 3rem          /* 48px */
--font-size-5xl: 3.75rem       /* 60px */
```

**Usage:**

```css
font-size: var(--font-size-base);
font-size: var(--font-size-4xl);
```

### Line Heights

Generous line heights for comfortable reading:

```css
--line-height-tight: 1.3
--line-height-snug: 1.5
--line-height-normal: 1.7      /* Default for body */
--line-height-relaxed: 1.9
--line-height-loose: 2.1
```

### Letter Spacing

```css
--letter-spacing-tight: -0.02em
--letter-spacing-normal: 0
--letter-spacing-wide: 0.02em
--letter-spacing-wider: 0.05em
```

## Color Palette

### Base Colors

**Cream (Background)**

```css
--color-cream: #f8f4ea          /* Main background */
--color-cream-dark: #f0e8d8     /* Subtle contrast */
--color-cream-darker: #e8dcc8   /* More contrast */
```

**Brown (Text)**

```css
--color-brown: #38322c          /* Primary text */
--color-brown-light: #5a4f45    /* Secondary text */
--color-brown-lighter: #7a6d5f  /* Tertiary text */
```

### Accent Colors (Muted & Earthy)

**Sage Green** (Default for links)

```css
--color-sage: #7a9b76
--color-sage-light: #9bb897
--color-sage-dark: #5d7a5a      /* Used for links */
```

**Terracotta**

```css
--color-terracotta: #c17a6f
--color-terracotta-light: #d49a91
--color-terracotta-dark: #a65f55
```

**Dusty Blue**

```css
--color-dusty-blue: #7a8fa3
--color-dusty-blue-light: #9baab9
--color-dusty-blue-dark: #5d7088
```

**Burgundy**

```css
--color-burgundy: #8b5a5f
--color-burgundy-light: #a87a7f
--color-burgundy-dark: #6d4448
```

**Usage:**

```css
color: var(--color-sage-dark);
background-color: var(--color-cream);
border-color: var(--color-terracotta);
```

## Spacing & Layout

### Border Radius

Subtle, organic curves:

```css
--radius-sm: 0.25rem
--radius-md: 0.375rem
--radius-lg: 0.5rem
--radius-xl: 0.75rem
```

### Shadows

Soft, subtle shadows using the brown color:

```css
--shadow-sm: 0 1px 2px 0 rgb(56 50 44 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(56 50 44 / 0.08), 0 2px 4px -2px rgb(56 50 44 / 0.05)
--shadow-lg: 0 10px 15px -3px rgb(56 50 44 / 0.08), 0 4px 6px -4px rgb(56 50 44 / 0.05)
```

**Usage:**

```css
box-shadow: var(--shadow-md);
```

## Example Usage Patterns

### Custom Button with Sage Accent

```css
.button-sage {
  background-color: var(--color-sage);
  color: var(--color-cream);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-family-display);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}

.button-sage:hover {
  background-color: var(--color-sage-dark);
  box-shadow: var(--shadow-md);
}
```

### Card Component

```css
.card {
  background-color: var(--color-cream-dark);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}
```

### Highlighted Text

```css
.highlight {
  background-color: var(--color-cream-darker);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
}
```

### Pull Quote

```css
.pull-quote {
  font-family: var(--font-family-display);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-snug);
  color: var(--color-brown-light);
  border-left: 4px solid var(--color-terracotta);
  padding-left: 1.5rem;
  font-style: italic;
}
```

## Tips for Using the Theme

1. **Stick to the palette**: Use the predefined colors to maintain consistency
2. **Embrace whitespace**: The generous line heights and spacing are intentional
3. **Mix accent colors thoughtfully**: Each accent color has a purpose:
   - Sage: Links, nature-related content
   - Terracotta: Warm highlights, important callouts
   - Dusty Blue: Cool accents, technical content
   - Burgundy: Emphasis, warnings
4. **Use display font sparingly**: Playfair Display is for headers and special emphasis
5. **Maintain readability**: Keep body text at the base size (19px) with normal line height (1.7)

## Cute Easter Eggs Ideas

Consider adding these subtle, delightful touches:

- Decorative drop caps on blog posts
- Small ornamental dividers between sections
- Hover effects that reveal subtle patterns
- Seasonal color variations (autumn = more terracotta, spring = more sage)
- Hidden messages in code comments
- Playful 404 page with book-themed illustrations
