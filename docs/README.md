# Mixin-Debug-Log

[![Build Status](https://travis-ci.com/barktler/Mixin-Debug-Log.svg?branch=main)](https://travis-ci.com/barktler/Mixin-Debug-Log)
[![codecov](https://codecov.io/gh/barktler/Mixin-Debug-Log/branch/main/graph/badge.svg)](https://codecov.io/gh/barktler/Mixin-Debug-Log)
[![npm version](https://badge.fury.io/js/%40barktler%2Fmixin-debug-log.svg)](https://www.npmjs.com/package/@barktler/mixin-debug-log)
[![downloads](https://img.shields.io/npm/dm/@barktler/mixin-debug-log.svg)](https://www.npmjs.com/package/@barktler/mixin-debug-log)

:sweat_drops: Debug Logging mixin for Barktler

## Install

```sh
yarn add @barktler/mixin-debug-log
# Or
npm install @barktler/mixin-debug-log --save
```

## Usage

```ts
import { createDebugLogMixin } from "@barktler/mixin-debug-log";
import { YourAPI } from "somewhere";

const api: YourAPI = new YourAPI();
api.useMixin(createDebugLogMixin());
```

## Documents

See [Barktler Documents](//barktler.com).
