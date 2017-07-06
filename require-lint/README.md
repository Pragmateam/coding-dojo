* **Format:** Mob Programming
* **Kata:** Adding a new feature to require-lint library
* **Where:** [TabCorp](https://www.tabcorp.com.au/)
* **When:** 05/07/2017


<img src="https://user-images.githubusercontent.com/2061821/27897452-ba6d8922-6263-11e7-8c2c-ed8479da8fe4.jpg" width="620px" />

## Require Lint

Adding the possibility to add packages separated by commas instead of repeating the same flag multiple times.

**Currently:**

`require-lint --ignore-extra express --ignore-extra bootstrap --ignore-extra ejs`

**After:**

`require-lint --ignore-extra express,bootstrap,ejs`

We can do it for all the flags, not only `--ignore-extra`.

PR link: https://github.com/TabDigital/require-lint/pull/14
Project: https://github.com/TabDigital/require-lint
