# samdoidge.com

`Updated April 2024.`

## Running locally

Prerequisites: [Docker](https://www.docker.com/).

1. Clone the repository.
2. Ensure Docker is running.
3. Navigate to the folder and run `docker-compose up`.
4. View the website at http://localhost:4000/.

## Updating the Gemfile

To update the Gemfile.lock you will need to run `bundle update` within the Docker container.

Docker Desktop allows you to open the terminal within the visual IDE, then simply type the command above.

## Linting SCSS

To lint the SCSS, run `npm install` in the root directory.

`npm run lint:scss` can then be called to lint the SCSS.

## Spellchecking

A spellchecker command is included. To run this:

`npm run spellcheck` to spellcheck the repository.

`npm run spellcheck:dictionary` is used to populate the dictionary `project-words.txt`.

`npm run spellcheck:trace --word=Sass` is used to see what dictionaries a word appears in (Sass) in this case. Dictionaries are configured within `cspell.json`
