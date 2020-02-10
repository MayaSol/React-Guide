# React - The Complete Guide (incl Hooks, React Router, Redux) 

* [1. Getting Started](#getting-started)
* [2. JavaScript ES6](#javascript-es6)

## Getting Started

### Intro

React - JS библиотека для постороения пользовтельских интерфейсов. Приложения на реакт запускаются в браузерах. Все действия происходят сразу после того, как они инициированы пользователем. Не надо ждать ответа от сервера.

Пользовательские интерфейсы на Реакт построены с помощью компонентов. Все что видит пользователь на странице можно разбить на компоненты. (Например, хедер, футер, контент, сайдбар)

Почему компоненты это удобно?

 * Легче поддерживать код
 * Можно переиспользовать компоненты.

 Каждый компонент в итоге выдает какой-то настраиваемый элемент html-разметки.


### First React Code

#### Окружение

Для использования React нужно как минимум следующее:

 * React - содержит необходимую логику для создания компонентов
 * React DOM - рендерит компоненты в настоящий DOM
 * Babel - JS препроцессор для использования последних фич JS, в итоге делает код таким, чтобы он работал в любых браузерах, а писать его можно со всеми последними фичами.

#### Компонент

Компонент реакт - это ф-ция, возвращает код, который будете рендериться в DOM.
Название - с большой буквы.
Возвращаемый код можно писать в формате **JSX**.

return () - в скобках многострочный код, туда можно просто вставить рвзметку и Babel преобразует ее в правильный код.

```javascript
ReactDOM.render(<ComponentFunctionName />,document.querySelector('#componentBlockId'));
```

  рендерит компонент, принимает:

 * компонент, как html-элемент ( в < />)
 * html-элемент, в который вставить компонент

В **JXS** лучше использовать className вместо class, т.к. class - зарезервированное слово (но у меня в кодепен и class сработал)

#### Параметры

Одно из главных преимуществ компонентов, в том, что мы можем формировать их динамически.

В аргумент компонента передаются все атрибуты, которые задаются компоненту при рендеринге.

Аргументы передаются в **JSX** внутри **{}**.

Таким образом можно переиспользовать один и тот же компонент с разными параметрами.

#### Рендеринг одной переменной app

Можно поместить все компоненты в одну переменную и отрендерить ее. Их надо обернуть в один эл-т, т.к. **JSX** принимает только один корневой элемент.
С таким подходом создают Single Page Application.

[codepen](https://codepen.io/mayasol/pen/OJVJJJX)


#### Какие проблемы решает React

 * трудности в управлении состоянием пользовательского интерфейса. При изменении html разметки надо менять js, т.к. элементы определяются querySelector. В приложениях, где надо быстро добавлять или удалять эл-ты код становится громоздким.

 * позволяет сконцентрироваться на логике приложения и не беспокоиться о технической реализации многих вещей

 * у React хорошая поддержка, код работает быстро и эффективно

 * большое коммьюнити, легко найти решение проблемы, дополнительные пакеты


#### Single Page Application


**Single Page Applcation**

 - самый популярный подход для приложений на реакт. Работает быстрее, т.к. не надо перезагружать всю страницу и ждать ответа от сервера.

 * Получаем одну страницу с сервера. Страница состоит из реакт-компонентов. Сама страница - root-компонент, который тоже управляется реактом.

 * Используется подход с единственным вызовом ReactDOM.render() для корневого эл-та.

 * рекомендуется использовать библиотеку react-router


 **Multi Page Application**

 * много страниц, по одной на каждый адрес. Реакт используется для отдельных виджетов, которые не знают о существовании друг друга.

 * ReactDOM.render() вызывается для каждого виджета.


## JavaScript ES6

JSBean - удобная песочница. Можно выполнять JS и видеть вывод в консоль.

### Let and Const

Используйте let для переменных и const для констант.

### Arrow Functions


```javascript
const myFunc=()=> {
...
}
````

С одним аргументом:

```javascript
const myFunc= name => {
...
}
````

Только с оператором return в теле:

```javascript
const myFunc= number => number*2;
````


### Экспорт и Импорт (Модули)

Позволяет разбить код на файлы. Импортировать в файл другие файлы, чтобы js код в файле знал какие у него зависимости.


Default export: 
```javascript
const person = {
	name: 'Max'
}

export default person
````

Not default export: 

```javascript
const clean = () => { ... };

const baseData = 10;

export clean;
export baseData;
````

Default import:

```javascript
import prs form person.js;
````

* можно называть как угодно, всегда импортируется default


Not default import (named import)

```javascript
import {clean as MyClean} form  utility.js;
import {baseData as MyData} form  utility.js;

import * as bundled from utility.js;
````
* надо указывать точные имена в {} и можно указать свое имя после **as** 
* bundled - объект, содержащий все импортированные переменные как св-ва

### Classes

```javascript
class Human {
  constructor() {
    this.gender = 'female';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Maya';
    this.gender = 'male';
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
```

super() - вызывает constructor() родительского класса

### Classes Properties and Methods

ES7 синтакс задания св-в класса:

```javascript

class MyClass {

  myProperty = 'value';
  
  myMethod = () =>  {};
}
```

Преимущества использования стрелочной ф-ции, как значения св-ва - нет проблем с this для методов. (? Они всегда вызываются в контектсе своего объекта ?)

```javascript
class Human {
    gender = 'female';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
    name = 'Maya';
    gender = 'male';
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
```

[jsbin](https://jsbin.com/picilap/10/edit?js,output)


### Spread and Rest Operators

* Spread 

 используется чтобы разделить элементы массива или св-ва объекта.

```javascript
const newArray = [...oldArray,1,2];
const newObject = {...oldObject,newProp: 5}
```

 если у oldObject есть св-во newProp оно будет переписано с новым значением

* Rest

```javascript
function sortArgs(...args) {
	return args.sort();
}
```

эта ф-ция принимает любое количество аргументов в массив args


### Destructuring

Извлечение эл-тов массива или св-в объекта и сохранение их в переменных.

```javascript
[a, , b] = ['Hello',',','World'];
console.log(a); // 'Hello'
console.log(b); // 'World'
```


```javascript
[name] = {name: 'Maya',age: '37'];
console.log(name); // 'Maya'
console.log(age); // undefined
```

### Reference and Primitive Type Refresher

Примитивы копируются при присваивании в переменную или при присванивании переменной значения другой переменной.
Объекты и массивы - ссылочные типы, при присваивании их переменной, копируется ссылка на массив или объект.

По настоящему скопировать эл-ты массива или св-ва объекта в другой массив или объект можно с помощью spread.

```javascript
const person = {name: 'Maya',age: '37'];

const newPerson = {...person};
```


### Array Functions

Не имеют собственного this, берут его из текущей области видимости.

```javascriptame 
const double = numbers.map((i) => i*2);

console.log(numbers); // [1, 2, 3]
console.log(double); // [2, 4, 6]
```

## The Basics

### Build Workflow

#### Зачем он нужен?

	* Оптимизировать код

	* Исплользовать все последние js фичи.

	* Повышает продуктивность разработчика. (CSS-autoprefixing, linting)


#### Инструменты

	* Менеджер зависимостей (все доп. библиотеки (ReactDOM, например) и вспомогательные пакеты (Babel, например)). **npm** или **yarn**

	* Bundler (сборщик) - чтобы писать код разбитый на модули, а потом объединиить его в небольшое кол-во файлов, т.к. меньше кол-во запросов - оптимальнее для работы браузера. **Webpack**


	* Компилятор последних js фич. **Babel + Presets**

	* Development Server  - web server, запускаемый локально.



#### Create React App

[create-react-app github](https://github.com/facebook/create-react-app)

```
npx create-react-app react-complete-guide --scripts-version 1.1.5
cd react-complete-guide
npm start
```

IDE - автор использует Microsoft Studio Code

В Sublime надо для правильной подсветки:

* установить Babel Snippets череp Package Control
* View > Syntax > Babel > Javascript
Если нет Babel в меню, установить Babel

**package.json** - зависимости проекта

react-scripts - содержит все инстурменты, которые мы используем в build workflow

Скрипты - 
 * **start**  - запускает сервер для разработки и запускает собранный проект на нем, отслеживает изменения.
 * **build**  - собирает проект в отдельнцю папку, готовую к деплою.

**public** - корневая папка сервера разработки

create react app настроен для создания single page application, поэтому в нем может быть только один html файл

**index.js** - рендерит компоноент App в html-элменент

App испортируется из файла App.js (.js опущен)


**App.js** - содержит реакт-компонент


### Component Basics

Можно отрендерить несколько root components для разных react apps в одном проекте.

Каждый реакт компонент должен рендерить HTML в DOM или возвращать код, который может быть отрендерен.

### JSX

JSX - это синтаксический сахар, он компилируется в вызов ф-ций React.createElement.

В JSX нельзя использовать слова, зарезервированные в js, например 'class'.

JXS выражение внутри return должно содержать единственный корневой компонент.

### Создание компонента

Принято называть файлы с компонентами с большой буквы и помещать их в отдельную папку с таким же имененм.


### Component Prop

Можно передаваить параметры в компоненты, как html-атрибуты.

Все атрибуты передаются в один аргумент компонента, который вляется объектом, а атрибуты - его св-ва. 
Его можно назвать как угодно, но лучше - props.