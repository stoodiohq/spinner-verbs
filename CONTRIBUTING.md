# Contributing to Spinner Verbs

We ship packs fast. If your theme is funny and the verbs are specific, it's getting merged.

## How to add a pack

1. Fork the repo
2. Create a new JSON file in `src/packs/` (e.g., `src/packs/your-theme.json`)
3. Follow the schema below
4. Submit a PR with a fun title

## Pack schema

```json
{
  "id": "your-theme",
  "name": "Your Theme",
  "emoji": "🎯",
  "description": "A short, punchy tagline for the card",
  "tags": ["relevant", "searchable", "tags"],
  "cardImage": "/cards/your-theme.png",
  "accentColor": "#HEX_COLOR",
  "verbs": [
    "First verb here",
    "Second verb here",
    "..."
  ]
}
```

### Field reference

| Field | Required | Notes |
|-------|----------|-------|
| `id` | Yes | Lowercase, kebab-case. Must match filename. |
| `name` | Yes | Display name on the card. |
| `emoji` | Yes | Single emoji for the pack. |
| `description` | Yes | One-liner. Fits on a card. Be clever. |
| `tags` | Yes | 3-5 searchable tags. |
| `cardImage` | Yes | Path to card image in `/public/cards/`. We can help create this. |
| `accentColor` | Yes | Hex color that fits the theme. |
| `verbs` | Yes | 20-25 verbs. This is where the magic happens. |

## The quality bar

Every verb must reference something specific that fans of the theme would recognize. Generic verbs are boring. Specific verbs are funny.

| | Example (Bob Ross pack) | Why |
|---|---|---|
| **Bad** | "Painting" | Generic. Could be any art pack. |
| **Bad** | "Being creative" | Says nothing. Not a reference. |
| **Good** | "Titanium-hwite-ing" | Bob says "hwite." Fans know. |
| **Good** | "Beating the devil out of it" | Iconic brush-cleaning move. Instant recognition. |
| **Good** | "Working some Phthalo Blue in" | Specific paint color he always used. |

| | Example (Star Wars pack) | Why |
|---|---|---|
| **Bad** | "Using the sword" | It's a lightsaber. Come on. |
| **Bad** | "Flying the spaceship" | Which spaceship? Be specific. |
| **Good** | "Doing the Kessel Run in 12 parsecs" | Iconic line. Fans argue about it. Perfect. |
| **Good** | "Powering up the Death Star" | Specific. Visual. Everyone knows it. |

The rule: **if you could swap the verb into a different theme and it still works, it's too generic.**

## Verb formatting

- Write verbs as present participles when possible ("Sizzling the bacon bits", not "Sizzle the bacon bits")
- But break the rule when it's funnier ("SYNTAX ERROR IN LINE 20" is perfect as-is)
- Keep verbs under 40 characters when you can — they need to fit in a terminal spinner
- No profanity in the verbs themselves (suggestive is fine, explicit is not)

## PR checklist

- [ ] JSON is valid (run it through a linter)
- [ ] File is in `src/packs/` and named `your-theme.json`
- [ ] 20-25 verbs, all specific to the theme
- [ ] `id` matches the filename (without `.json`)
- [ ] Emoji, name, description, tags, and accentColor are all set
- [ ] No duplicate verbs
- [ ] You laughed at least once while writing them

## Don't have a card image?

No problem. Submit your PR without one and note it in the description. We'll create the card art before merging.

---

If you're not sure whether your pack is good enough, just submit it. Worst case we'll help you make it better.
