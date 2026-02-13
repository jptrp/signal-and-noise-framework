const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const ideas = [
  "One-screen habit tracker",
  "Tiny daily planning timer",
  "Local markdown snippet vault"
];

const deferredDefaults = {
  "One-screen habit tracker": {
    status: "deferred-no-time",
    reason: "Might be more UI work than needed"
  },
  "Tiny daily planning timer": {
    status: "deferred-need-info",
    reason: "Need to decide CLI vs web and persistence"
  },
  "Local markdown snippet vault": {
    status: "explored",
    reason: "Not interactive enough for this pass"
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = ideas
  .map((idea, index) => `${index + 1}. ${idea}`)
  .concat(["4. Enter a custom idea"])
  .join("\n");

const ask = () => {
  rl.question(`${prompt}\n\nChoose 1-4: `, (answer) => {
    const choice = Number.parseInt(answer, 10);
    let selected = "";

    if (choice >= 1 && choice <= ideas.length) {
      selected = ideas[choice - 1];
      finalize(selected, false);
      return;
    }

    if (choice === 4) {
      rl.question("Type your idea: ", (custom) => {
        selected = custom.trim();
        finalize(selected, true);
      });
      return;
    }

    console.log("Please choose a number between 1 and 4.");
    ask();
  });
};

const finalize = (idea, isCustom) => {
  if (!idea) {
    console.log("No idea selected. Try again.");
    ask();
    return;
  }

  const now = new Date();
  const stamp = now.toISOString();
  const output = `# Minimal App Idea\n\n**Chosen**: ${idea}\n**Timestamp**: ${stamp}\n`;
  const target = path.join(process.cwd(), "APP_IDEA.md");
  const conversationPath = path.join(
    process.cwd(),
    ".signal",
    "conversations",
    "2026-02-12-minimal-app-idea.md"
  );
  const activePath = path.join(process.cwd(), ".signal", "paths", "active.md");
  const deferredPath = path.join(process.cwd(), ".signal", "paths", "deferred.md");

  fs.writeFileSync(target, output, "utf8");
  updateConversationNode(conversationPath, idea, stamp, isCustom);
  updateActivePath(activePath, idea, stamp);
  updateDeferredPaths(deferredPath, idea, stamp);
  console.log(`Saved idea to ${target}`);
  console.log("Updated Signal conversation and active path.");
  rl.close();
};

const updateConversationNode = (filePath, idea, stamp, isCustom) => {
  if (!fs.existsSync(filePath)) {
    console.log(`Signal conversation not found: ${filePath}`);
    return;
  }

  const original = fs.readFileSync(filePath, "utf8");
  let updated = original
    .replace("**Status**: `active`", "**Status**: `complete`")
    .replace("**Chosen Path**: Pending", `**Chosen Path**: ${idea}`)
    .replace(
      "- Waiting on idea selection from the CLI",
      `- Selected via CLI on ${stamp}`
    )
    .replace("- [ ] Run `npm run start`", "- [x] Run `npm run start`")
    .replace(
      "- [ ] Pick an idea or type a custom one",
      "- [x] Pick an idea or type a custom one"
    );

  const escapedIdea = escapeRegExp(idea);
  const statusPattern = new RegExp(
    `(### Path \\d+: ${escapedIdea}[\\s\\S]*?- \\*\\*Status\\*\\*: \\x60)([^\\x60]+)(\\x60)`
  );

  if (statusPattern.test(updated)) {
    updated = updated.replace(statusPattern, `$1taken$3`);
  } else if (isCustom) {
    const insertPoint = "---\n\n## Decision Made";
    const newPathBlock =
      `### Path 4: ${idea}\n` +
      `- **Description**: Custom idea chosen via CLI\n` +
      `- **Status**: \`taken\`\n` +
      `- **Pros**:\n` +
      `  - Custom idea\n` +
      `- **Cons**:\n` +
      `  - Not evaluated yet\n` +
      `- **Effort**: Low\n` +
      `- **Risk**: Low\n\n`;

    if (updated.includes(insertPoint)) {
      updated = updated.replace(insertPoint, `${newPathBlock}${insertPoint}`);
    }
  }

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
  }
};

const updateActivePath = (filePath, idea, stamp) => {
  if (!fs.existsSync(filePath)) {
    console.log(`Signal active path not found: ${filePath}`);
    return;
  }

  const content =
    "# Active Paths\n\n" +
    `## Build minimal app: ${idea}\n` +
    "- Status: `active`\n" +
    "- Origin: [2026-02-12-minimal-app-idea](../conversations/2026-02-12-minimal-app-idea.md)\n" +
    `- Chosen: ${stamp}\n` +
    "- Next: sketch the smallest working version\n";

  fs.writeFileSync(filePath, content, "utf8");
};

const updateDeferredPaths = (filePath, chosenIdea, stamp) => {
  if (!fs.existsSync(filePath)) {
    console.log(`Signal deferred paths not found: ${filePath}`);
    return;
  }

  const lines = ["# Deferred Paths", ""];
  const deferredIdeas = ideas.filter((idea) => idea !== chosenIdea);

  if (deferredIdeas.length === 0) {
    lines.push("No deferred paths yet.");
    fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
    return;
  }

  deferredIdeas.forEach((idea) => {
    const meta = deferredDefaults[idea] || {
      status: "deferred-no-time",
      reason: "Not chosen in current pass"
    };

    lines.push(`## ${idea}`);
    lines.push(`- Status: \`${meta.status}\``);
    lines.push(`- Reason: ${meta.reason}`);
    lines.push(`- Updated: ${stamp}`);
    lines.push("- Origin: [2026-02-12-minimal-app-idea](../conversations/2026-02-12-minimal-app-idea.md)");
    lines.push("");
  });

  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

ask();
