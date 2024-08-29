# locale2emoji

Convert a locale id string (LCID) to a unicode regional indicator symbol.

## Installation

```sh
$ npm install locale2emoji
```

## Usage

```js
import { getFlagEmoji } from 'locale2emoji';

getFlagEmoji('en-CA'); // 🇨🇦
getFlagEmoji('en_CA'); // 🇨🇦
getFlagEmoji('en'); // 🇺🇸
```
