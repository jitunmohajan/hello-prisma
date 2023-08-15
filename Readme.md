## prisma setup


```
yarn init -y
```

```
yarn add prisma typescript ts-node @types/node --save-dev
```

```
npx tsc --init
```

```
npx prisma
```

```
npx prisma init
```

```
npx ts-node index.ts
```
## server setup


```
yarn add express cors
```


```
npx prisma migrate dev
```

```
npx prisma generate
```

```
npx prisma studio
```

```
yarn start
```

```
"scripts": {
    "start": "nodemon ./src/index.ts"
},

```
