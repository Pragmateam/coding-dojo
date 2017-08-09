* **Format:** Mob Programming
* **Kata:** WarriorJS
* **Where:** [TabCorp](https://www.tabcorp.com.au/)
* **When:** 02/08/2017, 09/08/2017

<img src="https://user-images.githubusercontent.com/2061821/28901072-19df4a86-7839-11e7-954c-3e2868ac7276.jpg" width="620px" />

<img src="https://user-images.githubusercontent.com/2061821/29149436-82cec39a-7db7-11e7-83ee-4a1f97f75b89.jpg" width="620px" />

## State Graph

http://www.webgraphviz.com/

```
digraph finite_state_maching {
  rankdir=LR;
  size="10"
  node [shape = circle];

  "Starting" -> "Walking" [label="look(b).isEnemy"]
  "Starting" -> "Walking Backward" [label="!look(b).isEnemy"]

  "Rescuing Backward" -> "Walking Backward" [label="!isCaptive(b)"]

  "Walking Backward" -> "Rescuing Backward" [label="isCaptive(b)"]
  "Walking Backward" -> "Walking Backward" [label="isEmpty(b)"]
  "Walking Backward" -> "Walking" [label="!isEmpty(b) AND !isCaptive()"]

  "Walking" -> "Attacking" [label="!isEmpty AND !isCaptive"]
  "Walking" -> "Shooting" [label="look.isEnemy"]
  "Walking" -> "Rescuing" [label="isCaptive"]
  "Walking" -> "Walking" [label="isEmpty"]
  "Walking" -> "Pivoting" [label="isWall"]

  "Rescuing" -> "Walking" [label="!isCaptive"]

  "Resting" -> "Walking" [label="isUnderAttack OR health=20"]
  "Resting" -> "Walking Backward" [label="isUnderAttack AND health<10"]
  "Resting" -> "Resting" [label="health<20 AND !isUnderAttack"]

  "Attacking" -> "Walking" [label="health=20 AND isEmpty"]
  "Attacking" -> "Resting" [label="health<20 AND isEmpty"]
  "Attacking" -> "Attacking" [label="!isEmpty"]

  "Shooting" -> "Walking" [label="!look.isEnemy"]
  "Shooting" -> "Shooting" [label="look.isEnemy"]

  "Pivoting" -> "Walking"
}
```
