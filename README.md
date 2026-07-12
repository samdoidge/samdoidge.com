# samdoidge.com

`Updated July 2026.`

Personal site built with [Jekyll](https://jekyllrb.com/). Deployed automatically by GitHub Pages from the `master` branch — push to `master` and it's live a minute later.

## Running locally

Prerequisites: [Docker](https://www.docker.com/).

1. Clone the repository.
2. Ensure Docker is running.
3. Navigate to the folder and run `docker-compose up`.
4. View the website at http://localhost:4000/.

Gems are cached in a Docker volume, so the first run is slow and later runs are fast.

## Updating dependencies

To update the `Gemfile.lock` (e.g. for Dependabot alerts), run bundler inside a Ruby container:

```sh
docker run --rm -v "$PWD":/site -w /site ruby:3.3 bundle update
```

Or target specific gems: `... bundle update --conservative <gem> <gem>`.
