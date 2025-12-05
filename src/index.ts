const a: number[] = []
// `lint/suspicious/useIterableCallbackReturn` is set to 'info' in `base.json`. If you move that rule to `mongo.json` it'll suddenly start working.
a.forEach(b => b + 5)

let b: undefined | string
// `lint/style/noNonNullAssertion` is set to 'off' in `base.json`
console.log(b!)
