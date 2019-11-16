#!/usr/bin/env node
import * as calcRules from ' ../games/calcRules ';
import { engine } from ' ../engine ';

engine(calcRules.random, calcRules.rules, calcRules.description);