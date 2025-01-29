# TSW Notes Template

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDTeam-Top%2Ftsw-notes-template)

A simple Astro blog template for [TSW Web Extension](https://chromewebstore.google.com/detail/tsw-tiny-smart-worker/jggejkapgggcnogkbamipkihkbbeelnb) users to export their notes to a blog.

Demo: [TSW Notes](https://notes-theta-gules.vercel.app/)

## Tech Stack

- [TSW](https://github.com/foxgem/tsw)
- [Astro](https://astro.build/)
- [AstroPaper Template](https://github.com/satnaing/astro-paper)
- [astro-pagefind](https://github.com/shishkin/astro-pagefind)

## How to Use

### GitHub

1. fork this repo
1. visit github to create a personal access token
   - settings -> developer settings -> personal access tokens -> fine-grained tokens

### TSW Web Extension

1. settings -> service settings
1. set the following values
   - GitHub Token: Your personal access token
   - GitHub Owner: your github username
   - GitHub Notes Repo: your forked repo
1. select "github" as the target on the export dialog.
