# Задание ts_tree_exercise

Целью задания является разработка программы для обработки данных, организованных в древовидную структуру и проверка кандидата на знание основ типизации в языке typescript.

## Данные

Класс, возвращающий информацию о дереве, находится в файле [TreeData](./src/data/TreeData.ts). Каждый узел представляет собой реализацию [TreeNode](./src/models/TreeNode.ts).

Описание полей узла:
- `id` - `id` узла в дереве. Является уникальным
- `parentId` - `id` узла-родителя в дереве
- `value` - Значение, используемое при вычислениях
- `addValueCondition` - Флаг-условие, отображающий перенос значения или его начисление
- `valueToParent` - Значение, которое должно быть начислено вышестоящим узлам дерева в зависимости от условия `incrementValueCondition`
- `context` - Контекст, используемый при вычислениях

## Инициализация проекта

Для установки зависимостей нужно выполнить `npm i` в корне проекта

Для запуска проекта используется команда `npm run start` 

## Задания

1. Разработайте реализацию интерфейса [ITreeWalker](./src/interfaces/ITreeWalker.ts)

Описание методов:
- `init` - Инициализирует класс списком узлов дерева
- `reverseWalk` - Выполняет обход дерева в ширину снизу вверх, вызывая функцию-обработчик для каждого из узлов дерева (Обход происходит по уровням дерева, начиная с самого нижнего)

2. Разработайте реализацию интерфейса [ITreeNodeHandler](./src/interfaces/ITreeNodeHandler.ts)
Класс должен реализовывать метод `handleNode`, который работает по следующему алгоритму:

- Метод принимает узел дерева и его родителя
- Если для узла выполняется условие `addValueCondition == true`, то в его `value` должна быть сумма значений `valueToParent` всех его детей
- Если для узла выполняется условие `addValueCondition == false`, то все `valueToParent` его детей должны быть отправлены родителю, как и `valueToParent` самого узла
- Если у родителя `addValueCondition == false`, то значения перемещаются еще выше
- Если для узла значение `value` было записано, то родителю должно быть отправлено только значение `valueToParent` от текущего узла

Для реализации описанного функционала можно использовать контекст `TreeNode`, который позволяет хранить любой заранее объявленный тип данных

## Общие положения

- Можно использовать любые программные инструменты разработки (библиотеки/npm пакеты, IDE, версии Node.js и т.п.), разрабатывать на любой платформе
- Допускается добавление любых типов/файлов, но для изменения доступен только файл [main.ts](./src/main.ts)
- Необходима строгая типизация всего написанного кода
- Ориентировочное предполагаемое время на выполнение задания - 40-60 минут
- Данные задания не являются обязательными, однако позволяет более точно определить квалификацию специалиста, что положительно влияет на оценку профессиональных навыков

## Результат выполнения задания

Отображение дерева до запуска обработчика:
```
Node 1 - condition: false, value: 0, valueToParent: 10
|  Node 2 - condition: true, value: 0, valueToParent: 10
|  |  Node 4 - condition: true, value: 0, valueToParent: 10
|  |  |  Node 5 - condition: true, value: 0, valueToParent: 10
|  |  |  Node 8 - condition: false, value: 0, valueToParent: 10
|  |  |  |  Node 9 - condition: true, value: 0, valueToParent: 10
|  |  |  |  Node 12 - condition: true, value: 0, valueToParent: 10
|  |  |  Node 11 - condition: true, value: 0, valueToParent: 10
|  Node 3 - condition: true, value: 0, valueToParent: 10
|  |  Node 6 - condition: false, value: 0, valueToParent: 10
|  |  |  Node 7 - condition: false, value: 0, valueToParent: 10
|  |  |  |  Node 10 - condition: true, value: 0, valueToParent: 10
```

Отображение дерева после запуска обработчика
```
Node 1 - condition: false, value: 0, valueToParent: 10
|  Node 2 - condition: true, value: 10, valueToParent: 10
|  |  Node 4 - condition: true, value: 50, valueToParent: 10
|  |  |  Node 5 - condition: true, value: 0, valueToParent: 10
|  |  |  Node 8 - condition: false, value: 0, valueToParent: 10
|  |  |  |  Node 9 - condition: true, value: 0, valueToParent: 10
|  |  |  |  Node 12 - condition: true, value: 0, valueToParent: 10
|  |  |  Node 11 - condition: true, value: 0, valueToParent: 10
|  Node 3 - condition: true, value: 30, valueToParent: 10
|  |  Node 6 - condition: false, value: 0, valueToParent: 10
|  |  |  Node 7 - condition: false, value: 0, valueToParent: 10
|  |  |  |  Node 10 - condition: true, value: 0, valueToParent: 10
```
