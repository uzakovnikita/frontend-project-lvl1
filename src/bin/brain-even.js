#!/usr/bin/env node
import * as evenRules from ' ../games/evenRules.js ';
import { engine } from ' ../engine.js ';

engine(evenRules.random, evenRules.rules, evenRules.description);