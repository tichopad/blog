# AI Agent Guidelines

This document provides guidelines for AI agents working on this Astro-based personal blog codebase.

## Astro Framework

This project uses the Astro framework. Consult Astro's documentation for AI agents:

- **LLM-optimized documentation**: https://docs.astro.build/llms.txt

Astro uses an "island" architecture where everything is server-rendered by default. Client-side interactivity is added through island components when needed.

## TypeScript

The project uses strict TypeScript configuration. All code must be correctly and strongly typed.

- **No escape hatches**: Do not use `as any`, `@ts-ignore`, or similar workarounds
- **Maintain type safety**: Keep the codebase maintainable through proper typing

## Content

Blog content is written in Markdown and consumed via Astro's content collections.

- **Collection definitions**: See `src/content.config.ts` for all collection schemas
- **Do not modify content**: Never change blog posts unless explicitly asked
- **Do not create posts**: Never create new blog posts unless explicitly asked

## Styling

Use plain modern CSS for all styling. Strictly adhere to the custom theme.

- **Theme reference**: See `THEME.md` for the complete custom theme documentation
- **CSS variables**: Use the predefined CSS variables from the theme
- **No frameworks**: Do not use CSS frameworks or preprocessors

## Interactivity

For client-side interactivity, use Astro's island components.

- **Prefer Svelte**: Always use Svelte for interactive components
- **Use latest Svelte**: Always use the latest version of Svelte (version 5), use **LLM-optimized documentation**: https://svelte.dev/llms.txt
- **Simple scripts**: For simple interactivity, use plain TypeScript scripts
- **Consult docs**: Refer to Astro's documentation for island architecture details

## Dependencies

The project uses PNPM for dependency management.

- **PNPM only**: Never use npm or yarn

## Deployment

The website is deployed to Cloudflare Workers.

- **Configuration**: See `wrangler.jsonc` for deployment settings
- **Do not modify**: Never change deployment configuration unless explicitly asked
- **Do not deploy**: Never deploy changes unless explicitly asked

## Version Control

Use git for version control. Follow the commit message format below.

- **Do not commit**: Never commit changes unless explicitly asked
- **Do not push**: Never push changes unless explicitly asked

### Commit Message Format

```
<short description focused on the main change(s)>

<long, potentially multi-line description going more in detail, but still covering only the important stuff - omitting minor details>
```

**Example:**

```
Added generic form validation component

Generic form validation component should address issues with each form's validation being handled differently, creating inconsistency and slowing down development.

New validation component uses `zod` 4.0 library for schema parsing.

Following form validations have been refactored using new approach:

- Create user
- Edit user
```

**Important**: Do NOT use conventional commits. Commit messages must be clear, concise, and human-readable.

## GitHub

The version control platform is GitHub. Interact with GitHub using the GitHub CLI (`gh`).

- **Do not auto-create**: Never create issues or pull requests unless explicitly asked
- **Use GitHub CLI**: Always use `gh` command for GitHub interactions

### Pull Request Template

When asked to create a pull request, follow this template:

```md
## Summary

<!-- A short, concise summary of the changes -->

## Related issues

<!-- optional list of related issues if there are any -->

## Details

<!-- A bullet list of all the major changes made, breaking changes, etc. -->
```
