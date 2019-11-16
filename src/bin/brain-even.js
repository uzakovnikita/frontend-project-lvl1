#!/usr/bin/env node
import * as evenRules from ' ../games/evenRules ';
import { engine } from ' ../engine ';

engine(evenRules.random, evenRules.rules, evenRules.description);