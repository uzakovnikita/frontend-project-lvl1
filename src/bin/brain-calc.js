#!/usr/bin/env node
import * as calcRules from '../games/calcRules.js';
import { engine } from '../engine.js';

engine(calcRules.random, calcRules.rules, calcRules.description);