# Pokedex coding challenge

Additional features

- Note: before being able to prioritize the backlog, I'd want to get feedback about the MVP to see what works for Ash & what doesn't. Moving forward, I'd recommend low fidelity prototyping first (before committing to dev work) to lower costs / waste.
- See all Pokemon with sorting, filtering, pagination solution
- Search by different attributes (color, type, etc) - e.g. in the event Ash does not know the Pokemon's name
- Add new, undocumented Pokemon
- Edit existing Pokemon
- Breadcrumb for evolution chain page
- Save to "My favorites" list of Pokemon (assumes login feature or global/shared favorites)
- Add notes / comments about a Pokemon

Assumptions on use cases

- Locations meant areas where this pokemon had been encountered
- Evolution type meant evolution chain with the Pokemon that evolve to and from one another
- Spelling of Pokemmon must be correct in order to receive a result
- For MVP: Ash and friends must be able to determine the pokemon's name in order to begin search process (i.e. MVP app assumes pokemon name is known)
- Assumed Ash and friends predominantly use mobile phone (mobile-first design)

Other technologies to use
-Google Analytics or comparable tool to get critical site usage data
-integrate the "give feedback" feature with JIRA/git/ADO (work mgmt tool) instead of email

Performance concerns

- none at the moment, but if there are api calls with larger amounts for data then it could take a while (ie. /pokemon)

Visual enhancements

- Improve overall design (I am not the best designer. I tried to leverage Pokemon colors, but a bit softer)
- Improve the display of large lists (moves and location)
