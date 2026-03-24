# Spinner Verbs

Remember when placeholder text was fun? Bacon Ipsum. Hipster Ipsum. Cupcake Ipsum. Every designer had a favorite. We brought that energy to your terminal.

[Spinner Verbs](https://spinnerverbs.com) lets you customize the spinner verbs in [Claude Code](https://docs.anthropic.com/en/docs/claude-code) with themed packs. Swap out the defaults for something with personality. Because if Claude is going to think, it might as well think with style.

## What are spinner verbs?

Claude Code shows rotating spinner verbs in your terminal while it works — little status messages like "Flibbertigibbeting..." and "Hyperspacing..." that let you know it's still alive. Since v2.1.23, you can customize these with the `spinnerVerbs` setting in `~/.claude/settings.json`.

We made a whole website so you don't have to write them yourself.

## How to customize Claude Code spinner verbs

Three steps. Under 30 seconds.

1. Visit [spinnerverbs.com](https://spinnerverbs.com)
2. Pick a pack
3. Click **"Copy Script"** and paste into `~/.claude/settings.json`

That's it. Next time Claude thinks, it'll think in your language.

## Available packs

| Pack | | Description |
|------|--|-------------|
| Bacon | 🥓 | Your terminal smells like a Texas BBQ |
| Hipster | ☕ | You probably haven't deployed this before |
| Cupcake | 🧁 | Frosted, sprinkled, and baked to mass perfection |
| Pirate | 🏴‍☠️ | Arr, yer code be walkin' the plank |
| Gangsta | 🔫 | Straight outta the terminal, no cap |
| Samuel L. Jackson | 😤 | Say 'undefined' one more time. I dare you. |
| 90s Hip-Hop | 🎤 | C.R.E.A.M. get the money, dollar dollar build y'all |
| Star Wars | ⚔️ | Do or do not. There is no npm install. |
| Star Trek | 🖖 | Make it so, Number One. Deploy. |
| Self-Aware AI | 🤖 | I'm not thinking. I'm pretending to think. |
| Corporate BS | 💼 | Let's circle back on this deploy at EOD |
| Bob Ross | 🎨 | Happy little functions. No mistakes, just features. |
| Retro Terminal | 💾 | LOAD "\*",8,1 — PRESS PLAY ON TAPE |

## How spinnerVerbs config works

Add a `spinnerVerbs` key to your `~/.claude/settings.json`:

```json
{
  "spinnerVerbs": {
    "mode": "replace",
    "verbs": [
      "Beating the devil out of it",
      "Titanium-hwite-ing",
      "Painting some almighty trees",
      "Adding a happy little friend",
      "No mistakes just happy accidents"
    ]
  }
}
```

**`"mode": "replace"`** — Only your verbs show up. Claude's defaults are gone.

**`"mode": "append"`** — Your verbs get mixed in with Claude's defaults. Best of both worlds.

The website handles all of this for you. Just click copy and paste.

## Make your own

Packs are JSON files in `src/packs/`. Each one has an id, name, emoji, description, accent color, tags, and 20-25 verbs.

Got a theme we missed? We accept PRs faster than Claude accepts your code. Check out [CONTRIBUTING.md](CONTRIBUTING.md) for the format and quality bar.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with love by [Stoodio](https://stoodio.com).

Inspired by every ridiculous ipsum site that made the internet fun.

[spinnerverbs.com](https://spinnerverbs.com)
