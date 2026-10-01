# Generic CSS

An SCSS foundation for building a frontend system. It gives you design tokens, layout utilities and a set of components. Every value comes from variables that you can override, so you change the tokens once and every component follows.

**[See the live showcase](https://tgomilar.github.io/generic-css/)**

## How it is built

The library has three layers:

| Layer | Where | What it holds |
| --- | --- | --- |
| Tokens | `_variables.scss` | Colours, spacing scale, breakpoints, shadows, type and the settings for every component. All are marked `!default`. |
| Utilities | `utilities/` | Reset, typography, flexbox grid, spacing classes, helpers, animation, off canvas and print styles. Mixins for breakpoints, flex and components are in `utilities/mixins/`. |
| Components | `components/` | Button, label, alert, form, table, tabs, breadcrumb, navbar, dropdown, modal, pager and progress. |

## Use it

Set your own tokens, then import the library:

```scss
$color-button: #7b2ed7;
$button-default-border-radius: 999px;
$sm: 640px;

@import "generic-css/generic";
```

To build the plain CSS file:

```sh
npx sass generic.scss css/generic.css
```

## Status

Written in 2019 and no longer maintained. The code is kept here as a reference for how the system was put together.
