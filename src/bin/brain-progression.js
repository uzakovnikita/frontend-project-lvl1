#!/usr/bin/env node
import * as progressionRules from '../games/progressionRules.js';
import { engine } from '../engine.js';

engine(progressionRules.random, progressionRules.rules, progressionRules.description);