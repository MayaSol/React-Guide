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

* Использовать все последние js фичи.

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


**package.json** - зависимости проекта

react-scripts - содержит все инструменты, которые мы используем в build workflow

Скрипты - 
 * **start**  - запускает сервер для разработки и запускает собранный проект на нем, отслеживает изменения.
 * **build**  - собирает проект в отдельнцю папку, готовую к деплою.

**public** - корневая папка сервера разработки

create react app настроен для создания single page application, поэтому в нем может быть только один html файл

**index.js** - рендерит компоноент App в html-элменент

App испортируется из файла App.js (.js опущен)


**App.js** - содержит реакт-компонент

### Настройки Sublime

В Sublime надо для правильной подсветки:

* установить Babel Snippets череp Package Control
* View > Syntax > Babel > Javascript
Если нет Babel в меню, установить Babel

Чтобы один раз для всего проекта указать какие настройки использовать, нужен пакет Project Specific Syntax Settings.

* Создать проект Project - Add Folder To Project
* Project - Save Project As..
* Открыть js файл; 
  View - Syntax - Babel - Javascript(Babel); 
  Правый клик - Project Specific Syntax - Copy syntax settings;
  Вставить в файл проекта .sublime-project

Чтобы настройки применялись, надо открывать проект через Project - Open Project - выбрать файл project-name.sublime-project.



### Component Basics

Можно отрендерить несколько root components для разных react apps в одном проекте.

Каждый реакт компонент должен рендерить HTML в DOM или возвращать код, который может быть отрендерен.

### JSX

JSX - это синтаксический сахар, он компилируется в вызов ф-ций React.createElement.

В JSX нельзя использовать слова, зарезервированные в js, например 'class'.

JSX выражение внутри return должно содержать единственный корневой компонент.

### Создание компонента

Принято называть файлы с компонентами с большой буквы и помещать их в отдельную папку с таким же имененм.


### Component Prop

Можно передаваить параметры в компоненты, как html-атрибуты.

Все атрибуты передаются в один аргумент компонента, который вляется объектом, а атрибуты - его св-ва. 
Его можно назвать как угодно, но лучше - props.

### Prop.children

 - зарезервированное слово. Содержит любые эл-ты, которые содержаться внутри пользовательского компонента между <Component> и </Component>


### State

 Св-во state можно добавлять в компоненты-классы. В то же время надо стараться как моэно чаще использовать компоненты-ф-ции. Это потому что, если у слишком многих компонентов есть state, то приложение становится запутанным и трудно-поддерживаемым.

 state - зарезервированное слово, надо использовать именно его для хранения и управления внутренними данными компонента.

 Особенность state в том, ято при его изменении React запускает рендеринг DOM с новыми свойствами.



### Handling Events with Methods

Ф-цию обработчик задают, как метод компонента. Если сделать его стрелочной ф-цией, то this внутри него будет ссылаться на компонент. Если метод-обработчик - обычая ф-ция, то this при вызове из приложения будет undefined. Чтобы this ссылалось на компонент, надо передавая ссылку на обработчик привязать ее к компоненту.

```
<button onClick = 'myClickHandler.bind(this)'
```

### To Which Events Can You Listen?

In the last lecture, we saw that you can react to the onClick event - but to which other events can you listen? You can find a list of supported events [here](https://reactjs.org/docs/events.html#supported-events).

### Manipulating the State

Надо вызывать 

```javascirpt
this.setState({})
```

принимает объект, в котором указывают новые знаечения св-в state. Обновляет только те св-ва, которые указаны, не трогая другие.

Реакт следит за state и props и обновляет нужные компоненты в DOM.


### Using the useState() Hook for state manipulation.

До версии React 16.8 нельзя было использовать state в функциональных компонентах, только в компонентах-классах. И это устоявшийся способ разработки на реакт.
С версии 16.8 возможно использовать функциональные компоненты для всего с помощью хуков. Это новый подход, его используют не все и неизвестно, что с ним будет в дальнейшем.


Хуки - это, по сути, коллекция ф-ций, предоставляемая React. И эти ф-ции можно использовать в функциональных компонентах.

Чтобы использовать хуки надо импортироват их.

useState - хук, позволяющий управлять состоянием в функциональных компонентах.

```javascript
import React, { useState } from 'react';
```

useState всегда возвращает массив с двумя элементами:

1.Текущее состояние.
2.Функция, которая позволяет обновить состояние таким образом, что Реакт это увидит и перерендерит нуные компоненты.

Текущее состояние, которое возвращает useState играет роль this.state, используемой в компонентах-классах.
Функция, которую возвращает useState играет роль this.setState, используемой в компонентах-классах.

### Различия исользования React Hooks и компонентов-классов.

Ф-ция для обновления состояния, возвращаемая useState, при вызове полностью заменяет текущее состояние своим аргументом. Поэтому надо вручную следить, чтобы вся информация из старого состояние попала в новое, иначе она потеряется.


#### Решение проблемы

Использовать несколько вызовов useState, по одному для каждой переменной в состоянии. 
Каждая ф-ция useState будет возвращать свою ф-цию, которую надо использовать для изменения конкретной переменной.


#### Stateless и Statefull Components

Statefull (smart, container) - компоненты, имеющие состояние (как классы, так и ф-ции с хуками)
Stateless (dumb, presentational) - компоненты, без состояния

Хорошая практика - использовать как можно больше stateless компонентов. (В небольших приложениях - пара statefull, осатльные - stateless). Это облегчает сопровождение, так как вся логика собрана в одном месте и оттуда распространяется на все приложение.

### Passing Method References Between Components

Есть метод, объявленный в каком-то компоненте. Как вызывать его в другом? 
Надо передать в компонент ссылку на метод, как значение атрибута.

Передача:

```javascript
        <Person
          name = {this.state.persons[2].name}
          myClick = {this.switchNameHandler}
        />
```

Вызов:

```javascript
      <p onClick={props.myClick}>I'm a {props.name} and I'm {props.age} years old</p>
```

Таким образом можно передавать методы, меняющие state из родительского компонента в дочерние и дочерние компоненты смогут вызывать этот метод и повлиять на state родительского, к которому у них нет прямого доступа.


#### Методы с параметрами

```javascript
  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    console.log(this);
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 30},
        {name: 'Stephany', age: 27}
      ]
    });
  }
```

Способы передачи параметров в дочерние компоненты:

1. bind

```javascript
      <button onClick={this.switchNameHandler.bind(this,'Maximillian')}>Switch Name</button>
```

2.

```javascript
      <button onClick={() => this.switchNameHandler('Maximillian!!'))}>Switch Name</button>
```

Здесь стрелочная ф-ция при клике буде возвращать результат выполнения this.switchNameHandler('Maximillian!!').

Способ 1 более эффективный, лучше использовать его. Потому что при втором способе React может перерендерить некоторые части в приложении слишком часто (???)


### Two Way Binding

```javascript
      <input type="text" onChange={props.myChanged} value={props.value}/>
```

Если убрать onChange, то input будет заблокирован, в него нельзя будет ввести значение, т.к. любое введенное значение будет заменятсья на {props.name}



### Стили отдельным файлом

Файл \*.css лучше добавлять в папку компонента и называть так же, как комонент. Эти стили глобальные и видны всему приложению. Поэтому надо задать уникальный класс компоненту и использовать его, чтобы стили не смешивались.


Мы используем webpack и поэтому делаем import css-файлв в js файл компонента, чтобы webpack знал о его существовании обработал. Webpack динамически вставит этот css в тег <style></style> в html-файле.

### Инлайн-стили

Можно записать стили в константу-объект внутри render(). Это будет js, а не css, поэтому св-ва надо писать в camelCase или в кавычках, значения свойств - в кавычках.

```javascript
  render() {
    const myStyle = {
      backgroudColor: 'white',
      font; 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <button
          style={myStyle}
        >
          Switch Name
        </button>
```

В инлайн-стилях трудно использовать все фичи css. Но плюс в том, что стили относятся только к конкретному элементу, который рендериться и не будут влиять на другие элементы. даже если они в том же вомпоненте.

Есть подход, позволяющий объединить плюсы обоих способов.