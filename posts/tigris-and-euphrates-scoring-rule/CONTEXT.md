# Tigris & Euphrates Scoring

The vocabulary for the analysis of the Tigris & Euphrates scoring rule. The
rulebook supplies most of these words. Where it supplies none, this file picks
one and says so.

## Language

### From the rulebook

**Sphere**:
One of the four scoring categories: settlements, temples, farms, and markets.
The rulebook compares spheres to decide the winner.
_Avoid_: pile, category, suit, colour

**Colour**:
The attribute of a physical component — a tile, a leader, a monument, or a
victory point token. Each colour matches exactly one sphere.
_Avoid_: suit, type, sphere

**Lowest sphere**:
The sphere in which a player holds the fewest victory points. The rulebook
compares these first, then the second lowest, and so on.
_Avoid_: minimum, primary sphere, weakest colour

**Treasure**:
A victory point token that is wild. At the end of the game a player allocates
each treasure to any sphere.
_Avoid_: wild, joker, wildcard

**Tie**:
Reserve this word for what the rulebook uses it for: a tie between players, and
a tie in a conflict. Never use it for spheres that hold equal points — say a
level floor instead.
_Avoid_: using "tie" for equal spheres

### Added by this analysis

**Portfolio**:
The four sphere totals held by one player at one moment, taken together as one
object. The scoring rule sorts and compares portfolios.
_Avoid_: score vector, position, holding, hand

**Floor**:
An informal synonym for the lowest sphere. Use it for the level itself: your
floor is the number of points in your lowest sphere.
_Avoid_: basement, bottom, minimum

**Windfall**:
Several victory points that arrive at once in a single sphere, as a war reward
does. The rulebook has no term for this.
_Avoid_: burst, lump, haul

**Single-colour windfall / single-sphere windfall**:
The same event in two registers. Say **single-colour** when describing play,
because points arrive coloured and players say it that way. Say
**single-sphere** inside the propositions, where the claim is about the sorted
portfolio and colour is not visible to the rule.
_Avoid_: mixing the two registers in one sentence

**Criterion**:
One numbered slot in the sorted portfolio. Criterion 1 is the lowest sphere,
criterion 2 the second lowest, and so on. Criterion 1 is not a tiebreak.
_Avoid_: tiebreak (as a noun), level, position

**Floor multiplicity**:
How many spheres hold the floor value. It is written *w*. It is the price in
points of lifting your floor by one, and the criterion a windfall moves.
_Avoid_: floor width, floor count, floor size, tie width (the board is a grid
of spaces, so any width or size word reads as board geometry)

**Leximin**:
The rulebook's comparison, stated formally: sort a portfolio ascending, then
compare two sorted portfolios element by element. The first difference decides.
_Avoid_: maximin, minimax, lexicographic minimum

### The simulation

**Run**:
One instance of the allocation model. A run is never a game.
_Avoid_: trial, game, simulation, iteration

**Game**:
A played game of Tigris & Euphrates. A game is never a run.
_Avoid_: match, session

**Steering**:
The mechanism that puts a point into a sphere the player chooses, rather than a
sphere the board chooses.
_Avoid_: control, targeting, discipline

**Discipline**:
How often a player steers, as a proportion of all points received. Discipline
is the quantity; steering is the mechanism.
_Avoid_: steering, steer rate
