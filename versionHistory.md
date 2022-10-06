==========version history==========

## @2.0.0
- ↑ @2.0.0 refactor this project by typescript, now ts project can use those tools directly
- modular outputs format were set to "esm" ("cjs" format in version 1.x.x)
- ↓ mocha unit test was removed because of the conflict between mocha ts config and compilation config


If we use mocha to do unit test in a typescript project, the module must be set to "CommonJS" in typescript project's tsconfig. 
(The official examples are as follows:
https://github.com/mochajs/mocha-examples/tree/master/packages/typescript)
This requirement lead to a conflict to compilation config, so I removed the unit test temporarily.
