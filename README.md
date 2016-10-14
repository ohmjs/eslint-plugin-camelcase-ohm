# eslint-plugin-camelcase-ohm

An ESLint plugin that extends the built-in camelcase rule to allow underscores in semantic action names.

When writing semantic actions for an Ohm grammar, it's typical to have functions with names like `AddExp_plus`. This plugin allows a single underscore to appear in the middle of an identifier, but otherwise enforces camel-case naming.

## Usage

To use this plugin with [ESLint](http://eslint.org):

- Install this package as a dev dependency, e.g. `npm install eslint-plugin-camelcase-ohm`.

- Ensure the plugin is loaded, e.g. by adding the following to your `.eslintrc` file:

  ```
  "plugins": [
    "eslint-plugin-camelcase-ohm"
  ]
  ```

- Enable the rule in your ESLint configuration, e.g.:

  ```
  "rules": {
    "camelcase-ohm/camelcase-ohm": 2
  }
  ```

See the [ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuring-plugins) for more information.
