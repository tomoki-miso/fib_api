## ディレクトリ構成

```
.
└── fib_api/
    ├── functions/
    │   ├── lib/
    │   ├── node_modules/
    │   └── src/
    │       ├── app/
    │       │   ├── controller/
    │       │   │   └── fibController.ts
    │       │   └── services/
    │       │       └── fibService.ts
    │       ├── index.ts
    │       ├── .gitignore
    │       ├── package-lock.json
    │       ├── package.json
    │       └── tsconfig.json
    ├── lib/
    ├── node_modules/
    ├── test/
    │   └── fib.test.ts
    ├── firebaserc
    ├── .gitignore
    ├── firebase.json
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
```

## 概要の説明

### functions/src/app/controller/fibController.ts

与えられた整数 n に対してフィボナッチ数列の第 n 項を計算する関数'fib'を定義。

### functions/src/app/services/FibService.ts

フィボナッチ数列の計算結果を表すオブジェクトの構造を定義するためのインターフェース'Fib'を定義。
フィボナッチ数列の計算を行うサービスクラス'FibService'を定義。

### functions/src/index.ts

フィボナッチ数列の計算を行うAPIを提供するためのExpress.jsアプリケーションを作成し、Firebase Functionsにデプロイする。

### test/fib.test.ts

functions/src/app/controller/fibController.ts に対するテストを定義。



