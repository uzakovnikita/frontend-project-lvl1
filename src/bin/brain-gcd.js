#!/usr/bin/env node
import * as gcdRules from '../games/gcdRules.js';
import { engine } from '../engine.js';

engine(gcdRules.random, gcdRules.rules, gcdRules.description);