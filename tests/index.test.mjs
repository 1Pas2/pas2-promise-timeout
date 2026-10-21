import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as api from "../dist/index.js";
test("resolved promise", async () =>
  assert.equal(await api.withTimeout(Promise.resolve(4), 100), 4));
test("deadline", async () =>
  await assert.rejects(
    api.withTimeout(new Promise(() => {}), 5),
    api.TimeoutError,
  ));
test("original error", async () =>
  await assert.rejects(
    api.withTimeout(Promise.reject(Error("original")), 100),
    /original/,
  ));
