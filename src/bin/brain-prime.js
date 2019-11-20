#!/usr/bin/env node
import * as primeRules from '../games/primeRules.js';
import { engine } from '../engine.js';

engine(primeRules.random, primeRules.rules, primeRules.description);